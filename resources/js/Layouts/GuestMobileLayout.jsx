import Footer from "../Components/Guest/Shared/Footer";
import Topbar from "../Components/Guest/Mobile/Topbar";

const GuestMobileLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-50 text-neutral-800">
      <Topbar />
      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default GuestMobileLayout;
