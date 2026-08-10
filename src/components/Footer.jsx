

export default function Footer(){
    return(
        <footer className="bg-zinc-900 text-white py-10">
            <div className="container mx-auto px-4 text-center">
                <p>&copy; {new Date().getFullYear()} Sua Empresa. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}