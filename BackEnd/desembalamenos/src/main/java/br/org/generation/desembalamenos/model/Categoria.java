package br.org.generation.desembalamenos.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table (name = "tb_categoria")
public class Categoria {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotBlank(message = "O nome da categoria é obrigatório!")
	@Size(min = 4, max = 255, message = "A categoria deve conter mais que 4 carácteres e menos que 255 carácteres.")
	private String categoria;
	
	
	@NotNull(message = "O campo da descrição é obrigatório!")
	@Size(min = 5, max = 1000, message = "A descrição deve conter mais que 5 carácteres e menos que 1000 carácteres.")
	private String descricao;
	
	
	@NotNull(message = "O nome da palavra chave é obrigatório!")
	@Size(min = 4, max = 255, message = "A palavra chave deve conter mais que 4 carácteres e menos que 255 carácteres.")
	private String palavraChave;
	
	@OneToMany(mappedBy = "categoria", cascade = CascadeType.ALL)
	@JsonIgnoreProperties("categoria")
	private List<Produto> produto;


	

	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getCategoria() {
		return categoria;
	}


	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}


	public String getDescricao() {
		return descricao;
	}


	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}


	public String getPalavraChave() {
		return palavraChave;
	}


	public void setPalavraChave(String palavraChave) {
		this.palavraChave = palavraChave;
	}
	
	public List<Produto> getProduto() {
		return produto;
	}


	public void setProduto(List<Produto> produto) {
		this.produto = produto;
	}
	
	
	
	
}
