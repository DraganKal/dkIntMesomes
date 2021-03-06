package io.dkintelligence.mesomes.repositories;

import io.dkintelligence.mesomes.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {

    Iterable<Message> findAllByRecipientUsername(String username);
    Iterable<Message> findAllBySenderUsername(String username);

}
