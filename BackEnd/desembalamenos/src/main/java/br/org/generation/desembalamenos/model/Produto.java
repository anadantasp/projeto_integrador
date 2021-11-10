package br.org.generation.desembalamenos.model;

import java.math.BigDecimal;
import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.PositiveOrZero;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tb_produto")
public class Produto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotBlank(message = "o nome do atributo produto não pode estar em branco")
	@Size(max = 255, message = "o nome do produto deve conter no maxímo 255 caracteres")
	private String nome;
	
	@JsonFormat(shape = JsonFormat.Shape.STRING)
	@NotNull(message = "O valor do produto não pode estar em branco")
	@PositiveOrZero(message = "O valor do produto tem que ser um valor positivo")
	private BigDecimal preco;
	
	@JsonFormat(pattern="yyyy-MM-dd")
	private LocalDate dtfabricacao;
	
	@NotBlank(message = "o campo descrição não pode estar em branco")
	@Size(max = 1000, message = "o atributo descrição deve conter no maximo 1000 caracteres")
	private String descricao;
	
	@NotBlank(message = " o campo imagem não pode estar em branco")
	private String imagem;
	
	private boolean ativo;
	
   @ManyToOne
   @JsonIgnoreProperties("produto")
   private Categoria categoria;
	
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public BigDecimal getPreco() {
		return preco;
	}

	public void setPreco(BigDecimal preco) {
		this.preco = preco;
	}

	

	public LocalDate getDtfabricacao() {
		return dtfabricacao;
	}

	public void setDtfabricacao(LocalDate dtfabricacao) {
		this.dtfabricacao = dtfabricacao;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getImagem() {
		return imagem;
	}

	public void setImagem(String imagem) {
		this.imagem = imagem;
	}

	public boolean isAtivo() {
		return ativo;
	}

	public void setAtivo(boolean ativo) {
		this.ativo = ativo;
	}

	public Categoria getCategoria() {
		return categoria;
	}

	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}

	
	
}
