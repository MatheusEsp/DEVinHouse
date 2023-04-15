package br.com.senai.exemplo.service;

import br.com.senai.exemplo.model.Cliente;
import br.com.senai.exemplo.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository repository;

    public ClienteService(ClienteRepository repository){
        this.repository = repository;
    }
    public boolean criarCliente(Cliente cliente){
         return repository.salvarClient(cliente);

    }
    public List<Cliente> pesquisarCliente(Integer id){
        return repository.encontrarClientId(id);

    }

    public Cliente pesquisarClientePorID(Integer id){

    }




}
