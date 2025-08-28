import Footer from "../../../Components/Guest/Shared/Footer";
import Sidebar from "../../../Components/Guest/Desktop/Sidebar";

const GuestDesktopLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-neutral-50 text-neutral-800">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default GuestDesktopLayout;
