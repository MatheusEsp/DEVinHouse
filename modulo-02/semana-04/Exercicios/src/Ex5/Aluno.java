package Ex5;

public class Aluno extends Pessoa {
    private String matricula;

    public String registrar(){

        String texto = obterNomeCompleto();

        return "Sou o " + texto + " e minha matricula é: " + matricula;
    }

    public String getMatricula() {
        return matricula;
    }

    public void setMatricula(String matricula) {
        this.matricula = matricula;
    }
}
