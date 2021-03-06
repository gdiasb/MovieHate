package com.gdias.MovieHate.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gdias.MovieHate.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByEmail(String email);
}
