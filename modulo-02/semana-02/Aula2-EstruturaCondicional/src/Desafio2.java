import java.util.Scanner;

public class Desafio2 {
    public static void main(String[] args) {
        System.out.println("Escolha uma cor: (Vermelho, Amarelo, Verde)");
        Scanner leitura = new Scanner(System.in);

        String cor = leitura.next();

        switch (cor){
            case "vermelho":
                System.out.println("Pare o carro");
                break;
            case "amarelo":
                System.out.println("Finalize a travessia");
                break;
            case "verde":
                System.out.println("Siga em frente");
                break;
            default:
                System.out.println("Cor inválida");
        }

    }
}
