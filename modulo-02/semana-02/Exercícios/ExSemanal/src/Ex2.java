public class Ex2 {
    public static void main(String[] args) {
        double[][] notas = {
                {10, 8.5, 5.5, 9.5},
                {8.5, 7, 7.5, 6},
                {8, 9, 10, 7.5},
                {9, 9.5, 10, 8}
        };
        /*  a) Imprima o valor da nota do primeiro elemento do terceiro array de notas.
            b) Imprima o valor da nota do segundo elemento do quarto array de notas.
            c) Imprima o valor da soma das quatro primeiras notas de cada array.
        */

        double soma = 0;

        for (int i = 0; i< notas.length; i++){
            soma = soma + notas[i][0];
        }
        /*
        for (double[] nota : notas) {
            soma = soma + nota[0];
        }
         */

        System.out.println("a) " + notas[2][0]);

        System.out.println("b) " + notas[3][1]);

        System.out.println("c) " + soma);
    }
}