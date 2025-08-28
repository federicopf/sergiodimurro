import GuestDesktopLayout from "../../../Layouts/Guest/Desktop/GuestDesktopLayout";
import AboutContent from "../Shared/AboutContent";

export default function AboutDesktop({ data }) {
  return (
    <GuestDesktopLayout>
      <AboutContent data={data} />
    </GuestDesktopLayout>
  );
}
