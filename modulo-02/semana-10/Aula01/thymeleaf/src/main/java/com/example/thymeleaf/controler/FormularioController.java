package com.example.thymeleaf.controler;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/formulario")
public class FormularioController {
    @PostMapping
    public String postFormulario(Pessoa pessoa, String nome, Model model){

        model.addAttribute("nome", pessoa.getNome());
        return "hello";

    }

    @GetMapping
    public String helloWorld(Pessoa pessoa, Model model){
        return "formulario";
    }

    @GetMapping("/lista")
    public String listarPessoas(Model model){
        List<Pessoa> pessoas = new ArrayList<>();
        pessoas.add(new Pessoa("Pessoa 1", 12));
        pessoas.add(new Pessoa("Pessoa 2", 13));
        pessoas.add(new Pessoa("Pessoa 3", 14));
        model.addAttribute("pessoas", pessoas);
        return "lista_pessoas";
    }

}
