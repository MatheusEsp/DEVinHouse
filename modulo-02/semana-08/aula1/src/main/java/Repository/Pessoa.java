package Repository;

import java.util.List;

public class Pessoa {
	private static ArrayList<Pessoa> pessoas = new ArrayList<>();
	
	public Pessoa getPessoa(Integer id) {
		return pessoas.get(id);
	}
	
	public boolean getPessoa(Pessoa pessoa) {
		pessoas.add(pessoa);
	}
	
	

}
