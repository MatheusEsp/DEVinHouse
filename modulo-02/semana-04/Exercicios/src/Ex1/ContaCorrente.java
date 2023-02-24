package Ex1;

public class ContaCorrente extends Conta implements Operavel{

    @Override
    public void depositar(double valor) {

    }
    @Override
    public void sacar(double valor) {

    }

    @Override
    protected Double obterSaldoAtual() {
        return saldo;
    }
}
