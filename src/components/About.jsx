

export default function About() {
    return(
        <section id="about" className="bg-zinc-900 text-white py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Sobre a Kumo</h2>
                <p className="text-lg md:text-xl mb-8 text-center max-w-3xl mx-auto">A Kumo é uma empresa de tecnologia que oferece soluções inovadoras para o seu negócio. Com uma equipe de profissionais altamente qualificados, estamos comprometidos em fornecer serviços de qualidade e resultados excepcionais para nossos clientes.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-zinc-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h3 className="text-xl font-semibold mb-4">Missão</h3>
                        <p className="text-base">Nossa missão é fornecer soluções tecnológicas que impulsionem o crescimento e a inovação dos nossos clientes, ajudando-os a alcançar seus objetivos de negócios.</p>
                    </div>
                    <div className="bg-zinc-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h3 className="text-xl font-semibold mb-4">Visão</h3>
                        <p className="text-base">Ser reconhecida como uma empresa líder em tecnologia, oferecendo serviços de alta qualidade e contribuindo para o sucesso dos nossos clientes em um mercado competitivo.</p>
                    </div>
                    <div className="bg-zinc-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h3 className="text-xl font-semibold mb-4">Valores</h3>
                        <p className="text-base"> Nossos valores incluem integridade, inovação, excelência e compromisso com a satisfação do cliente. Acreditamos que o sucesso é alcançado através da colaboração e do respeito mútuo.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}