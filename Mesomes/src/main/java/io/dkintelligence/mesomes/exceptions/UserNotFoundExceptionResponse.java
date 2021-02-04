package io.dkintelligence.mesomes.exceptions;

public class UserNotFoundExceptionResponse {

    private String UserNotFound;

    public UserNotFoundExceptionResponse(String userNotFound) {
       this.UserNotFound = userNotFound;
    }

    public String getUserNotFound() {
        return UserNotFound;
    }
    public void setUserNotFound(String userNotFound) {
        UserNotFound = userNotFound;
    }
}
