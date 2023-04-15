package com.example.securityjwt.controller;

import com.example.securityjwt.model.Produto;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/produto")
public class ProdutoController {
    private final ProdutoService service;

    @GetMapping("/todos")
    public List<Produto> listarProdutos(){
        return service.listarProdutos();

    }

    @PostMapping
    public Produto salvarProduto(@RequestBody Produto produto){
        return service.salvarProduto(produto);
    }
}
