package com.sv.redditclone.controllers;

import com.sv.redditclone.dto.PostRequest;
import com.sv.redditclone.dto.PostResponse;
import com.sv.redditclone.service.PostService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
@AllArgsConstructor
public class PostController {

    private final PostService postService;

    @PostMapping
    public ResponseEntity<Void> createPost(@RequestBody PostRequest postRequest){
        postService.save(postRequest);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<PostResponse>> getAllPosts(){
        return ResponseEntity.status(HttpStatus.OK).body(postService.getAllPosts());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PostResponse> getPost(@PathVariable Long id){
        return ResponseEntity.status(HttpStatus.OK).body(postService.getPost(id));
    }

    @GetMapping("by-subreddit/{id}")
    public ResponseEntity<List<PostResponse>> getPostBySubreddit(@PathVariable Long subredditId){
        return ResponseEntity.status(HttpStatus.OK).body(postService.getPostsBySubreddit(subredditId));
    }

    @GetMapping("by-username/{username}")
    public ResponseEntity<List<PostResponse>> getPostByUsername(@PathVariable String userName){
        return ResponseEntity.status(HttpStatus.OK).body(postService.getPostsByUsername(userName));
    }
}
