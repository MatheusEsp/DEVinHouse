import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;

public class TestaInsercao {

    public static void main(String[] args){
        try(Connection conn = CriaConexao.getConexao()){
            Statement stm = conn.createStatement();
            stm.execute("INSERT INTO PRODUTOS (nome, descreicao, preco) VALUES ('Curso Java','Aprenda JAVA em 5 passos',1000)",Statement.NO_GENERATED_KEYS);

        } catch (SQLException e){
            System.out.println(e.getMessage());
        }
    }
}
