

export default function Hero() {
    return(
        <section id="hero" className="bg-zinc-900 text-white h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Bem-vindo ao Kumo</h1>
            <p className="text-lg md:text-xl mb-8 text-center max-w-xl">A Kumo é uma empresa de tecnologia que oferece soluções inovadoras para o seu negócio. Descubra como podemos ajudá-lo a crescer e se destacar no mercado.</p>
            <a href="#about" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300">Saiba mais</a>
        </section>
    )
}