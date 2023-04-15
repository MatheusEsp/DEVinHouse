package br.senai.devinhouse.ExSemanal.repository;

import br.senai.devinhouse.ExSemanal.models.Perguntas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PerguntasRepository extends JpaRepository<Perguntas, Integer> {

}
