package Ex3;

public class Produto implements Tributavel{

    private double valor;       // inicia com 0

    private Double imposto;     // inicia com null

    @Override
    public Double calcularValorComImposto() {

        return valor + imposto;

    }

}
