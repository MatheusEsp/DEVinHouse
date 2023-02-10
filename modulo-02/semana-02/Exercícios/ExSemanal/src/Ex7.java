import java.util.Arrays;
import java.util.List;

public class Ex7 {
    public static void main(String[] args) {

        List<String> nomes = Arrays.asList("kirk", "spock", "scott", "mccoy", "sulu");

        System.out.println("a) For classico: ");
        for(int i = 0; i < nomes.size(); i++){
            System.out.println(nomes.get(i));
        }
        System.out.println("=======================================");
        System.out.println("b) For-each:");
        for (String nome : nomes) {
            System.out.println(nome);
        }
        System.out.println("=======================================");
        System.out.println("c) While: ");
        int c = 0;
        while (c < nomes.size()){
            System.out.println(nomes.get(c));
            c++;

        }

    }
}