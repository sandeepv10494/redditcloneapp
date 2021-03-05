(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+2AF":
/*!************************************************!*\
  !*** ./src/app/subreddit/subreddit.service.ts ***!
  \************************************************/
/*! exports provided: SubredditService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubredditService", function() { return SubredditService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");



class SubredditService {
    constructor(http) {
        this.http = http;
    }
    getAllSubreddits() {
        return this.http.get('http://localhost:8080/api/subreddit');
    }
    createSubreddit(subredditModel) {
        return this.http.post('http://localhost:8080/api/subreddit', subredditModel);
    }
}
SubredditService.ɵfac = function SubredditService_Factory(t) { return new (t || SubredditService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SubredditService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SubredditService, factory: SubredditService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubredditService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Sandeep\Workspace\Full-Stack-Applications\redditclone\src\main\resources\frontend\redditclone-angular-app\src\main.ts */"zUnb");


/***/ }),

/***/ "2hQ/":
/*!*****************************************************************!*\
  !*** ./src/app/auth/user-component/user-component.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponentComponent", function() { return UserComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/post.service */ "EthR");
/* harmony import */ var src_app_comment_comment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/comment/comment.service */ "mqg1");
/* harmony import */ var _shared_post_tile_post_tile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/post-tile/post-tile.component */ "cmaH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function UserComponentComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r1.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r1.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r1.text);
} }
class UserComponentComponent {
    constructor(activatedRoute, postService, commentService) {
        this.activatedRoute = activatedRoute;
        this.postService = postService;
        this.commentService = commentService;
        this.name = this.activatedRoute.snapshot.params.name;
        this.postService.getAllPostsByUser(this.name).subscribe(data => {
            this.posts = data;
            this.postLength = data.length;
        });
        this.commentService.getAllCommentsByUser(this.name).subscribe(data => {
            this.comments = data;
            this.commentLength = data.length;
        });
    }
    ngOnInit() {
    }
}
UserComponentComponent.ɵfac = function UserComponentComponent_Factory(t) { return new (t || UserComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_comment_comment_service__WEBPACK_IMPORTED_MODULE_3__["CommentService"])); };
UserComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserComponentComponent, selectors: [["app-user-component"]], decls: 22, vars: 5, consts: [[1, "container"], [2, "margin-top", "20px"], [3, "posts"], [4, "ngFor", "ngForOf"], [1, "comment"], [1, "username"], ["routerLink", "/user/comment.username"]], template: function UserComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Welcome ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " You have posted ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " time(s) and commented ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " time(s). You can check your post and comment history below. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Your Posts: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-post-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Your Comments: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, UserComponentComponent_div_21_Template, 11, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.postLength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.commentLength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("posts", ctx.posts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comments);
    } }, directives: [_shared_post_tile_post_tile_component__WEBPACK_IMPORTED_MODULE_4__["PostTileComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-component',
                templateUrl: './user-component.component.html',
                styleUrls: ['./user-component.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: src_app_shared_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }, { type: src_app_comment_comment_service__WEBPACK_IMPORTED_MODULE_3__["CommentService"] }]; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/post.service */ "EthR");
/* harmony import */ var _shared_post_tile_post_tile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/post-tile/post-tile.component */ "cmaH");
/* harmony import */ var _shared_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/side-bar/side-bar.component */ "yObi");
/* harmony import */ var _shared_subreddit_side_bar_subreddit_side_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/subreddit-side-bar/subreddit-side-bar.component */ "CYAm");






class HomeComponent {
    constructor(postService) {
        this.postService = postService;
        this.posts = [];
        this.postService.getAllPosts().subscribe(post => {
            this.posts = post;
        });
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 9, vars: 1, consts: [[1, "reddit-body"], [1, "container"], [1, "row"], [1, "col-md-9"], [3, "posts"], [1, "col-md-3"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-post-tile", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-side-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-subreddit-side-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("posts", ctx.posts);
    } }, directives: [_shared_post_tile_post_tile_component__WEBPACK_IMPORTED_MODULE_2__["PostTileComponent"], _shared_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_3__["SideBarComponent"], _shared_subreddit_side_bar_subreddit_side_bar_component__WEBPACK_IMPORTED_MODULE_4__["SubredditSideBarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _shared_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CYAm":
/*!***************************************************************************!*\
  !*** ./src/app/shared/subreddit-side-bar/subreddit-side-bar.component.ts ***!
  \***************************************************************************/
/*! exports provided: SubredditSideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubredditSideBarComponent", function() { return SubredditSideBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_subreddit_subreddit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/subreddit/subreddit.service */ "+2AF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





function SubredditSideBarComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subreddit_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/view-subreddit/", subreddit_r2.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subreddit_r2.name);
} }
function SubredditSideBarComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "View All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SubredditSideBarComponent {
    constructor(subredditService) {
        this.subredditService = subredditService;
        this.subreddits = [];
        this.subredditService.getAllSubreddits().subscribe(data => {
            if (data.length > 3) {
                this.subreddits = data.splice(0, 3);
                this.displayViewAll = true;
            }
            else {
                this.subreddits = data;
            }
        });
    }
    ngOnInit() { }
}
SubredditSideBarComponent.ɵfac = function SubredditSideBarComponent_Factory(t) { return new (t || SubredditSideBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_subreddit_subreddit_service__WEBPACK_IMPORTED_MODULE_1__["SubredditService"])); };
SubredditSideBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubredditSideBarComponent, selectors: [["app-subreddit-side-bar"]], decls: 6, vars: 2, consts: [[1, "sidebar-view-subreddit"], [2, "color", "black", "font-weight", "bold"], [4, "ngFor", "ngForOf"], ["style", "text-align: center", 4, "ngIf"], [1, "subreddit-text"], [3, "href"], [2, "text-align", "center"], ["routerLink", "/list-subreddits", 2, "font-weight", "bold"]], template: function SubredditSideBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Browse Subreddits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SubredditSideBarComponent_span_4_Template, 5, 2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SubredditSideBarComponent_div_5_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subreddits);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayViewAll);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".sidebar-view-subreddit[_ngcontent-%COMP%] {\r\n  width: 312px;\r\n  height: 242px;\r\n  --post-line-color: #ccc;\r\n  border: 1px solid #ccc;\r\n  margin-bottom: 10px;\r\n  overflow: hidden;\r\n  background-color: rgba(255, 255, 255, 0.8);\r\n  color: #878a8c;\r\n  position: relative;\r\n  border-radius: 4px;\r\n  padding: 5px;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.sidebar-view-subreddit[_ngcontent-%COMP%] {\r\n  height: 280px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnJlZGRpdC1zaWRlLWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsMENBQTBDO0VBQzFDLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InN1YnJlZGRpdC1zaWRlLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXItdmlldy1zdWJyZWRkaXQge1xyXG4gIHdpZHRoOiAzMTJweDtcclxuICBoZWlnaHQ6IDI0MnB4O1xyXG4gIC0tcG9zdC1saW5lLWNvbG9yOiAjY2NjO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICBjb2xvcjogIzg3OGE4YztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5zaWRlYmFyLXZpZXctc3VicmVkZGl0IHtcclxuICBoZWlnaHQ6IDI4MHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubredditSideBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-subreddit-side-bar',
                templateUrl: './subreddit-side-bar.component.html',
                styleUrls: ['./subreddit-side-bar.component.css']
            }]
    }], function () { return [{ type: src_app_subreddit_subreddit_service__WEBPACK_IMPORTED_MODULE_1__["SubredditService"] }]; }, null); })();


/***/ }),

/***/ "EthR":
/*!****************************************!*\
  !*** ./src/app/shared/post.service.ts ***!
  \****************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");



class PostService {
    constructor(http) {
        this.http = http;
    }
    getAllPosts() {
        return this.http.get('http://localhost:8080/api/posts/');
    }
    getPost(id) {
        return this.http.get('http://localhost:8080/api/posts/' + id);
    }
    getAllPostsByUser(name) {
        return this.http.get('http://localhost:8080/api/posts/by-username/' + name);
    }
    createPost(postPayload) {
        return this.http.post('http://localhost:8080/api/posts/', postPayload);
    }
}
PostService.ɵfac = function PostService_Factory(t) { return new (t || PostService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PostService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostService, factory: PostService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Gkp2":
/*!*******************************************************!*\
  !*** ./src/app/post/view-post/view-post.component.ts ***!
  \*******************************************************/
/*! exports provided: ViewPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPostComponent", function() { return ViewPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/observable/throwError */ "vLqr");
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_shared_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/post.service */ "EthR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_comment_comment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/comment/comment.service */ "mqg1");
/* harmony import */ var _shared_vote_button_vote_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/vote-button/vote-button.component */ "aUGB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/side-bar/side-bar.component */ "yObi");
/* harmony import */ var _shared_subreddit_side_bar_subreddit_side_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/subreddit-side-bar/subreddit-side-bar.component */ "CYAm");












function ViewPostComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r1.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r1.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r1.text);
} }
class ViewPostComponent {
    constructor(postService, activateRoute, commentService, router) {
        this.postService = postService;
        this.activateRoute = activateRoute;
        this.commentService = commentService;
        this.router = router;
        this.postId = this.activateRoute.snapshot.params.id;
        this.commentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            text: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.commentPayload = {
            text: '',
            postId: this.postId
        };
    }
    ngOnInit() {
        this.getPostById();
        this.getCommentsForPost();
    }
    postComment() {
        this.commentPayload.text = this.commentForm.get('text').value;
        this.commentService.postComment(this.commentPayload).subscribe(data => {
            this.commentForm.get('text').setValue('');
            this.getCommentsForPost();
        }, error => {
            Object(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        });
    }
    getPostById() {
        this.postService.getPost(this.postId).subscribe(data => {
            this.post = data;
        }, error => {
            Object(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        });
    }
    getCommentsForPost() {
        this.commentService.getAllCommentsForPost(this.postId).subscribe(data => {
            this.comments = data;
        }, error => {
            Object(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        });
    }
}
ViewPostComponent.ɵfac = function ViewPostComponent_Factory(t) { return new (t || ViewPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_comment_comment_service__WEBPACK_IMPORTED_MODULE_5__["CommentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ViewPostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewPostComponent, selectors: [["app-view-post"]], decls: 34, vars: 9, consts: [[1, "container"], [1, "row"], [1, "col-md-9"], [1, "row", "post"], [1, "col-md-1"], [3, "post"], [1, "col-md-11"], [1, "subreddit-text"], ["href", "", 1, "post-url"], ["href", "", 1, "username"], ["routerLink", "post.url", 1, "post-title"], [1, "post-text", 3, "innerHtml"], [1, "post-comment"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["placeholder", "Your Thoughts?", 1, "form-control", 3, "formControlName"], ["type", "submit", 1, "login", "float-right"], ["style", "margin-top: 60px;", 4, "ngFor", "ngForOf"], [1, "col-md-3"], [2, "margin-top", "60px"], [1, "comment"], [1, "username"], ["routerLink", "/user/comment.username"]], template: function ViewPostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-vote-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " . Posted ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ViewPostComponent_Template_form_ngSubmit_25_listener() { return ctx.postComment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ViewPostComponent_div_30_Template, 11, 3, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "app-side-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-subreddit-side-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", ctx.post);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.subredditName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.post.duration, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.postName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.post.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.commentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comments);
    } }, directives: [_shared_vote_button_vote_button_component__WEBPACK_IMPORTED_MODULE_6__["VoteButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _shared_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_8__["SideBarComponent"], _shared_subreddit_side_bar_subreddit_side_bar_component__WEBPACK_IMPORTED_MODULE_9__["SubredditSideBarComponent"]], styles: [".post-title[_ngcontent-%COMP%] {\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n  opacity: 1;\r\n}\r\n\r\n.post-title[_ngcontent-%COMP%]:hover {\r\n  opacity: 0.6;\r\n}\r\n\r\n.subreddit-text[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\r\n\r\n.post-url[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\r\n\r\n.username[_ngcontent-%COMP%] {\r\n  color: gray;\r\n}\r\n\r\n.post-text[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n}\r\n\r\n.post[_ngcontent-%COMP%] {\r\n  --post-line-color: #ccc;\r\n  border: 1px solid #ccc;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n  overflow: hidden;\r\n  background-color: rgba(255, 255, 255, 0.8);\r\n  color: #878a8c;\r\n  position: relative;\r\n  border-radius: 4px;\r\n  padding: 5px;\r\n}\r\n\r\n.comment[_ngcontent-%COMP%] {\r\n  --post-line-color: #ccc;\r\n  border: 1px solid #ccc;\r\n  margin-bottom: 10px;\r\n  overflow: hidden;\r\n  background-color: rgba(255, 255, 255, 0.8);\r\n  color: #878a8c;\r\n  position: relative;\r\n  border-radius: 4px;\r\n  padding: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctcG9zdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDBDQUEwQztFQUMxQyxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsMENBQTBDO0VBQzFDLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZCIsImZpbGUiOiJ2aWV3LXBvc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0LXRpdGxlIHtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLnBvc3QtdGl0bGU6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuNjtcclxufVxyXG5cclxuLnN1YnJlZGRpdC10ZXh0IHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnBvc3QtdXJsIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi51c2VybmFtZSB7XHJcbiAgY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi5wb3N0LXRleHQge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5wb3N0IHtcclxuICAtLXBvc3QtbGluZS1jb2xvcjogI2NjYztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICBjb2xvcjogIzg3OGE4YztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmNvbW1lbnQge1xyXG4gIC0tcG9zdC1saW5lLWNvbG9yOiAjY2NjO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICBjb2xvcjogIzg3OGE4YztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewPostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-post',
                templateUrl: './view-post.component.html',
                styleUrls: ['./view-post.component.css']
            }]
    }], function () { return [{ type: src_app_shared_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: src_app_comment_comment_service__WEBPACK_IMPORTED_MODULE_5__["CommentService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "H9UO":
/*!****************************************!*\
  !*** ./src/app/shared/vote.service.ts ***!
  \****************************************/
/*! exports provided: VoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteService", function() { return VoteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");



class VoteService {
    constructor(http) {
        this.http = http;
    }
    vote(votePayload) {
        return this.http.post('http://localhost:8080/api/votes/', votePayload);
    }
}
VoteService.ɵfac = function VoteService_Factory(t) { return new (t || VoteService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
VoteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VoteService, factory: VoteService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoteService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "KrRH":
/*!************************************************************************!*\
  !*** ./src/app/subreddit/list-subreddits/list-subreddits.component.ts ***!
  \************************************************************************/
/*! exports provided: ListSubredditsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSubredditsComponent", function() { return ListSubredditsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/observable/throwError */ "vLqr");
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _subreddit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../subreddit.service */ "+2AF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/side-bar/side-bar.component */ "yObi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







function ListSubredditsComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subreddit_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/view-subreddit/", subreddit_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subreddit_r1.name);
} }
class ListSubredditsComponent {
    constructor(subredditService) {
        this.subredditService = subredditService;
    }
    ngOnInit() {
        this.subredditService.getAllSubreddits().subscribe(data => {
            this.subreddits = data;
        }, error => {
            Object(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        });
    }
}
ListSubredditsComponent.ɵfac = function ListSubredditsComponent_Factory(t) { return new (t || ListSubredditsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_subreddit_service__WEBPACK_IMPORTED_MODULE_2__["SubredditService"])); };
ListSubredditsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListSubredditsComponent, selectors: [["app-list-subreddits"]], decls: 10, vars: 1, consts: [[1, "container"], [1, "row"], [1, "col-md-9"], [4, "ngFor", "ngForOf"], [1, "col-md-3"], [3, "routerLink"]], template: function ListSubredditsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "List of Subreddits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ListSubredditsComponent_li_7_Template, 3, 2, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-side-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subreddits);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_4__["SideBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LXN1YnJlZGRpdHMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListSubredditsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-subreddits',
                templateUrl: './list-subreddits.component.html',
                styleUrls: ['./list-subreddits.component.css']
            }]
    }], function () { return [{ type: _subreddit_service__WEBPACK_IMPORTED_MODULE_2__["SubredditService"] }]; }, null); })();


/***/ }),

/***/ "LT7N":
/*!**************************************!*\
  !*** ./src/app/token-interceptor.ts ***!
  \**************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _auth_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/shared/auth.service */ "XQLn");






class TokenInterceptor {
    constructor(authService) {
        this.authService = authService;
        this.isTokenRefreshing = false;
        this.refreshTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    intercept(req, next) {
        if (req.url.indexOf('refresh') !== -1 || req.url.indexOf('login') !== -1) {
            return next.handle(req);
        }
        const jwtToken = this.authService.getJwtToken();
        if (jwtToken) {
            return next.handle(this.addToken(req, jwtToken)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
                if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"] && error.status === 403) {
                    return this.handleAuthErrors(req, next);
                }
                else {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
                }
            }));
        }
        return next.handle(req);
    }
    handleAuthErrors(req, next) {
        if (!this.isTokenRefreshing) {
            this.isTokenRefreshing = true;
            this.refreshTokenSubject.next(null);
            return this.authService.refreshToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((refreshTokenResponse) => {
                this.isTokenRefreshing = false;
                this.refreshTokenSubject
                    .next(refreshTokenResponse.authenticationToken);
                return next.handle(this.addToken(req, refreshTokenResponse.authenticationToken));
            }));
        }
        else {
            return this.refreshTokenSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(result => result !== null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((res) => {
                return next.handle(this.addToken(req, this.authService.getJwtToken()));
            }));
        }
    }
    addToken(req, jwtToken) {
        return req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + jwtToken)
        });
    }
}
TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) { return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TokenInterceptor, factory: TokenInterceptor.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TokenInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _auth_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "OxXG":
/*!**************************************************************************!*\
  !*** ./src/app/subreddit/create-subreddit/create-subreddit.component.ts ***!
  \**************************************************************************/
/*! exports provided: CreateSubredditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSubredditComponent", function() { return CreateSubredditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _subreddit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../subreddit.service */ "+2AF");







class CreateSubredditComponent {
    constructor(router, subredditService) {
        this.router = router;
        this.subredditService = subredditService;
        this.title = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.description = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.createSubredditForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.subredditModel = {
            name: '',
            description: ''
        };
    }
    ngOnInit() {
    }
    discard() {
        this.router.navigateByUrl('/');
    }
    createSubreddit() {
        this.subredditModel.name = this.createSubredditForm.get('title').value;
        this.subredditModel.description = this.createSubredditForm.get('description').value;
        this.subredditService.createSubreddit(this.subredditModel).subscribe(data => {
            this.router.navigateByUrl('/list-subreddits');
        }, error => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        });
    }
}
CreateSubredditComponent.ɵfac = function CreateSubredditComponent_Factory(t) { return new (t || CreateSubredditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_subreddit_service__WEBPACK_IMPORTED_MODULE_4__["SubredditService"])); };
CreateSubredditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateSubredditComponent, selectors: [["app-create-subreddit"]], decls: 31, vars: 3, consts: [[1, "container"], [1, "row"], [1, "create-subreddit-container"], [1, "post-form", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "create-subreddit-heading"], ["type", "text", "placeholder", "Title", 1, "form-control", 2, "margin-top", "5px", 3, "formControlName"], ["type", "text", "placeholder", "Description", 2, "width", "100%", "margin-top", "5px", 3, "formControlName"], [1, "float-right", 2, "margin-top", "5px"], [1, "btnDiscard", 3, "click"], [1, "btnCreateSubreddit"], [1, "col-md-3"], [1, "sidebar"], [1, "guidelines"]], template: function CreateSubredditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreateSubredditComponent_Template_form_ngSubmit_3_listener() { return ctx.createSubreddit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Create Subreddit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateSubredditComponent_Template_button_click_12_listener() { return ctx.discard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Discard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Posting to Spring Reddit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Remember the human");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Behave like you would in real life");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Don't spam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.createSubredditForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", "description");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".create-subreddit-container[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  --post-line-color: #ccc;\r\n  border: 1px solid #ccc;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n  overflow: hidden;\r\n  background-color: rgba(255, 255, 255, 0.8);\r\n  color: #878a8c;\r\n  position: relative;\r\n  border-radius: 4px;\r\n  padding: 5px;\r\n}\r\n\r\n.create-subreddit-heading[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n  line-height: 22px;\r\n  color: #1c1c1c;\r\n  flex: 1;\r\n}\r\n\r\n.btnCreateSubreddit[_ngcontent-%COMP%] {\r\n  background-color: #0079d3;\r\n  border-color: #0079d3;\r\n  color: aliceblue;\r\n  fill: #0079d3;\r\n  border: 1px solid;\r\n  border-radius: 4px;\r\n  text-align: center;\r\n  letter-spacing: 1px;\r\n  text-decoration: none;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n  letter-spacing: 0.5px;\r\n  line-height: 24px;\r\n  text-transform: uppercase;\r\n  padding: 3px 16px;\r\n  opacity: 1;\r\n  width: 288px;\r\n  height: 34px;\r\n}\r\n\r\n.btnDiscard[_ngcontent-%COMP%] {\r\n  fill: #0079d3;\r\n  border: 1px solid;\r\n  border-radius: 4px;\r\n  text-align: center;\r\n  letter-spacing: 1px;\r\n  text-decoration: none;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n  letter-spacing: 0.5px;\r\n  line-height: 24px;\r\n  text-transform: uppercase;\r\n  padding: 3px 16px;\r\n  opacity: 1;\r\n  width: 288px;\r\n  height: 34px;\r\n  margin-top: 5px;\r\n  color: #0079d3;\r\n  background-color: transparent;\r\n}\r\n\r\n.guidelines[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n  line-height: 20px;\r\n  color: #1c1c1c;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%] {\r\n  width: 312px;\r\n  height: 242px;\r\n  --post-line-color: #ccc;\r\n  border: 1px solid #ccc;\r\n  margin-bottom: 10px;\r\n  overflow: hidden;\r\n  background-color: rgba(255, 255, 255, 0.8);\r\n  color: #878a8c;\r\n  position: relative;\r\n  border-radius: 4px;\r\n  padding: 5px;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1zdWJyZWRkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDBDQUEwQztFQUMxQyxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixjQUFjO0VBRWQsT0FBTztBQUNUOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztFQUNkLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsMENBQTBDO0VBQzFDLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImNyZWF0ZS1zdWJyZWRkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmVhdGUtc3VicmVkZGl0LWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICAtLXBvc3QtbGluZS1jb2xvcjogI2NjYztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICBjb2xvcjogIzg3OGE4YztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmNyZWF0ZS1zdWJyZWRkaXQtaGVhZGluZyB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgY29sb3I6ICMxYzFjMWM7XHJcbiAgLW1zLWZsZXg6IDE7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLmJ0bkNyZWF0ZVN1YnJlZGRpdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzlkMztcclxuICBib3JkZXItY29sb3I6ICMwMDc5ZDM7XHJcbiAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICBmaWxsOiAjMDA3OWQzO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgcGFkZGluZzogM3B4IDE2cHg7XHJcbiAgb3BhY2l0eTogMTtcclxuICB3aWR0aDogMjg4cHg7XHJcbiAgaGVpZ2h0OiAzNHB4O1xyXG59XHJcblxyXG4uYnRuRGlzY2FyZCB7XHJcbiAgZmlsbDogIzAwNzlkMztcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHBhZGRpbmc6IDNweCAxNnB4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgd2lkdGg6IDI4OHB4O1xyXG4gIGhlaWdodDogMzRweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgY29sb3I6ICMwMDc5ZDM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5ndWlkZWxpbmVzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6ICMxYzFjMWM7XHJcbn1cclxuXHJcbi5zaWRlYmFyIHtcclxuICB3aWR0aDogMzEycHg7XHJcbiAgaGVpZ2h0OiAyNDJweDtcclxuICAtLXBvc3QtbGluZS1jb2xvcjogI2NjYztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgY29sb3I6ICM4NzhhOGM7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateSubredditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-subreddit',
                templateUrl: './create-subreddit.component.html',
                styleUrls: ['./create-subreddit.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _subreddit_service__WEBPACK_IMPORTED_MODULE_4__["SubredditService"] }]; }, null); })();


/***/ }),

/***/ "P+IX":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/auth.service */ "XQLn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        const isAuthenticated = this.authService.isLoggedIn();
        if (isAuthenticated) {
            return true;
        }
        else {
            this.router.navigateByUrl('/login');
        }
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "Pt3+":
/*!*************************************************!*\
  !*** ./src/app/shared/vote-button/vote-type.ts ***!
  \*************************************************/
/*! exports provided: VoteType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteType", function() { return VoteType; });
var VoteType;
(function (VoteType) {
    VoteType[VoteType["UPVOTE"] = 0] = "UPVOTE";
    VoteType[VoteType["DOWNVOTE"] = 1] = "DOWNVOTE";
})(VoteType || (VoteType = {}));


/***/ }),

/***/ "Qv8w":
/*!***************************************************!*\
  !*** ./src/app/auth/sign-up/sign-up.component.ts ***!
  \***************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/auth.service */ "XQLn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function SignUpComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please provide a valid email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please provide a valid username ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please provide a valid Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SignUpComponent {
    constructor(authService, router, toastr) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.signupRequestPayload = {
            username: '',
            email: '',
            password: ''
        };
    }
    ngOnInit() {
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    signup() {
        this.signupRequestPayload.username = this.signupForm.get('username').value;
        this.signupRequestPayload.email = this.signupForm.get('email').value;
        this.signupRequestPayload.password = this.signupForm.get('password').value;
        this.authService.signup(this.signupRequestPayload)
            .subscribe(() => {
            this.router.navigate(['/login'], { queryParams: { registered: true } });
        }, () => {
            this.toastr.error('Registration Failed! Please try again');
        });
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["app-sign-up"]], decls: 39, vars: 7, consts: [[1, "register-section"], [1, "row", "justify-content-center"], [1, "col-md-3"], [1, "col-md-8"], [1, "card", "text-center", 2, "margin-top", "10px", "width", "500px"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "form-group", "row"], [1, "col-md-2"], ["type", "text", "id", "email_address", "name", "email-address", "required", "", "autofocus", "", "placeholder", "EMAIL", 1, "form-control", 3, "formControlName"], [4, "ngIf"], ["type", "text", "required", "", "autofocus", "", "placeholder", "USERNAME", 1, "form-control", 3, "formControlName"], ["type", "password", "id", "password", "name", "password", "required", "", "placeholder", "PASSWORD", 1, "form-control", 3, "formControlName"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "btn-block", "rounded-pill", "sign-up", 2, "width", "300px", "height", "40px"], [2, "padding-left", "15px"], ["routerLink", "/login", 2, "color", "#0079d3", "cursor", "pointer"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignUpComponent_Template_form_ngSubmit_9_listener() { return ctx.signup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SignUpComponent_span_14_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SignUpComponent_span_19_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SignUpComponent_span_24_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Sign Up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Existing user? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "LOG IN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.signupForm.get("email").valid && ctx.signupForm.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", "username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.signupForm.get("username").valid && ctx.signupForm.get("username").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.signupForm.get("password").valid && ctx.signupForm.get("password").touched);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".register-section[_ngcontent-%COMP%] {\r\n  background: url('redditbackground.jpg') no-repeat center\r\n    center fixed;\r\n  min-height: 800px;\r\n  min-width: 1000px;\r\n  background-size: cover;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO2dCQUNjO0VBQ2QsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUlqQixzQkFBc0I7QUFDeEIiLCJmaWxlIjoic2lnbi11cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdGVyLXNlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9yZWRkaXRiYWNrZ3JvdW5kLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyXHJcbiAgICBjZW50ZXIgZml4ZWQ7XHJcbiAgbWluLWhlaWdodDogODAwcHg7XHJcbiAgbWluLXdpZHRoOiAxMDAwcHg7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign-up',
                templateUrl: './sign-up.component.html',
                styleUrls: ['./sign-up.component.css']
            }]
    }], function () { return [{ type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'redditclone-angular-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "XQLn":
/*!*********************************************!*\
  !*** ./src/app/auth/shared/auth.service.ts ***!
  \*********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webstorage */ "0uJq");






class AuthService {
    constructor(http, localStorageService) {
        this.http = http;
        this.localStorageService = localStorageService;
        this.loggedIn = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.username = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.refreshTokenPayload = {
            refreshToken: this.getRefreshToken(),
            username: this.getUserName()
        };
    }
    signup(signupRequestPayload) {
        return this.http.post('http://localhost:8080/api/auth/signup', signupRequestPayload);
    }
    login(loginRequestPaload) {
        return this.http.post('http://localhost:8080/api/auth/login', loginRequestPaload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            this.localStorageService.store('authenticationToken', data.authenticationToken);
            this.localStorageService.store('username', data.username);
            this.localStorageService.store('refreshToken', data.refreshToken);
            this.localStorageService.store('expiresAt', data.expiresAt);
            this.loggedIn.emit(true);
            this.username.emit(data.username);
            return true;
        }));
    }
    getJwtToken() {
        return this.localStorageService.retrieve('authenticationToken');
    }
    refreshToken() {
        return this.http.post('http://localhost:8080/api/auth/refresh/token', this.refreshTokenPayload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(response => {
            this.localStorageService.clear('authenticationToken');
            this.localStorageService.clear('expiresAt');
            this.localStorageService.store('authenticationToken', response.authenticationToken);
            this.localStorageService.store('expiresAt', response.expiresAt);
        }));
    }
    logout() {
        this.http.post('http://localhost:8080/api/auth/logout', this.refreshTokenPayload, { responseType: 'text' })
            .subscribe(data => {
            console.log(data);
        }, error => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        });
        this.localStorageService.clear('authenticationToken');
        this.localStorageService.clear('username');
        this.localStorageService.clear('refreshToken');
        this.localStorageService.clear('expiresAt');
    }
    getUserName() {
        return this.localStorageService.retrieve('username');
    }
    getRefreshToken() {
        return this.localStorageService.retrieve('refreshToken');
    }
    isLoggedIn() {
        return this.getJwtToken() != null;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] }]; }, { loggedIn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], username: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-webstorage */ "0uJq");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _token_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./token-interceptor */ "LT7N");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _shared_post_tile_post_tile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/post-tile/post-tile.component */ "cmaH");
/* harmony import */ var _shared_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/side-bar/side-bar.component */ "yObi");
/* harmony import */ var _shared_subreddit_side_bar_subreddit_side_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/subreddit-side-bar/subreddit-side-bar.component */ "CYAm");
/* harmony import */ var _shared_vote_button_vote_button_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/vote-button/vote-button.component */ "aUGB");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _subreddit_list_subreddits_list_subreddits_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./subreddit/list-subreddits/list-subreddits.component */ "KrRH");
/* harmony import */ var _subreddit_create_subreddit_create_subreddit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./subreddit/create-subreddit/create-subreddit.component */ "OxXG");
/* harmony import */ var _post_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./post/create-post/create-post.component */ "tj9r");
/* harmony import */ var _post_view_post_view_post_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./post/view-post/view-post.component */ "Gkp2");
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @tinymce/tinymce-angular */ "fB2i");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./auth/sign-up/sign-up.component */ "Qv8w");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./auth/login/login.component */ "bsvf");
/* harmony import */ var _auth_user_component_user_component_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./auth/user-component/user-component.component */ "2hQ/");





























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
            useClass: _token_interceptor__WEBPACK_IMPORTED_MODULE_10__["TokenInterceptor"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            ngx_webstorage__WEBPACK_IMPORTED_MODULE_7__["NgxWebstorageModule"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(),
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeModule"],
            _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_21__["EditorModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_23__["SignUpComponent"],
        _auth_login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
        _shared_post_tile_post_tile_component__WEBPACK_IMPORTED_MODULE_12__["PostTileComponent"],
        _shared_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_13__["SideBarComponent"],
        _shared_subreddit_side_bar_subreddit_side_bar_component__WEBPACK_IMPORTED_MODULE_14__["SubredditSideBarComponent"],
        _shared_vote_button_vote_button_component__WEBPACK_IMPORTED_MODULE_15__["VoteButtonComponent"],
        _subreddit_list_subreddits_list_subreddits_component__WEBPACK_IMPORTED_MODULE_17__["ListSubredditsComponent"],
        _subreddit_create_subreddit_create_subreddit_component__WEBPACK_IMPORTED_MODULE_18__["CreateSubredditComponent"],
        _post_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_19__["CreatePostComponent"],
        _post_view_post_view_post_component__WEBPACK_IMPORTED_MODULE_20__["ViewPostComponent"],
        _auth_user_component_user_component_component__WEBPACK_IMPORTED_MODULE_25__["UserComponentComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_7__["NgxWebstorageModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeModule"],
        _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_21__["EditorModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_23__["SignUpComponent"],
                    _auth_login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                    _shared_post_tile_post_tile_component__WEBPACK_IMPORTED_MODULE_12__["PostTileComponent"],
                    _shared_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_13__["SideBarComponent"],
                    _shared_subreddit_side_bar_subreddit_side_bar_component__WEBPACK_IMPORTED_MODULE_14__["SubredditSideBarComponent"],
                    _shared_vote_button_vote_button_component__WEBPACK_IMPORTED_MODULE_15__["VoteButtonComponent"],
                    _subreddit_list_subreddits_list_subreddits_component__WEBPACK_IMPORTED_MODULE_17__["ListSubredditsComponent"],
                    _subreddit_create_subreddit_create_subreddit_component__WEBPACK_IMPORTED_MODULE_18__["CreateSubredditComponent"],
                    _post_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_19__["CreatePostComponent"],
                    _post_view_post_view_post_component__WEBPACK_IMPORTED_MODULE_20__["ViewPostComponent"],
                    _auth_user_component_user_component_component__WEBPACK_IMPORTED_MODULE_25__["UserComponentComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    ngx_webstorage__WEBPACK_IMPORTED_MODULE_7__["NgxWebstorageModule"].forRoot(),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(),
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeModule"],
                    _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_21__["EditorModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__["NgbModule"]
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                        useClass: _token_interceptor__WEBPACK_IMPORTED_MODULE_10__["TokenInterceptor"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aUGB":
/*!*************************************************************!*\
  !*** ./src/app/shared/vote-button/vote-button.component.ts ***!
  \*************************************************************/
/*! exports provided: VoteButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteButtonComponent", function() { return VoteButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/observable/throwError */ "vLqr");
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vote_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vote-type */ "Pt3+");
/* harmony import */ var _vote_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../vote.service */ "H9UO");
/* harmony import */ var src_app_auth_shared_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/shared/auth.service */ "XQLn");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../post.service */ "EthR");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");










class VoteButtonComponent {
    constructor(voteService, authService, postService, toastr) {
        this.voteService = voteService;
        this.authService = authService;
        this.postService = postService;
        this.toastr = toastr;
        this.faArrowUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faArrowUp"];
        this.faArrowDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faArrowDown"];
        this.votePayload = {
            voteType: undefined,
            postId: undefined
        };
        this.authService.loggedIn.subscribe((data) => this.isLoggedIn = data);
    }
    ngOnInit() {
        this.updateVoteDetails();
    }
    upvotePost() {
        this.votePayload.voteType = _vote_type__WEBPACK_IMPORTED_MODULE_3__["VoteType"].UPVOTE;
        this.vote();
        this.downvoteColor = '';
    }
    downvotePost() {
        this.votePayload.voteType = _vote_type__WEBPACK_IMPORTED_MODULE_3__["VoteType"].DOWNVOTE;
        this.vote();
        this.upvoteColor = '';
    }
    vote() {
        this.votePayload.postId = this.post.id;
        this.voteService.vote(this.votePayload).subscribe(() => {
            this.updateVoteDetails();
        }, error => {
            this.toastr.error(error.error.message);
            Object(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        });
    }
    updateVoteDetails() {
        this.postService.getPost(this.post.id).subscribe(post => {
            this.post = post;
        });
    }
}
VoteButtonComponent.ɵfac = function VoteButtonComponent_Factory(t) { return new (t || VoteButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_vote_service__WEBPACK_IMPORTED_MODULE_4__["VoteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_shared_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_post_service__WEBPACK_IMPORTED_MODULE_6__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"])); };
VoteButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VoteButtonComponent, selectors: [["app-vote-button"]], inputs: { post: "post" }, decls: 8, vars: 7, consts: [[1, "col-md-1"], [1, "d-flex", "flex-column", "votebox"], [1, "p-2"], [1, "upvote", 3, "icon", "click"], [1, "p-2", "votecount"], [1, "downvote", 3, "icon", "click"]], template: function VoteButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoteButtonComponent_Template_fa_icon_click_3_listener() { return ctx.upvotePost(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoteButtonComponent_Template_fa_icon_click_7_listener() { return ctx.downvotePost(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.post.upVote ? "green" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faArrowUp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.voteCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.post.downVote ? "red" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faArrowDown);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FaIconComponent"]], styles: [".votebox[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  text-align: center;\r\n  flex-direction: column;\r\n  font-size: 1em;\r\n}\r\n\r\n.votesection[_ngcontent-%COMP%] {\r\n  margin: 0px;\r\n  background-color: #ffffff;\r\n}\r\n\r\n.upvote[_ngcontent-%COMP%], .downvote[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  border-radius: 2px solid;\r\n}\r\n\r\n.upvote[_ngcontent-%COMP%]:hover {\r\n  color: green;\r\n}\r\n\r\n.downvote[_ngcontent-%COMP%]:hover {\r\n  color: red;\r\n}\r\n\r\n.votecount[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvdGUtYnV0dG9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFDQTs7RUFFRSxlQUFlO0VBQ2Ysd0JBQXdCO0FBQzFCOztBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InZvdGUtYnV0dG9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudm90ZWJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmb250LXNpemU6IDFlbTtcclxufVxyXG5cclxuLnZvdGVzZWN0aW9uIHtcclxuICBtYXJnaW46IDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi51cHZvdGUsXHJcbi5kb3dudm90ZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweCBzb2xpZDtcclxufVxyXG4udXB2b3RlOmhvdmVyIHtcclxuICBjb2xvcjogZ3JlZW47XHJcbn1cclxuLmRvd252b3RlOmhvdmVyIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4udm90ZWNvdW50IHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoteButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vote-button',
                templateUrl: './vote-button.component.html',
                styleUrls: ['./vote-button.component.css']
            }]
    }], function () { return [{ type: _vote_service__WEBPACK_IMPORTED_MODULE_4__["VoteService"] }, { type: src_app_auth_shared_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _post_service__WEBPACK_IMPORTED_MODULE_6__["PostService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }]; }, { post: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "bsvf":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/auth.service */ "XQLn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function LoginComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please provide a valid username ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password cannot be empty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login Failed. Please check your credentials and try again.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { "background-color": "green" }; };
function LoginComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.registerSuccessMessage);
} }
class LoginComponent {
    constructor(authService, activatedRoute, router, toastr) {
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.toastr = toastr;
        this.loginRequestPayload = {
            username: '',
            password: ''
        };
    }
    ngOnInit() {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.activatedRoute.queryParams.subscribe(param => {
            if (param.registered !== undefined && param.registered === 'true') {
                this.toastr.success('Signup Successful');
                this.registerSuccessMessage = 'Please Check you inbox for activation email and activate you account before login';
            }
        });
    }
    login() {
        this.loginRequestPayload.username = this.loginForm.get('username').value;
        this.loginRequestPayload.password = this.loginForm.get('password').value;
        this.authService.login(this.loginRequestPayload).subscribe(data => {
            if (data) {
                this.isError = false;
                this.router.navigateByUrl('/');
                this.toastr.success('Login Successfull');
            }
            else {
                this.isError = true;
            }
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 36, vars: 7, consts: [[1, "login-section"], [1, "row", "justify-content-center"], [1, "col-md-3"], [1, "col-md-8"], [1, "card", "text-center", 2, "margin-top", "10px", "width", "500px"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "form-group", "row"], [1, "col-md-2"], ["type", "text", "id", "user_name", "name", "user_name", "required", "", "autofocus", "", "placeholder", "USERNAME", 1, "form-control", 3, "formControlName"], [4, "ngIf"], ["type", "password", "id", "password", "name", "password", "required", "", "placeholder", "PASSWORD", 1, "form-control", 3, "formControlName"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "btn-block", "rounded-pill", "login", 2, "width", "300px", "height", "40px"], ["routerLink", "/signup", 2, "color", "#0079d3", "cursor", "pointer"], ["class", "login-failed", 4, "ngIf"], ["class", "login-failed", 3, "ngStyle", 4, "ngIf"], [1, "login-failed"], [1, "login-failed-text"], [1, "login-failed", 3, "ngStyle"], [1, "register-success-text"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_9_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginComponent_span_14_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LoginComponent_span_19_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "New to Reddit? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "SIGN UP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, LoginComponent_div_33_Template, 3, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, LoginComponent_div_34_Template, 3, 3, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", "username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loginForm.get("username").valid && ctx.loginForm.get("username").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loginForm.get("password").valid && ctx.loginForm.get("password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerSuccessMessage.length > 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"]], styles: [".login-section[_ngcontent-%COMP%] {\r\n  background: url('redditbackground.jpg') no-repeat center\r\n    center fixed;\r\n  min-height: 800px;\r\n  min-width: 1000px;\r\n  background-size: cover;\r\n}\r\n\r\n.login-failed[_ngcontent-%COMP%], .register-success[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin: auto;\r\n  margin-top: 10px;\r\n  border: 2px solid black;\r\n  width: 65%;\r\n  background-color: red;\r\n}\r\n\r\n.login-failed-text[_ngcontent-%COMP%], .register-success-text[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-top: 5px;\r\n  font-weight: bold;\r\n  color: aliceblue;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtnQkFDYztFQUNkLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFJakIsc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLXNlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9yZWRkaXRiYWNrZ3JvdW5kLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyXHJcbiAgICBjZW50ZXIgZml4ZWQ7XHJcbiAgbWluLWhlaWdodDogODAwcHg7XHJcbiAgbWluLXdpZHRoOiAxMDAwcHg7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5sb2dpbi1mYWlsZWQsXHJcbi5yZWdpc3Rlci1zdWNjZXNzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgd2lkdGg6IDY1JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5sb2dpbi1mYWlsZWQtdGV4dCxcclxuLnJlZ2lzdGVyLXN1Y2Nlc3MtdGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogYWxpY2VibHVlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "cmaH":
/*!*********************************************************!*\
  !*** ./src/app/shared/post-tile/post-tile.component.ts ***!
  \*********************************************************/
/*! exports provided: PostTileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostTileComponent", function() { return PostTileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _vote_button_vote_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../vote-button/vote-button.component */ "aUGB");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");







function PostTileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-vote-button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " . Posted by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "fa-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostTileComponent_div_0_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const post_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.goToPost(post_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Read Post ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", post_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r1.subredditName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/user/", post_r1.userName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r1.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" . ", post_r1.duration, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", post_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r1.postName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", post_r1.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faComments);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Comments(", post_r1.commentCount, ") ");
} }
class PostTileComponent {
    constructor(router) {
        this.router = router;
        this.faComments = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faComments"];
    }
    ngOnInit() {
    }
    goToPost(id) {
        this.router.navigateByUrl('/view-post/' + id);
    }
}
PostTileComponent.ɵfac = function PostTileComponent_Factory(t) { return new (t || PostTileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
PostTileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostTileComponent, selectors: [["app-post-tile"]], inputs: { posts: "posts" }, decls: 1, vars: 1, consts: [["class", "row post", 4, "ngFor", "ngForOf"], [1, "row", "post"], [3, "post"], [1, "col-md-11"], [1, "subreddit-info"], [1, "subreddit-text"], ["routerLink", "", 1, "posturl"], [1, "username", 3, "routerLink"], [1, "post-title"], [1, "postname", 3, "href"], [1, "post-text", 3, "innerHtml"], ["role", "button", 1, "btnCommments"], [3, "icon"], [1, "login", 3, "click"]], template: function PostTileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PostTileComponent_div_0_Template, 26, 10, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _vote_button_vote_button_component__WEBPACK_IMPORTED_MODULE_4__["VoteButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"]], styles: [".post[_ngcontent-%COMP%] {\r\n  --post-line-color: #ccc;\r\n  border: 1px solid #ccc;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n  overflow: hidden;\r\n  background-color: rgba(255, 255, 255, 0.8);\r\n  color: #878a8c;\r\n  position: relative;\r\n  border-radius: 4px;\r\n  padding: 5px;\r\n}\r\n\r\n.btnCommments[_ngcontent-%COMP%] {\r\n  border-radius: 2px solid;\r\n  color: #878a8c;\r\n  opacity: 1;\r\n}\r\n\r\n.btnCommments[_ngcontent-%COMP%]:hover {\r\n  opacity: 0.65;\r\n  cursor: pointer;\r\n}\r\n\r\n.post-title[_ngcontent-%COMP%] {\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n  opacity: 1;\r\n}\r\n\r\n.posturl[_ngcontent-%COMP%], .postname[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\r\n\r\n.subreddit-text[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\r\n\r\n.post-text[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtdGlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiwwQ0FBMEM7RUFDMUMsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGNBQWM7RUFDZCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBOztFQUVFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJwb3N0LXRpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0IHtcclxuICAtLXBvc3QtbGluZS1jb2xvcjogI2NjYztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICBjb2xvcjogIzg3OGE4YztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmJ0bkNvbW1tZW50cyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4IHNvbGlkO1xyXG4gIGNvbG9yOiAjODc4YThjO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5idG5Db21tbWVudHM6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuNjU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucG9zdC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5wb3N0dXJsLFxyXG4ucG9zdG5hbWUge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnN1YnJlZGRpdC10ZXh0IHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnBvc3QtdGV4dCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostTileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-tile',
                templateUrl: './post-tile.component.html',
                styleUrls: ['./post-tile.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { posts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _auth_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/shared/auth.service */ "XQLn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function HeaderComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_18_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.goToUserProfile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_18_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.username, " ");
} }
function HeaderComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUser"];
        this.faMoon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMoon"];
        this.faSun = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSun"];
        this.faCog = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCog"];
    }
    ngOnInit() {
        this.authService.loggedIn.subscribe((data) => this.isLoggedIn = data);
        this.authService.username.subscribe((data) => this.username = data);
        this.isLoggedIn = this.authService.isLoggedIn();
        this.username = this.authService.getUserName();
    }
    goToUserProfile() {
        this.router.navigateByUrl('/user-profile/' + this.username);
    }
    logout() {
        this.authService.logout();
        this.isLoggedIn = false;
        this.router.navigateByUrl('');
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 20, vars: 2, consts: [[1, "navbar", "fixed-top", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "flex-grow-1"], ["aria-label", "Home", "routerLink", "/", 1, "logo"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", 1, "reddit-icon-svg"], ["fill", "#FF4500", "cx", "10", "cy", "10", "r", "10"], ["fill", "#FFF", "d", "M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"], ["viewBox", "0 0 57 18", "xmlns", "http://www.w3.org/2000/svg", 1, "reddit-icon-svg"], ["fill", "#1c1c1c"], ["d", "M54.63,16.52V7.68h1a1,1,0,0,0,1.09-1V6.65a1,1,0,0,0-.93-1.12H54.63V3.88a1.23,1.23,0,0,0-1.12-1.23,1.2,1.2,0,0,0-1.27,1.11V5.55h-1a1,1,0,0,0-1.09,1v.07a1,1,0,0,0,.93,1.12h1.13v8.81a1.19,1.19,0,0,0,1.19,1.19h0a1.19,1.19,0,0,0,1.25-1.12A.17.17,0,0,0,54.63,16.52Z"], ["fill", "#FF4500", "cx", "47.26", "cy", "3.44", "r", "2.12"], ["d", "M48.44,7.81a1.19,1.19,0,1,0-2.38,0h0v8.71a1.19,1.19,0,0,0,2.38,0Z"], ["d", "M30.84,1.19A1.19,1.19,0,0,0,29.65,0h0a1.19,1.19,0,0,0-1.19,1.19V6.51a4.11,4.11,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S22.28,18,25.42,18a4.26,4.26,0,0,0,3.1-1.23,1.17,1.17,0,0,0,1.47.8,1.2,1.2,0,0,0,.85-1.05ZM25.41,15.64c-1.83,0-3.32-1.77-3.32-4s1.48-4,3.32-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"], ["d", "M43.28,1.19A1.19,1.19,0,0,0,42.09,0h0a1.18,1.18,0,0,0-1.18,1.19h0V6.51a4.15,4.15,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S34.72,18,37.86,18A4.26,4.26,0,0,0,41,16.77a1.17,1.17,0,0,0,1.47.8,1.19,1.19,0,0,0,.85-1.05ZM37.85,15.64c-1.83,0-3.31-1.77-3.31-4s1.47-4,3.31-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"], ["d", "M17.27,12.44a1.49,1.49,0,0,0,1.59-1.38v-.15a4.81,4.81,0,0,0-.1-.85A5.83,5.83,0,0,0,13.25,5.3c-3.1,0-5.69,2.85-5.69,6.35S10.11,18,13.25,18a5.66,5.66,0,0,0,4.39-1.84,1.23,1.23,0,0,0-.08-1.74l-.11-.09a1.29,1.29,0,0,0-1.58.17,3.91,3.91,0,0,1-2.62,1.12A3.54,3.54,0,0,1,10,12.44h7.27Zm-4-4.76a3.41,3.41,0,0,1,3.09,2.64H10.14A3.41,3.41,0,0,1,13.24,7.68Z"], ["d", "M7.68,6.53a1.19,1.19,0,0,0-1-1.18A4.56,4.56,0,0,0,2.39,6.91V6.75A1.2,1.2,0,0,0,0,6.75v9.77a1.23,1.23,0,0,0,1.12,1.24,1.19,1.19,0,0,0,1.26-1.1.66.66,0,0,0,0-.14v-5A3.62,3.62,0,0,1,5.81,7.7a4.87,4.87,0,0,1,.54,0h.24A1.18,1.18,0,0,0,7.68,6.53Z"], [1, "flex-grow-1", "float-right"], ["ngbDropdown", "", "class", "float-right", 4, "ngIf"], [4, "ngIf"], ["ngbDropdown", "", 1, "float-right"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], ["ngbDropdownItem", "", 3, "click"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "userdetails"], ["src", "https://www.redditstatic.com/avatars/avatar_default_08_D4E815.png", 1, "account-icon"], ["routerLink", "/signup", 1, "float-right", "rounded-pill", "sign-up", "mr-2"], ["routerLink", "/login", 1, "float-right", "rounded-pill", "login", "mr-2"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "circle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "g", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "circle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HeaderComponent_div_18_Template, 9, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HeaderComponent_div_19_Template, 5, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownToggle"]], styles: ["header[_ngcontent-%COMP%] {\r\n  border-radius: 1px solid;\r\n}\r\n.reddit-icon-svg[_ngcontent-%COMP%] {\r\n  height: 50px;\r\n  padding: 8px 8px 8px 0;\r\n  width: 50px;\r\n}\r\n.reddit-text[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n  height: 50px;\r\n  width: 50px;\r\n}\r\n.logo[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n}\r\n.login[_ngcontent-%COMP%], .sign-up[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  border-color: #0079d3;\r\n  color: #0079d3;\r\n  fill: #0079d3;\r\n  border: 1px solid;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n  text-align: center;\r\n  letter-spacing: 1px;\r\n  text-decoration: none;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n  letter-spacing: 0.5px;\r\n  line-height: 24px;\r\n  text-transform: uppercase;\r\n  padding: 3px 16px;\r\n  opacity: 1;\r\n}\r\n.sign-up[_ngcontent-%COMP%] {\r\n  background-color: #0079d3;\r\n  border-color: #0079d3;\r\n  color: aliceblue;\r\n}\r\n.sign-up[_ngcontent-%COMP%]:hover {\r\n  opacity: 0.6;\r\n}\r\n.userdetails[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  border-color: #0079d3;\r\n  color: #0079d3;\r\n  fill: #0079d3;\r\n  border: 1px solid;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n  text-align: center;\r\n  letter-spacing: 1px;\r\n  text-decoration: none;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n  letter-spacing: 0.5px;\r\n  line-height: 24px;\r\n  text-transform: uppercase;\r\n  padding: 3px 16px;\r\n  opacity: 1;\r\n  border: 0px;\r\n}\r\n.userdetails[_ngcontent-%COMP%]:hover {\r\n  border: 1px solid;\r\n}\r\n.dropdown-item[_ngcontent-%COMP%] {\r\n  background-color: #f8f9fa;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  line-height: 18px;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n}\r\n.dropdown-item[_ngcontent-%COMP%]:hover {\r\n  background-color: #0079d3;\r\n}\r\n.dropdown-menu[_ngcontent-%COMP%] {\r\n  background-color: #f8f9fa;\r\n}\r\n.account-icon[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n  float: left;\r\n  margin-right: 5px;\r\n  max-height: 24px;\r\n  max-width: 24px;\r\n}\r\n.checkbox[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  position: absolute;\r\n}\r\n.label[_ngcontent-%COMP%] {\r\n  background-color: #dfe6e9;\r\n  border-radius: 50px;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 2px;\r\n  position: absolute;\r\n  height: 22px;\r\n  width: 40px;\r\n  transform: scale(1);\r\n}\r\n.label[_ngcontent-%COMP%]   .ball[_ngcontent-%COMP%] {\r\n  background-color: #fff;\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  top: 2px;\r\n  left: 2px;\r\n  height: 18px;\r\n  width: 18px;\r\n  transform: translateX(0px);\r\n  transition: transform 0.2s linear;\r\n}\r\n.checkbox[_ngcontent-%COMP%]:checked    + .label[_ngcontent-%COMP%]   .ball[_ngcontent-%COMP%] {\r\n  transform: translateX(20px);\r\n}\r\n.fa-sun[_ngcontent-%COMP%] {\r\n  color: #f39c12;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBOztFQUVFLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsV0FBVztBQUNiO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsWUFBWTtFQUNaLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIsaUNBQWlDO0FBQ25DO0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDFweCBzb2xpZDtcclxufVxyXG4ucmVkZGl0LWljb24tc3ZnIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgcGFkZGluZzogOHB4IDhweCA4cHggMDtcclxuICB3aWR0aDogNTBweDtcclxufVxyXG5cclxuLnJlZGRpdC10ZXh0IHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogNTBweDtcclxufVxyXG4ubG9nbyB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4ubG9naW4sXHJcbi5zaWduLXVwIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItY29sb3I6ICMwMDc5ZDM7XHJcbiAgY29sb3I6ICMwMDc5ZDM7XHJcbiAgZmlsbDogIzAwNzlkMztcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgcGFkZGluZzogM3B4IDE2cHg7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLnNpZ24tdXAge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDc5ZDM7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDA3OWQzO1xyXG4gIGNvbG9yOiBhbGljZWJsdWU7XHJcbn1cclxuXHJcbi5zaWduLXVwOmhvdmVyIHtcclxuICBvcGFjaXR5OiAwLjY7XHJcbn1cclxuXHJcbi51c2VyZGV0YWlscyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDA3OWQzO1xyXG4gIGNvbG9yOiAjMDA3OWQzO1xyXG4gIGZpbGw6ICMwMDc5ZDM7XHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHBhZGRpbmc6IDNweCAxNnB4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbn1cclxuXHJcbi51c2VyZGV0YWlsczpob3ZlciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1pdGVtIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uZHJvcGRvd24taXRlbTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzlkMztcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbn1cclxuXHJcbi5hY2NvdW50LWljb24ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBtYXgtaGVpZ2h0OiAyNHB4O1xyXG4gIG1heC13aWR0aDogMjRweDtcclxufVxyXG5cclxuLmNoZWNrYm94IHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmxhYmVsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlNmU5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDIycHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxufVxyXG5cclxuLmxhYmVsIC5iYWxsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAycHg7XHJcbiAgbGVmdDogMnB4O1xyXG4gIGhlaWdodDogMThweDtcclxuICB3aWR0aDogMThweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBsaW5lYXI7XHJcbn1cclxuXHJcbi5jaGVja2JveDpjaGVja2VkICsgLmxhYmVsIC5iYWxsIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XHJcbn1cclxuXHJcbi5mYS1zdW4ge1xyXG4gIGNvbG9yOiAjZjM5YzEyO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _auth_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "mqg1":
/*!********************************************!*\
  !*** ./src/app/comment/comment.service.ts ***!
  \********************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");



class CommentService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAllCommentsForPost(postId) {
        return this.httpClient.get('http://localhost:8080/api/comments/by-post/' + postId);
    }
    postComment(commentPayload) {
        return this.httpClient.post('http://localhost:8080/api/comments/', commentPayload);
    }
    getAllCommentsByUser(name) {
        return this.httpClient.get('http://localhost:8080/api/comments/by-user/' + name);
    }
}
CommentService.ɵfac = function CommentService_Factory(t) { return new (t || CommentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CommentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommentService, factory: CommentService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "tj9r":
/*!***********************************************************!*\
  !*** ./src/app/post/create-post/create-post.component.ts ***!
  \***********************************************************/
/*! exports provided: CreatePostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePostComponent", function() { return CreatePostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/observable/throwError */ "vLqr");
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/post.service */ "EthR");
/* harmony import */ var src_app_subreddit_subreddit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/subreddit/subreddit.service */ "+2AF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tinymce/tinymce-angular */ "fB2i");










function CreatePostComponent_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subreddit_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subreddit_r1.name);
} }
const _c0 = "advlist autolink lists link image charmap print preview anchor";
const _c1 = "insertdatetime media table paste code help wordcount";
const _c2 = function () { return [_c0, "searchreplace visualblocks code fullscreen", _c1]; };
const _c3 = "undo redo | formatselect | bold italic backcolor | \n                        alignleft aligncenter alignright alignjustify | \n                        bullist numlist outdent indent | removeformat | help";
const _c4 = function (a2) { return { height: 500, menubar: false, plugins: a2, toolbar: _c3 }; };
class CreatePostComponent {
    constructor(router, postService, subredditService) {
        this.router = router;
        this.postService = postService;
        this.subredditService = subredditService;
        this.postPayload = {
            postName: '',
            url: '',
            subredditName: '',
            description: ''
        };
    }
    ngOnInit() {
        this.createPostForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            postName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            subredditName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            url: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.subredditService.getAllSubreddits().subscribe((data) => {
            this.subreddits = data;
        }, error => {
            Object(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        });
    }
    createPost() {
        this.postPayload.postName = this.createPostForm.get('postName').value;
        this.postPayload.subredditName = this.createPostForm.get('subredditName').value;
        this.postPayload.url = this.createPostForm.get('url').value;
        this.postPayload.description = this.createPostForm.get('description').value;
        this.postService.createPost(this.postPayload).subscribe((data) => {
            this.router.navigateByUrl('/');
        }, error => {
            Object(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        });
    }
    discardPost() {
        this.router.navigateByUrl('/');
    }
}
CreatePostComponent.ɵfac = function CreatePostComponent_Factory(t) { return new (t || CreatePostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_subreddit_subreddit_service__WEBPACK_IMPORTED_MODULE_5__["SubredditService"])); };
CreatePostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreatePostComponent, selectors: [["app-create-post"]], decls: 24, vars: 10, consts: [[1, "container-fluid"], [1, "row"], [1, "col-1"], [1, "create-post-container", "col-10"], [1, "post-form", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "create-post-heading"], ["type", "text", "placeholder", "Title", 1, "form-control", 2, "margin-top", "5px", 3, "formControlName"], ["type", "text", "placeholder", "URL", 1, "form-control", 2, "margin-top", "5px", 3, "formControlName"], [1, "form-control", 2, "margin-top", "10px", 3, "formControlName"], ["value", "", "selected", "", "disabled", ""], [4, "ngFor", "ngForOf"], [3, "formControlName", "init"], [1, "float-right", 2, "margin-top", "5px"], [1, "btnDiscard", 3, "click"], [1, "btnCreatePost"]], template: function CreatePostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreatePostComponent_Template_form_ngSubmit_5_listener() { return ctx.createPost(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Create Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Select Subreddit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CreatePostComponent_option_15_Template, 2, 1, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "editor", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatePostComponent_Template_button_click_19_listener() { return ctx.discardPost(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Discard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.createPostForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", "postName");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", "url");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", "subredditName");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subreddits);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", "description")("init", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2)));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_7__["EditorComponent"]], styles: [".btnCreatePost[_ngcontent-%COMP%], .btnCreateSubreddit[_ngcontent-%COMP%] {\r\n  margin-top: 5px;\r\n}\r\n\r\n.post-form[_ngcontent-%COMP%] {\r\n  margin: 2px;\r\n}\r\n\r\n.comment-notification[_ngcontent-%COMP%] {\r\n  margin-top: 5px;\r\n}\r\n\r\n.create-post-container[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  --post-line-color: #ccc;\r\n  border: 1px solid #ccc;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n  overflow: hidden;\r\n  background-color: rgba(255, 255, 255, 0.8);\r\n  color: #878a8c;\r\n  position: relative;\r\n  border-radius: 4px;\r\n  padding: 5px;\r\n}\r\n\r\n.btnDiscard[_ngcontent-%COMP%] {\r\n  fill: #0079d3;\r\n  border: 1px solid;\r\n  border-radius: 4px;\r\n  text-align: center;\r\n  letter-spacing: 1px;\r\n  text-decoration: none;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n  letter-spacing: 0.5px;\r\n  line-height: 24px;\r\n  text-transform: uppercase;\r\n  padding: 3px 16px;\r\n  opacity: 1;\r\n  width: 288px;\r\n  height: 34px;\r\n  margin-top: 5px;\r\n  color: #0079d3;\r\n  background-color: transparent;\r\n}\r\n\r\n.create-post-heading[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n  line-height: 22px;\r\n  color: #1c1c1c;\r\n  flex: 1;\r\n}\r\n\r\n.btnCreatePost[_ngcontent-%COMP%] {\r\n  background-color: #0079d3;\r\n  border-color: #0079d3;\r\n  color: aliceblue;\r\n  fill: #0079d3;\r\n  border: 1px solid;\r\n  border-radius: 4px;\r\n  text-align: center;\r\n  letter-spacing: 1px;\r\n  text-decoration: none;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n  letter-spacing: 0.5px;\r\n  line-height: 24px;\r\n  text-transform: uppercase;\r\n  padding: 3px 16px;\r\n  opacity: 1;\r\n  width: 288px;\r\n  height: 34px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiwwQ0FBMEM7RUFDMUMsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGNBQWM7RUFDZCw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixjQUFjO0VBRWQsT0FBTztBQUNUOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFlBQVk7RUFDWixZQUFZO0FBQ2QiLCJmaWxlIjoiY3JlYXRlLXBvc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG5DcmVhdGVQb3N0LFxyXG4uYnRuQ3JlYXRlU3VicmVkZGl0IHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5wb3N0LWZvcm0ge1xyXG4gIG1hcmdpbjogMnB4O1xyXG59XHJcblxyXG4uY29tbWVudC1ub3RpZmljYXRpb24ge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmNyZWF0ZS1wb3N0LWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICAtLXBvc3QtbGluZS1jb2xvcjogI2NjYztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICBjb2xvcjogIzg3OGE4YztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmJ0bkRpc2NhcmQge1xyXG4gIGZpbGw6ICMwMDc5ZDM7XHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBwYWRkaW5nOiAzcHggMTZweDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHdpZHRoOiAyODhweDtcclxuICBoZWlnaHQ6IDM0cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGNvbG9yOiAjMDA3OWQzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uY3JlYXRlLXBvc3QtaGVhZGluZyB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgY29sb3I6ICMxYzFjMWM7XHJcbiAgLW1zLWZsZXg6IDE7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLmJ0bkNyZWF0ZVBvc3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDc5ZDM7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDA3OWQzO1xyXG4gIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgZmlsbDogIzAwNzlkMztcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHBhZGRpbmc6IDNweCAxNnB4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgd2lkdGg6IDI4OHB4O1xyXG4gIGhlaWdodDogMzRweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreatePostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-post',
                templateUrl: './create-post.component.html',
                styleUrls: ['./create-post.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_shared_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"] }, { type: src_app_subreddit_subreddit_service__WEBPACK_IMPORTED_MODULE_5__["SubredditService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.guard */ "P+IX");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/login/login.component */ "bsvf");
/* harmony import */ var _auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/sign-up/sign-up.component */ "Qv8w");
/* harmony import */ var _auth_user_component_user_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/user-component/user-component.component */ "2hQ/");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _post_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./post/create-post/create-post.component */ "tj9r");
/* harmony import */ var _post_view_post_view_post_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./post/view-post/view-post.component */ "Gkp2");
/* harmony import */ var _subreddit_create_subreddit_create_subreddit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./subreddit/create-subreddit/create-subreddit.component */ "OxXG");
/* harmony import */ var _subreddit_list_subreddits_list_subreddits_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./subreddit/list-subreddits/list-subreddits.component */ "KrRH");













const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'view-post/:id', component: _post_view_post_view_post_component__WEBPACK_IMPORTED_MODULE_8__["ViewPostComponent"] },
    { path: 'user-profile/:name', component: _auth_user_component_user_component_component__WEBPACK_IMPORTED_MODULE_5__["UserComponentComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'list-subreddits', component: _subreddit_list_subreddits_list_subreddits_component__WEBPACK_IMPORTED_MODULE_10__["ListSubredditsComponent"] },
    { path: 'create-post', component: _post_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_7__["CreatePostComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'create-subreddit', component: _subreddit_create_subreddit_create_subreddit_component__WEBPACK_IMPORTED_MODULE_9__["CreateSubredditComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'signup', component: _auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"] },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "yObi":
/*!*******************************************************!*\
  !*** ./src/app/shared/side-bar/side-bar.component.ts ***!
  \*******************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class SideBarComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goToCreatePost() {
        this.router.navigateByUrl('/create-post');
    }
    goToCreateSubreddit() {
        this.router.navigateByUrl('/create-subreddit');
    }
}
SideBarComponent.ɵfac = function SideBarComponent_Factory(t) { return new (t || SideBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
SideBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideBarComponent, selectors: [["app-side-bar"]], decls: 10, vars: 0, consts: [[1, "sidebar"], ["src", "https://www.redditstatic.com/desktop2x/img/id-cards/home-banner@2x.png"], [2, "text-align", "center", "font-size", "1em"], [2, "text-align", "center"], [1, "btnCreatePost", 3, "click"], [1, "btnCreateSubreddit", 3, "click"]], template: function SideBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome to Spring Reddit Clone home page. Come here to check in with your favorite subreddits.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideBarComponent_Template_button_click_5_listener() { return ctx.goToCreatePost(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Create Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideBarComponent_Template_button_click_8_listener() { return ctx.goToCreateSubreddit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Create Subreddit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".sidebar[_ngcontent-%COMP%] {\r\n  width: 312px;\r\n  height: 242px;\r\n  --post-line-color: #ccc;\r\n  border: 1px solid #ccc;\r\n  margin-bottom: 10px;\r\n  overflow: hidden;\r\n  background-color: rgba(255, 255, 255, 0.8);\r\n  color: #878a8c;\r\n  position: relative;\r\n  border-radius: 4px;\r\n  padding: 5px;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.btnCreatePost[_ngcontent-%COMP%], .btnCreateSubreddit[_ngcontent-%COMP%] {\r\n  background-color: #0079d3;\r\n  border-color: #0079d3;\r\n  color: aliceblue;\r\n  fill: #0079d3;\r\n  border: 1px solid;\r\n  border-radius: 4px;\r\n  text-align: center;\r\n  letter-spacing: 1px;\r\n  text-decoration: none;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n  letter-spacing: 0.5px;\r\n  line-height: 24px;\r\n  text-transform: uppercase;\r\n  padding: 3px 16px;\r\n  opacity: 1;\r\n  width: 288px;\r\n  height: 34px;\r\n}\r\n\r\n.btnCreateSubreddit[_ngcontent-%COMP%] {\r\n  margin-top: 5px;\r\n  color: #0079d3;\r\n  background-color: transparent;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n  line-height: 20px;\r\n  color: #1c1c1c;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiwwQ0FBMEM7RUFDMUMsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEIiLCJmaWxlIjoic2lkZS1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyIHtcclxuICB3aWR0aDogMzEycHg7XHJcbiAgaGVpZ2h0OiAyNDJweDtcclxuICAtLXBvc3QtbGluZS1jb2xvcjogI2NjYztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgY29sb3I6ICM4NzhhOGM7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uYnRuQ3JlYXRlUG9zdCxcclxuLmJ0bkNyZWF0ZVN1YnJlZGRpdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzlkMztcclxuICBib3JkZXItY29sb3I6ICMwMDc5ZDM7XHJcbiAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICBmaWxsOiAjMDA3OWQzO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgcGFkZGluZzogM3B4IDE2cHg7XHJcbiAgb3BhY2l0eTogMTtcclxuICB3aWR0aDogMjg4cHg7XHJcbiAgaGVpZ2h0OiAzNHB4O1xyXG59XHJcblxyXG4uYnRuQ3JlYXRlU3VicmVkZGl0IHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgY29sb3I6ICMwMDc5ZDM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5zaWRlYmFyID4gdWwgPiBsaSB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6ICMxYzFjMWM7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-side-bar',
                templateUrl: './side-bar.component.html',
                styleUrls: ['./side-bar.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map