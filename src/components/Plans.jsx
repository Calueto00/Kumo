

export default function Plans() {
    return(
        <section id="plans" className="bg-zinc-100 text-zinc-900 py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Nossos Planos</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h3 className="text-xl font-semibold mb-4">Plano Básico</h3>
                        <p>Ideal para pequenas empresas que estão começando a explorar soluções tecnológicas.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h3 className="text-xl font-semibold mb-4">Plano Intermediário</h3>
                        <p>Perfeito para empresas em crescimento que precisam de soluções mais robustas e personalizadas.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h3 className="text-xl font-semibold mb-4">Plano Avançado</h3>
                        <p>Desenvolvido para grandes empresas que buscam soluções tecnológicas avançadas e suporte dedicado.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}