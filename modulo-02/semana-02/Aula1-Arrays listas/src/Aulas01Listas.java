import java.util.Arrays;
import java.util.List;
import java.util.ArrayList;
public class Aulas01Listas {
    public static void main(String[] args) {
        List<String> nomes = new ArrayList<>();     // Criando lista vazia
        // criado lista inicializada com elementos:

        List<String> nomes2 = Arrays.asList("kirk", "Spock", "McCoy");  //Não podemos acrescentar valores

        List<String> nomes3 = List.of("kirk","Spock", "McCoy");

        nomes.add("Thiago");        // list.append()

        System.out.println(nomes);

        nomes.set(0, "Marcos");     // Substitui no (index, valor)

        //nomes.remove();

        System.out.println(nomes);

        List<String > frutas = List.of("Maça", "Banana", "Uva");

        nomes.addAll(frutas);       // Adiciona todos os valores de uma lista na outra

        System.out.println(nomes2);

    }
}
