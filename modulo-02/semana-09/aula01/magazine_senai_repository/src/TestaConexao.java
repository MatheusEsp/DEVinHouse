import java.sql.*;
import java.util.Locale;

public class TestaConexao {
    public static void main(String[] args) {

        CriaConexao criaConexao = new CriaConexao();

        try (Connection connection = criaConexao.getConexao()) {
            System.out.println(connection.getSchema());
            Statement stm = connection.createStatement();
            boolean ehSelect = stm.execute("SELECT ID,NOME,DESCRICAO FROM produtos"); // Retorna true ou false
            System.out.println("O comando foi select?" + ehSelect);

            if(ehSelect){
                ResultSet result = stm.getResultSet(); // Retorna um resultado da consulta;
                while (result.next()){
                    int id = result.getInt("ID");
                    String nome = result.getString("NOME");
                    String descricao = result.getString("DESCRICAO");

                    System.out.printf("ID: %d, Nome: %s, Descrição: %s.%n",id,nome,descricao);

                }
            }
        } catch (SQLException e) {
            System.out.println("não foi possivel conenctar ao DB " + e.getMessage());
        }
    }
}
