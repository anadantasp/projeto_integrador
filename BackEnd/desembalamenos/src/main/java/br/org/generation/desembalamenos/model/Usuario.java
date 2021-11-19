package br.org.generation.desembalamenos.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import io.swagger.annotations.ApiModelProperty;


@Entity
@Table(name = "tb_usuarios")
public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotBlank(message = "O nome do usuário não pode estar em branco")
	private String nomeCompleto;
	
	@ApiModelProperty(example = "email@email.com.br")
	@NotBlank(message = "o email do usuário não pode estar em branco")
	@Size(min = 5, max = 100, message= "o email do usuário deve conter no minímo 5 caracteres e no maximo 100")
	private String usuario;
	
	@NotBlank
	@Size(min = 4, max = 100, message =" a senha do usuário deve conter no minimo 4 caracteres e no maximo 100")
	private String senha;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNomeCompleto() {
		return nomeCompleto;
	}

	public void setNomeCompleto(String nomeCompleto) {
		this.nomeCompleto = nomeCompleto;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}
	
	
}
