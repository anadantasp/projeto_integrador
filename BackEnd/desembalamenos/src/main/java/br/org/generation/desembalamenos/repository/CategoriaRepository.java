package br.org.generation.desembalamenos.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.org.generation.desembalamenos.model.Categoria;

@Repository
public interface CategoriaRepository extends JpaRepository <Categoria, Long>{
	public List <Categoria> findAllByCategoriaContainingIgnoreCase (String categoria);
}
