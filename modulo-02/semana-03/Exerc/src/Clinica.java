import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import static java.lang.Math.pow;
public class Clinica {
    private String nomeDono;
    private String cnpj;
    private String endereco;
    private String codigoClinica;

    private List<Cliente> clientes = new ArrayList<>();

    public List<Cliente> getClientes() {
        return clientes;
    }

    public Clinica(String nomeDono) {
        this.nomeDono = nomeDono;
    }

    public Clinica(String nomeDono, List<Cliente> clientes) {
        this.nomeDono = nomeDono;
        this.clientes = clientes;
    }

    public void addClientes(String nome,Integer idade, Double peso, Double altura){

        Cliente clientesClinica = new Cliente(nome, idade, peso, altura);

        clientes.add(clientesClinica);

    }


    public void showClientes(){
        for (Cliente consultaCliente : this.clientes) {
            System.out.println(
                    "   Nome: "     + consultaCliente.getNome()     +
                    " - Idade: "    + consultaCliente.getIdade()    + " anos " +
                    " - Peso: "     + consultaCliente.getPeso()     + " kg" +
                    " - Altura: "   + consultaCliente.getAltura()   + "m ");

        }

    }

    public void tratamentoFixo(List<Cliente> tratamentoCliente, int id){

        if(id > tratamentoCliente.size() || id == 0){
            System.out.println("Cliente não identificado");
        } else {
            Scanner pegandoPeso = new Scanner(System.in);
            Scanner metodoTratamento = new Scanner(System.in);
            Cliente currentClient = tratamentoCliente.get(id - 1);
            System.out.println("Escolha o metodo de tratamento: (1) Tratamento Fixo | (2) Tratamento Variado");
            int escolha = metodoTratamento.nextInt();
            switch (escolha){
                case 1:
                    System.out.println("Tratamento Fixo realizado com sucesso (-5 kg)");

                    currentClient.setPeso(currentClient.getPeso() - 5);

                    showClientes();

                    break;

                case 2:
                    System.out.println("Digite o valor perdido em kgs: ");

                    Double perderPeso = pegandoPeso.nextDouble();

                    currentClient.setPeso(currentClient.getPeso() - perderPeso);

                    showClientes();
                    break;

                }
            }
        }

    public Clinica() {
    }

    public double calculaIMC(Double altura, Double peso){

        Double IMC = peso / (altura * altura);

        if(IMC <= 18.5){
            System.out.println("Baixo peso");
        } else if (18.6 < IMC && IMC < 24.9) {
            System.out.println("Peso normal");
        } else if (25 <= IMC && IMC < 29.9) {
            System.out.println("Sobrepeso");
        } else if (30 <= IMC && IMC < 34.9) {
            System.out.println("Obesidade 1º grau");
        } else if (35 <= IMC && IMC < 39.9) {
            System.out.println("Obesidade 2º grau");
        } else
            System.out.println("GAU?");

        return IMC;
    }


}

