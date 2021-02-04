package io.dkintelligence.mesomes.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message = "Message text is required")
    private String text;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Column(updatable = false)
    private Date created_At;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date updated_At;
//    ManyToOne with User Recipient
    @ManyToOne(fetch=FetchType.EAGER)
    private User recipient;
//    ManyToOne with User Sender
    @ManyToOne(fetch=FetchType.EAGER)
    private User sender;

//    Constructors
    public Message() {
    }

//    Getters and setters
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getText() {
        return text;
    }
    public void setText(String text) {
        this.text = text;
    }
    public Date getCreated_At() {
        return created_At;
    }
    public void setCreated_At(Date created_At) {
        this.created_At = created_At;
    }
    public Date getUpdated_At() {
        return updated_At;
    }
    public void setUpdated_At(Date updated_At) {
        this.updated_At = updated_At;
    }
    public User getRecipient() {
        return recipient;
    }
    public void setRecipient(User recipient) {
        this.recipient = recipient;
        if(!recipient.getReceivedMessages().contains(this)){
            recipient.getReceivedMessages().add(this);
        }
    }
    public User getSender() {
        return sender;
    }
    public void setSender(User sender) {
        this.sender = sender;
        if(!sender.getSentMessages().contains(this)){
            sender.getSentMessages().add(this);
        }
    }

    @PrePersist
    protected void onCreate(){
        this.created_At = new Date();
    }
    @PreUpdate
    protected void onUpdate(){
        this.updated_At = new Date();
    }
}
