package br.senai.devinhouse.demoapi.service;

import br.senai.devinhouse.demoapi.dto.ProdutoRequest;
import br.senai.devinhouse.demoapi.models.Produto;
import br.senai.devinhouse.demoapi.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Service
public class ProdutoService {

    @Autowired
    ProdutoRepository repository;

    public Produto busca(int id){
        return repository.findById(id);
    }

    public List<Produto> busca(String nome){
        return repository.findByNome(nome);

    }

    public void cadastra(ProdutoRequest produtoRequest){
        Produto produto = new Produto();

        produto.setNome(produtoRequest.getNome());
        produto.set


         repository.save(produto);
    }

    public List<Produto> busca(@RequestParam double precoMin, @RequestParam double precoMax){
        return service.busca(precoMin, precoMax)
    }
}
