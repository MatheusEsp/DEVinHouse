package com.exampleexerc.Ex1.repository;

import com.exampleexerc.Ex1.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface ProdutoRepository extends JpaRepository<Produto, Integer> {

}
