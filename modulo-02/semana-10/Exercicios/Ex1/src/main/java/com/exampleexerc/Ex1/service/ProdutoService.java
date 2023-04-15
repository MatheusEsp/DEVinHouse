package com.exampleexerc.Ex1.service;

import com.exampleexerc.Ex1.repository.ProdutoRepository;

public class ProdutoService {

    private final ProdutoRepository repository;


    public ProdutoService(ProdutoRepository repository) {
        this.repository = repository;
    }
}
