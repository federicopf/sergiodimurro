
const Footer = () => {
    return (
        <footer className="bg-white border-t border-neutral-200 py-6 mt-8">
            <div className="container mx-auto flex items-center justify-between px-6">
                <p className="text-sm opacity-70">
                    © {new Date().getFullYear()} Sergio Di Murro. Tutti i diritti riservati.
                </p>

                <div className="flex space-x-4">
                    <a href="#" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Instagram</a>
                    <a href="#" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Facebook</a>
                    <a href="#" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Contatti</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
