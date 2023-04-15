import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class CriaConexao {
    private final static String url = "jdbc:oracle:thin:@192.168.0.104:1521/xe";
    private final static String user = "MATHEUS12";
    private final static String password = "0r4cl3Cl0ud*";

    public static Connection getConexao() throws SQLException {
        return DriverManager.getConnection(url,user,password);

    }
}