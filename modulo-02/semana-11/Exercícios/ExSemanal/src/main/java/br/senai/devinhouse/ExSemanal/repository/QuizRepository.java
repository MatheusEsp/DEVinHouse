package br.senai.devinhouse.ExSemanal.repository;

import br.senai.devinhouse.ExSemanal.models.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuizRepository extends JpaRepository<Quiz,Integer> {
}
