package io.dkintelligence.mesomes.services;

import io.dkintelligence.mesomes.exceptions.UsernameAlreadyExistsException;
import io.dkintelligence.mesomes.model.User;
import io.dkintelligence.mesomes.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public User saveUser (User newUser){
        try{
            newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));
//             Username has to be unique (exception)
            newUser.setUsername(newUser.getUsername());

//        Make sure that password and confirmPassword match
//        We don't persist or show the confirm password
            newUser.setConfirmPassword("");
            return userRepository.save(newUser);
        }catch (Exception e){
            throw new UsernameAlreadyExistsException("username '" + newUser.getUsername() + "' already exists");
        }

    }

}
