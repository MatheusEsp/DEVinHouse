import org.w3c.dom.ls.LSOutput;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        int idade = 18;

        if (idade >= 18) {
            System.out.println("Maior de idade");
        }
        // ==========================================================================
        String cor = "azul";

        switch (cor) {
            case "verde":
                System.out.println("a cor é verde");
                break;

            case "Vermelho":
                System.out.println("a cor é vermelho");
                break;

            case "azul":
                System.out.println("a cor é azul");
                break;

            default:
                System.out.println("Outra cor");
        }

        // ============================================================================
        // Ternário

        String resultado = idade >= 18 ? "maior" : "menor";

        System.out.println(resultado);

        // ============================================================================

        /*
            isso && aquilo  : isso e aquilo
            isso || aquilo  : isso ou aquilo
            !isso           : não é isso

         */
        boolean tenhoCarro = false;
        boolean tenhoDinheiro = true;
        boolean onibus = true;

        if (tenhoCarro || (tenhoDinheiro && onibus)) {
            System.out.println("carro true");
        } else
            System.out.println("Carro falso");

        System.out.println("Digita um inteiro: ");
        Scanner leitura = new Scanner(System.in);

        int inteiro = leitura.nextInt();

        if (inteiro >= 18) {
            System.out.println("Maior idade");
        } else {
            System.out.println("Menor idade");
        }
    }
}