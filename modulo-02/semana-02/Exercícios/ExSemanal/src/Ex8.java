import java.util.Arrays;
import java.util.List;

public class Ex8 {
    public static void main(String[] args) {

        List<Integer> numeros = Arrays.asList(0,2,88,56,33,42,67,3,9,0,2);

        for (int i = 0; i < numeros.size(); i++){

            if(numeros.get(i) > 50) {
                System.out.printf("Primeira ocorrencia é o %d° numero do array (%d) ",i+1, numeros.get(i));
                break;

            }
        }
    }
}