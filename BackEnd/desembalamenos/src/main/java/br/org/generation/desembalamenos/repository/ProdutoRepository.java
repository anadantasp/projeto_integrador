package br.org.generation.desembalamenos.repository;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.org.generation.desembalamenos.model.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
	
	public List<Produto> findAllByNomeContainingIgnoreCase(String nome);
	
	public List<Produto> findByPrecoBetween(BigDecimal inicio, BigDecimal fim);
}
