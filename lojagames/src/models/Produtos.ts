import Categoria from './Categoria';
export default interface Postagem {
    id: number;
    titulo: string;
    texto: string;
    data: string;
    categoria: Categoria | null;
  }