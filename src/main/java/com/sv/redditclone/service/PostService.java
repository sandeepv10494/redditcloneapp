package com.sv.redditclone.service;

import com.sv.redditclone.dto.PostRequest;
import com.sv.redditclone.dto.PostResponse;
import com.sv.redditclone.exceptions.PostNotFoundException;
import com.sv.redditclone.exceptions.SpringRedditException;
import com.sv.redditclone.exceptions.SubredditNotFoundException;
import com.sv.redditclone.mapper.PostMapper;
import com.sv.redditclone.models.Post;
import com.sv.redditclone.models.Subreddit;
import com.sv.redditclone.models.User;
import com.sv.redditclone.repository.PostRepository;
import com.sv.redditclone.repository.SubredditRepository;
import com.sv.redditclone.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;


@Service
@AllArgsConstructor
@Slf4j
@Transactional
public class PostService {

    private final PostRepository postRepository;
    private final SubredditRepository subredditRepository;
    private final UserRepository userRepository;
    private final AuthService authService;
    private final PostMapper postMapper;

    public void save(PostRequest postRequest){
        Subreddit subreddit = subredditRepository.findByName(postRequest.getSubredditName())
                .orElseThrow(()->new SubredditNotFoundException(postRequest.getSubredditName()));
        postRepository.save(postMapper.map(postRequest, subreddit, authService.getCurrentUser()));
    }

    @Transactional(readOnly = true)
    public PostResponse getPost(Long id){
        Post post = postRepository.findById(id).orElseThrow(()->new PostNotFoundException(id.toString()));
        return postMapper.mapToDto(post);
    }

    @Transactional(readOnly = true)
    public List<PostResponse> getAllPosts(){
        return postRepository.findAll()
                .stream()
                .map(postMapper::mapToDto)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<PostResponse> getPostsBySubreddit(Long id){
        Subreddit subreddit = subredditRepository.findById(id).orElseThrow(()->new SubredditNotFoundException(id.toString()));
        List<Post> posts = postRepository.findAllBySubreddit(subreddit);
        return posts.stream().map(postMapper::mapToDto).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<PostResponse> getPostsByUsername(String userName){
        User user = userRepository.findByUsername(userName).orElseThrow(()->new SpringRedditException("User not found with username: "+userName));
        List<Post> posts = postRepository.findAllByUser(user);
        return posts.stream().map(postMapper::mapToDto).collect(Collectors.toList());
    }
}
