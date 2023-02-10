import java.util.Scanner;
public class Ex10 {
    public static void main(String[] args) {

        Scanner lendo = new Scanner(System.in);

        System.out.println("Digite uma palavra: ");

        String palavra = lendo.nextLine();

        String inversa = "";

        for (int i = palavra.length() - 1; i >= 0; i--) {
            inversa += palavra.charAt(i);
        }
        if (palavra.equals(inversa)) {
            System.out.printf("A palavra %s é um palindromo!", palavra);
        } else {
            System.out.printf("%s não é palindromo", palavra);
        }
    }
}