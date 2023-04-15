package com.exampleexerc.Ex1.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/produto")
public class ProdutoController {

    public String nomeProduto = "Qualquer coisa";
    public String descricao = "Utilizado para muitas coisas no dia a dia";
    public String dataLancamento = "04/04/2023";
    public String preco = "R$250,00";

    @GetMapping
    public String getProduto(Model model){
        model.addAttribute("nome", nomeProduto );
        model.addAttribute("descricao",descricao );
        model.addAttribute("data",dataLancamento);
        model.addAttribute("preco",preco);

        return "produto";

    }
}
