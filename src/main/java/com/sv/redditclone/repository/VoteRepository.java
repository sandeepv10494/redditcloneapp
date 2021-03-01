package com.sv.redditclone.repository;

import com.sv.redditclone.models.Post;
import com.sv.redditclone.models.User;
import com.sv.redditclone.models.Vote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface VoteRepository extends JpaRepository<Vote, Long> {
    Optional<Vote> findTopByPostAndUserOrderByVoteIdDesc(Post post, User currentUser);
}
