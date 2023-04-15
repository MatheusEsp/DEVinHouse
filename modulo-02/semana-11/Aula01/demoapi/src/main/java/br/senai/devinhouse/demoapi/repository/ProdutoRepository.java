package br.senai.devinhouse.demoapi.repository;

import br.senai.devinhouse.demoapi.models.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Integer> {

    //@Query("SELECT p FROM Produto p WHERE id = :id")
    Produto findById(int id);

    List<Produto> findByNome(String nome);

    @Query("SELECT p FROM Produto p WHERE p.categoria .nome = :nomeCategoria")
    List<Produto> findByCategoria(String nomeCategoria);

    @Query("SELECT p FROM PRODUTO p WHERE preco BETWEEN :precomin AND :precomax")
    List<Produto> findBetweenPreco(double precoMin, double precoMax);

    List<Produto> findByPrecoBetween(double precoMin, double precoMax);

}
