package io.dkintelligence.mesomes.services;

import io.dkintelligence.mesomes.exceptions.UserNotFoundException;
import io.dkintelligence.mesomes.model.Message;
import io.dkintelligence.mesomes.model.User;
import io.dkintelligence.mesomes.repositories.MessageRepository;
import io.dkintelligence.mesomes.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MessageService {

    @Autowired
    private MessageRepository messageRepository;
    @Autowired
    private UserRepository userRepository;

    public Message saveMessage(Message message, String username){

        try {
            User sender = userRepository.findByUsername(username);
            User recipient = userRepository.findByUsername(message.getRecipientUsername());
            if(sender != null && recipient != null ) {
                message.setSender(sender);
                message.setRecipient(recipient);
                message.setSenderUsername(username);
            }else{
                throw new UserNotFoundException("User with email '" + message.getRecipientUsername() + "' not found");
            }
            return messageRepository.save(message);
        }catch (Exception e){
            throw new UserNotFoundException("User with email '" + message.getRecipientUsername() + "' not found");
        }
    }

    public Iterable<Message> findAllReceivedMessages(String username){
        return messageRepository.findAllByRecipientUsername(username);
    }

    public Iterable<Message> findAllSentMessages(String username){
        return messageRepository.findAllBySenderUsername(username);
    }


}
