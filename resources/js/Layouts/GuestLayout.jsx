import Footer from "../Components/Guest/Footer";

const GuestLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-50 text-neutral-800">
      {/* <header className="px-6 py-4 shadow-sm bg-white sticky top-0 z-10">
        <h1 className="text-2xl font-light tracking-wide">Sergio Di Murro</h1>
      </header> */}

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
};

export default GuestLayout;
