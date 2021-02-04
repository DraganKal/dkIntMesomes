package io.dkintelligence.mesomes.web;

import io.dkintelligence.mesomes.model.Message;
import io.dkintelligence.mesomes.services.MapValidationErrorService;
import io.dkintelligence.mesomes.services.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;

@RestController
@RequestMapping("/api/messages")
@CrossOrigin
public class MessageController {

    @Autowired
    private MessageService messageService;
    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @PostMapping("")
    public ResponseEntity<?> sendNewMessage(@Valid @RequestBody Message message, BindingResult result, Principal principal){
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null) return errorMap;
        Message message1 = messageService.saveMessage(message, principal.getName());
        return new ResponseEntity<>(message1, HttpStatus.CREATED);

    }
    @GetMapping("/received")
    public Iterable<Message> getReceivedMessages(Principal principal){
        return messageService.findAllReceivedMessages(principal.getName());
    }
    @GetMapping("/sent")
    public Iterable<Message> getSentMessages(Principal principal){
        return messageService.findAllSentMessages(principal.getName());
    }


}
