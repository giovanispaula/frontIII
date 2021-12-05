package com.getnet.UserGetNet.controller;

import com.getnet.UserGetNet.error.CustomError;
import com.getnet.UserGetNet.model.Users;
import com.getnet.UserGetNet.repositories.UserRepository;
import io.swagger.annotations.ApiModelProperty;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

//    POST para cadastrar novo usuário.
    @PostMapping("/users")
    @ResponseStatus(HttpStatus.CREATED)
    @ApiModelProperty(position = 1, notes = "Usado para cadastrar novos usuários")
    public Users saveUser(@Valid @RequestBody Users user) throws Exception {
        return userRepository.save(user);

    }

//    GET para buscar usuário por Id.

    @GetMapping("/users/{id}")
    @ApiModelProperty(position = 3, notes = "Usado para encontrar usuários por Id")
    public Optional<Users> findUserById(@PathVariable("id") Long id) throws Exception {
        Optional<Users> u = userRepository.findById(id);
        if (u.isPresent()) {
            return userRepository.findById(id);
        } else {
            throw new CustomError("Usuário não encontrado pelo id: " + id);
        }
    }

//    GET para listar todos os usuários
    @GetMapping("/users")
    @ApiModelProperty(position = 2, notes = "Usado para Listar todos os usuários")
    public List<Users> findAllUsers() {
        return userRepository.findAll();
    }

//    PUT para atualizar um usuário buscando pelo Id.
    @PutMapping("/users/{id}")
    public ResponseEntity<Users> updateUser(@PathVariable("id") Long id, @RequestBody Users newUser) throws Exception {
        Optional<Users> u = userRepository.findById(id);

        if (u.isPresent()) {
            Users user = u.get();
            user.setName(newUser.getName());
            user.setPassword(newUser.getPassword());
            user.setEmail(newUser.getEmail());
            userRepository.save(user);
            return new ResponseEntity<Users>(user, HttpStatus.OK);
        } else {
            throw new CustomError("Usuário não encontrado pelo id: " + id);
        }
    }

//    GET para filtrar usuários por nome.
    @GetMapping("/users/filter/{name}")
    @ResponseBody
    @ApiModelProperty(position = 4, notes = "Usado para filtrar usuários por nome")
    public ResponseEntity<List<Users>> findUserByName(@PathVariable("name") String name){
            List<Users> user = userRepository.findUserByName(name);
            return new ResponseEntity<List<Users>>(user, HttpStatus.OK);
    }
}
