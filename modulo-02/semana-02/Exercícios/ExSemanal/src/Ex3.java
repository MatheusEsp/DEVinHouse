import java.awt.*;

public class Ex3 {
    public static void main(String[] args) {

        int[] extrato = { 100, -35, -15, -5, 55, -20 };

        int saldo = 0;

        System.out.println("-------------------------------------");
        System.out.println("a) ");
        for(int i = 0; i < extrato.length; i++){

            System.out.println(extrato[i]);
            saldo += extrato[i];

        }
        System.out.println("-------------------------------------");
        System.out.println("b)");
        for(int j = (extrato.length - 1); j >= 0; j--){
            System.out.println(extrato[j]);
        }
        System.out.println("-------------------------------------");
        System.out.println("c)");
        System.out.println("Saldo da conta: " + saldo);
        System.out.println("-------------------------------------");
        System.out.println("d)");
        String positvo = saldo > 0 ? "Saldo positivo" : "Saldo negativo";
        System.out.println(positvo);
    }
}