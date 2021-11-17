package br.org.generation.desembalamenos.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.org.generation.desembalamenos.model.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository <Usuario, Long> {

public Optional <Usuario> findByUsuario(String usuario);

public List <Usuario> findAllByNomeCompletoContainingIgnoreCase(String nomeCompleto);
	
}
