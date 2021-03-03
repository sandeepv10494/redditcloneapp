import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable, throwError } from 'rxjs';
import { LoginRequestPayload } from '../login/login-request.payload';
import { LoginResponse } from '../login/login-response.payload';
import { SignupRequestPayload } from '../sign-up/signup-request.payload';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @Output() loggedIn: EventEmitter<boolean> = new EventEmitter();
  @Output() username: EventEmitter<string> = new EventEmitter();

  refreshTokenPayload = {
    refreshToken: this.getRefreshToken(),
    username: this.getUserName()
  }

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) { }

  signup(signupRequestPayload:SignupRequestPayload): Observable<any>{
    return this.http.post('http://localhost:8080/api/auth/signup', signupRequestPayload);
  }

  login(loginRequestPaload: LoginRequestPayload): Observable<any>{
    return this.http.post<LoginResponse>('http://localhost:8080/api/auth/login', loginRequestPaload)
          .pipe(map(data => {
            this.localStorageService.store('authenticationToken', data.authenticationToken);
            this.localStorageService.store('username', data.username);
            this.localStorageService.store('refreshToken', data.refreshToken);
            this.localStorageService.store('expiresAt', data.expiresAt);

            this.loggedIn.emit(true);
            this.username.emit(data.username);
            return true;
          }));
  }

  getJwtToken(){
    return this.localStorageService.retrieve('authenticationToken');
  }

  refreshToken(){
    return this.http.post<LoginResponse>('http://localhost:8080/api/auth/refresh/token', this.refreshTokenPayload)
    .pipe(tap(response => {
      this.localStorageService.clear('authenticationToken');
      this.localStorageService.clear('expiresAt');

      this.localStorageService.store('authenticationToken', response.authenticationToken);
      this.localStorageService.store('expiresAt', response.expiresAt);
    }));
  }

  logout(){
    this.http.post('http://localhost:8080/api/auth/logout', this.refreshTokenPayload,
      { responseType: 'text' })
      .subscribe(data => {
        console.log(data);
      }, error => {
        throwError(error);
      })
    this.localStorageService.clear('authenticationToken');
    this.localStorageService.clear('username');
    this.localStorageService.clear('refreshToken');
    this.localStorageService.clear('expiresAt');
  }

  getUserName(){
    return this.localStorageService.retrieve('username');
  }

  getRefreshToken(){
    return this.localStorageService.retrieve('refreshToken');
  }

  isLoggedIn(): boolean {
    return this.getJwtToken() != null;
  }
}
