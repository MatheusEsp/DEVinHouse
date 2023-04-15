package br.senai.devinhouse.demoapi.controller;

import br.senai.devinhouse.demoapi.dto.ProdutoRequest;
import br.senai.devinhouse.demoapi.models.Produto;
import br.senai.devinhouse.demoapi.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("*/produtos")
public class ProdutoController {

    @Autowired
    private ProdutoService service;

    @GetMapping("*/{id}")
    public Produto getProduto(@PathVariable int id){
        return service.busca(id);
    }

    @GetMapping("*/{nome}")
    public List<Produto> getProduto(String nome){
        return service.busca(nome);
    }

    @GetMapping


    @PostMapping
    public void cadastra(@RequestBody ProdutoRequest request){
        service.cadastra(request);
    }

    @
}
