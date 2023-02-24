package Ex4;

import java.util.Scanner;

public class Exercicio04 {
    public static void main(String[] args) {
        Exercicio04 exercicio = new Exercicio04();
        Integer idade = null;
        while (idade == null){
            try {
                idade = exercicio.perguntarIdade();
            } catch (IdadeInvalidaExeption e) {
                System.out.println("A idade informada é inválida");

            }
        }
        System.out.printf("Olá, você tem %d anos de idade",idade);
    }
    private Integer perguntarIdade() throws IdadeInvalidaExeption {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Informe a sua idade: ");
        int idade = scanner.nextInt();
        if (idade <= 0 || idade > 100)
            throw new IdadeInvalidaExeption();
        return idade;
    }
}