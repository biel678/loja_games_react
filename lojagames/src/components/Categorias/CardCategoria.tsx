import { Link } from 'react-router-dom'
import Categoria from '../../models/Categoria'

interface CardCategoriaProps {
    categoria: Categoria;
}

function CardCategoria({categoria}: CardCategoriaProps) {
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between '>
      <header className='py-2 px-6 bg-black text-white font-bold text-2xl'>Categoria</header>
      <p className='p-8 text-3xl bg-slate-300 h-full'>{categoria.tipo}</p>
      <div className="flex">
        <Link to={`/EditarCategoria/${categoria.id}`} className='w-full text-slate-100 bg-orange-600 hover:bg-orange-900 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/DeletarCategoria/${categoria.id}`} className='text-slate-100 bg-red-700 hover:bg-red-900 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardCategoria;