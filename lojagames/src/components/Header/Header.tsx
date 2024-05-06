import { Link } from 'react-router-dom'

function Header() {

  return (
    <>
      <div className='w-full bg-black text-orange-600 flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
        <Link to='/home' className='text-2xl font-bold uppercase'>Loja de Jogos</Link>

        <div className='flex gap-4'>
            <div className='hover:underline'>Produtos</div>
            <Link to='/categorias' className='hover:underline'>Categorias</Link>
            <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar categoria</Link>
              <div className='hover:underline'>Perfil</div>
              
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;
