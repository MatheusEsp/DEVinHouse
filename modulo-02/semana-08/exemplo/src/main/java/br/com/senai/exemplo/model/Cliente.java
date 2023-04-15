package br.com.senai.exemplo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor
public class Cliente {
    private String nome;
    private Integer idade;
    private String cpf;

}
