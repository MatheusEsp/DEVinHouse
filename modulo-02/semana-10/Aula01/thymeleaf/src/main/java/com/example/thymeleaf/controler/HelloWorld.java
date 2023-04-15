package com.example.thymeleaf.controler;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/hello")
public class HelloWorld {

    @GetMapping
    public String helloWorld(Model model, @RequestParam("nome") String nome){
        model.addAttribute("nome", nome);
        return "hello";
    }

}
