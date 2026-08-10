

export default function Why() {
    return(
        <section id="why" className="bg-zinc-100 text-zinc-900 py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Por que escolher a Kumo?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h3 className="text-xl font-semibold mb-4">Inovação</h3>
                        <p>A Kumo está sempre à frente, oferecendo soluções tecnológicas inovadoras para impulsionar o seu negócio.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h3 className="text-xl font-semibold mb-4">Expertise</h3>
                        <p>Nossa equipe é composta por especialistas altamente qualificados, garantindo a entrega de serviços de alta qualidade.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h3 className="text-xl font-semibold mb-4">Suporte</h3>
                        <p>Oferecemos suporte contínuo e personalizado para atender às necessidades específicas do seu negócio.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}