import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Ex6 {
    public static void main(String[] args) {
        List<Integer> lista = Arrays.asList(1,2,3,4);

        List<Integer> lista3x = new ArrayList<>();

        for(int i = 0; i < lista.size(); i++){

            lista3x.add(lista.get(i)*3);

        }
        System.out.println(lista3x);
    }
}