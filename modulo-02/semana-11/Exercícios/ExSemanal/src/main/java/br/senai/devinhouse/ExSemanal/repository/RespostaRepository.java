package br.senai.devinhouse.ExSemanal.repository;

import br.senai.devinhouse.ExSemanal.models.Resposta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RespostaRepository extends JpaRepository<Resposta,Integer> {
}
