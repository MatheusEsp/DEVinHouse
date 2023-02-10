import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class DesafioLists1 {
    public static void main(String[] args) {

        int[] numeros = new int[5];

        numeros[0] = 0;
        numeros[1] = 1;
        numeros[2] = 2;
        numeros[3] = 3;
        numeros[4] = 4;

        List<Integer> numeros2 = new ArrayList<>();

        numeros2.add(5);
        numeros2.add(6);
        numeros2.add(7);
        numeros2.add(8);
        numeros2.add(9);
        numeros2.add(10);

        System.out.println(Arrays.toString(numeros));

        System.out.println(numeros2);

    }
}
