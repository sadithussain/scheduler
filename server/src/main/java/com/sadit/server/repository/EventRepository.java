package com.sadit.server.repository;

import com.sadit.server.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
    // You can define custom queries here later if needed
    // Example: List<Event> findByTitle(String title);
}