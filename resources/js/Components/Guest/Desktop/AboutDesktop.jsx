import GuestDesktopLayout from "../../../Layouts/Guest/Desktop/GuestDesktopLayout";
import AboutContent from "../Shared/AboutContent";

export default function AboutDesktop({ contact }) {
  return (
    <GuestDesktopLayout>
      <AboutContent contact={contact} />
    </GuestDesktopLayout>
  );
}
