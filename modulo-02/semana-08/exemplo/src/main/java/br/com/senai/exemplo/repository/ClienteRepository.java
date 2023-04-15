package br.com.senai.exemplo.repository;

import br.com.senai.exemplo.model.Cliente;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class ClienteRepository {
    private static List<Cliente> clienteList = new ArrayList<>();

    public Cliente encontrarClientId(Integer id){
        return clienteList.get(id);
    }

    public boolean salvarClient(Cliente cliente){
        return clienteList.add(cliente);
    }

    public boolean deletarClientId(Integer id){
        return clienteList.remove(id);
    }

    public void atualizarClientId(Integer id, Cliente cliente){
        clienteList.add(id,cliente);
    }

}
