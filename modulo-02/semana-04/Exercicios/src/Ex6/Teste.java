package Ex6;

public class Teste {

    public void validar(String valorCampo, Integer valorMaxCampo) throws TamanhoInvalidoException {
        if (valorCampo == null || valorMaxCampo == null || valorMaxCampo < 0)
            throw new IllegalArgumentException();

        if (valorCampo.length() > valorMaxCampo)
            throw new TamanhoInvalidoException();
    }
    public static void main(String[] args) {
        Teste exercicio06 = new Teste();
        try {
            exercicio06.validar("Matheus",10);
            System.out.println("Deu certo");
        } catch (TamanhoInvalidoException e){
            System.out.println("Erro inesperado");
        }
    }
}
