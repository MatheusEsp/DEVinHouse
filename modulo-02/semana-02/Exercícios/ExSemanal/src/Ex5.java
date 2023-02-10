public class Ex5 {
    public static void main(String[] args) {

        int[] teste = {-2,-2,-2,-2};

        /*
        int[] teste = {56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47};
        int[] teste = {1, -1};
        int[] teste = {1};
        int[] teste = null;
        int[] teste = {-2,-2,-2,-2};
        int[] teste = {20,10,30};
        */

        int maior = 0;
        int menor = 0;
        if (teste == null) {
            System.out.println("Impossivel calcular");
        } else {
            for (int i = 0; i < teste.length; i++) {
                if (teste[i] > maior) {
                    maior = teste[i];
                }
                if (teste[i] < menor) {
                    menor = teste[i];
                }
            }
            System.out.printf("Maior: %d \nMenor: %d",maior, menor);
        }
    }
}


