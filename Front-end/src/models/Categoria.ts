import Produto from "./Produto";

interface Categoria {
  id: number;
  categoria: string;
  descricao: string;
  palavraChave: string;
  produto: Produto[];
}

export default Categoria;