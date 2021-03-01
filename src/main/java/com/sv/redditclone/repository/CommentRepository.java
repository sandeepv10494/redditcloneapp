package com.sv.redditclone.repository;

import com.sv.redditclone.models.Comment;
import com.sv.redditclone.models.Post;
import com.sv.redditclone.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findByPost(Post post);

    List<Comment> findAllByUser(User user);
}
