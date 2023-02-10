import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Desafio1 {
    public static void main(String[] args) {

        System.out.println("Digite a primeira nota do aluno: ");
        Scanner valor1 = new Scanner(System.in);

        double nota1 = valor1.nextDouble();

        System.out.println("Digita a segunda nota do aluno: ");
        Scanner valor2 = new Scanner(System.in);

        double nota2 = valor2.nextDouble();


        double soma = nota1 + nota2;

        if(soma/2 >= 7 ){
            System.out.println("Aluno aprovado com média: " + soma/2);
        } else {
            System.out.println("Aluno Reprovado com média: ");
        }

    }
}
