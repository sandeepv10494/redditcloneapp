package com.sv.redditclone.service;

import com.sv.redditclone.dto.VoteDto;
import com.sv.redditclone.exceptions.PostNotFoundException;
import com.sv.redditclone.exceptions.SpringRedditException;
import com.sv.redditclone.models.Post;
import com.sv.redditclone.models.Vote;
import com.sv.redditclone.repository.PostRepository;
import com.sv.redditclone.repository.VoteRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

import static com.sv.redditclone.models.VoteType.UPVOTE;

@Service
@AllArgsConstructor
public class VoteService {

    private final VoteRepository voteRepository;
    private final PostRepository postRepository;
    private final AuthService authService;

    @Transactional
    public void vote(VoteDto voteDto){
        Post post = postRepository.findById(voteDto.getPostId()).orElseThrow(()->new PostNotFoundException(voteDto.getPostId().toString()));
        Optional<Vote> voteByPostAndUser = voteRepository.findTopByPostAndUserOrderByVoteIdDesc(post, authService.getCurrentUser());
        if (voteByPostAndUser.isPresent() && voteByPostAndUser.get().getVoteType().equals(voteDto.getVoteType())){
            throw new SpringRedditException("You have already "+voteDto.getVoteType()+"d for this post");
        }
        if(UPVOTE.equals(voteDto.getVoteType())){
            post.setVoteCount(post.getVoteCount()+1);
        }
        else {
            post.setVoteCount(post.getVoteCount()-1);
        }
        voteRepository.save(mapToVote(voteDto, post));
        postRepository.save(post);
    }

    private Vote mapToVote(VoteDto voteDto, Post post) {
        return Vote.builder()
                .voteType(voteDto.getVoteType())
                .post(post)
                .user(authService.getCurrentUser())
                .build();
    }
}
