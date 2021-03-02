package com.sv.redditclone.service;

import com.sv.redditclone.exceptions.SpringRedditException;
import com.sv.redditclone.models.RefreshToken;
import com.sv.redditclone.repository.RefreshTokenRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.Instant;
import java.util.UUID;

@Service
@AllArgsConstructor
@Transactional
public class RefreshTokenService {
    private RefreshTokenRepository refreshTokenRepository;

    public RefreshToken generateRefreshToken(){
        RefreshToken refreshToken = new RefreshToken();
        refreshToken.setToken(UUID.randomUUID().toString());
        refreshToken.setCreatedDate(Instant.now());
        return refreshTokenRepository.save(refreshToken);
    }

    void validateRefreshToken(String token){
        refreshTokenRepository.findByToken(token).orElseThrow(
                ()-> new SpringRedditException("Invalid refresh token")
        );
    }

    public void deleteRefrehToken(String token){
        refreshTokenRepository.deleteByToken(token);
    }
}
