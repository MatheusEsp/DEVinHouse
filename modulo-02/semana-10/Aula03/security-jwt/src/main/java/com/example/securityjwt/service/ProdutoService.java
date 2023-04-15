package com.example.securityjwt.service;

import com.example.securityjwt.model.Produto;
import com.example.securityjwt.repository.ProdutoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProdutoService {
    private final ProdutoRepository repository;

    public ProdutoService(ProdutoRepository repository){
        this.repository = repository;
    }

    public List<Produto>(){
        return repository.findAll();
    }
}
