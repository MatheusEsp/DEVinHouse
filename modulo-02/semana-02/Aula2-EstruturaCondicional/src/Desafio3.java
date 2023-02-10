import java.util.Scanner;

import static java.lang.Math.pow;

public class Desafio3 {
    public static void main(String[] args) {
        System.out.println("Informe sua Altura: ");
        Scanner valor1 = new Scanner(System.in);
        float altura = valor1.nextFloat();

        System.out.println("Informe seu peso: ");
        Scanner valor2 = new Scanner(System.in);
        float peso = valor2.nextFloat();


        float imc = (float)(peso/(pow(2,altura)));

        if(imc < 18.5){
            System.out.println("IMC: Magreza");
        } else if ( 18.5< imc || imc < 24.9){
            System.out.println("IMC: Normal");
        } else if (25.0 < imc || imc < 29.9){
            System.out.println("IMC: Sobrepeso");
        } else if (30.0 < imc || imc < 39.9) {
            System.out.println("IMC: Obesidade");
        } else if (imc > 40.0) {
            System.out.println("IMC: Obesidade grave");
        }
    }
}
