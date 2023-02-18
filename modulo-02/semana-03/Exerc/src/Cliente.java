public class Cliente {
    private String nome;
    private Double peso;
    private Double altura;
    private Integer idade;

    // =================================== Construtctors ===================================


    public Cliente(Double peso, Double altura) {
        this.peso = peso;
        this.altura = altura;
    }

    public Cliente(String nome, Integer idade, Double peso, Double altura ) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        this.idade = idade;
    }

    // =================================== GETTERS ===================================
    public  String getNome(){
        return nome;
    }
    public Double getPeso() {
        return peso;
    }

    public Double getAltura() {
        return altura;
    }

    public Integer getIdade() {
        return idade;
    }

    //=================================== SETTERS ===================================
    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setPeso(Double peso) {
        this.peso = peso;
    }

    public void setAltura(Double altura) {
        this.altura = altura;
    }

    public void setIdade(Integer idade) {
        this.idade = idade;
    }
}
