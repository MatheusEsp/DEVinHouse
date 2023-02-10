import java.util.List;

public class Main {
    public static void main(String[] args) {

        int[] numeros = {1,40,-5,15,0,67,20,34,52,};

        int positivos = 0,negativos = 0, zeros = 0;

        for(int i = 0; i < numeros.length; i++){

            if(numeros[i] > 0){
                positivos += 1;
            } else if (numeros[i] < 0) {
                negativos += 1;

            } else if (numeros[i] == 0) {

                zeros +=1;
            }
        }
        System.out.println("Zeros: " + zeros);
        System.out.println("Positivos: " + positivos);
        System.out.println("Negativos: " + zeros);
    }
}