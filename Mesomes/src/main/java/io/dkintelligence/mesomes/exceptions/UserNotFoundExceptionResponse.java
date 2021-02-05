package io.dkintelligence.mesomes.exceptions;

public class UserNotFoundExceptionResponse {

    private String recipientUsername;

    public UserNotFoundExceptionResponse(String recipientUsername) {
        this.recipientUsername = recipientUsername;
    }

    public String getRecipientUsername() {
        return recipientUsername;
    }

    public void setRecipientUsername(String recipientUsername) {
        this.recipientUsername = recipientUsername;
    }
}
