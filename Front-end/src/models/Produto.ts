import Categoria from "./Categoria";

interface Produto {
  id: number;
  nome: string;
  preco: number;
  dtfabricacao: string;
  descricao: string;
  imagem: string;
  ativo: boolean;
  categoria?: Categoria | null
}

export default Produto;