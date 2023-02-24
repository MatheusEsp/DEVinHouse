package Ex5;

public class Exercicio05 {
    public static void main(String[] args) {
        Aluno aluno = new Aluno();

        aluno.setMatricula("123abc");
        aluno.nome = "matheus";
        aluno.sobrenome = "Espindola";

        String resultado = aluno.registrar();

        System.out.println(resultado);
    }
}
