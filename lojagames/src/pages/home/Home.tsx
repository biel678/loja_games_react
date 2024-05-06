import homeLogo from '../../assets/home.jpeg'

function Home() {
    return (
        <>
            <div className="bg-black flex justify-center">
                <div className='container grid grid-cols-2 text-red-600'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
                        <p className='text-xl'>Esse é o melhor local para encontrar o jogo certo"</p>

                        <div className="flex justify-around gap-4">

                            <button className='rounded bg-black text-orange-700 py-2 px-4'>Ver categorias de jogos</button>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img src={homeLogo} className='max-w-screen-xl' alt="" />

                    </div>
                </div>
            </div>

        </>
    )
}

export default Home;