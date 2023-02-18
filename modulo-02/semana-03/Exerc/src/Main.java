import java.util.Scanner;

public class Main {
    public static void main(String[] args) {


        String nome = "João";
        int idade = 35;
        Double peso = 40d;
        Double altura = 1.75d;


        Clinica var1 = new Clinica();

        var1.addClientes(nome, idade, peso,altura);

        var1.showClientes();

        Scanner seletcCliente = new Scanner(System.in);

        System.out.println("Escolha a ID do paciente! ");
        int idCliente = seletcCliente.nextInt();

        var1.tratamentoFixo(var1.getClientes(),idCliente);

        //USE A UNIDADE EM METROS
    }
}