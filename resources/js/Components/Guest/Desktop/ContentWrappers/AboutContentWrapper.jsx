import GuestDesktopLayout from "../../../../Layouts/Guest/Desktop/GuestDesktopLayout";
import AboutContent from "../../Shared/Contents/AboutContent";

export default function AboutDesktop({ data }) {
  return (
    <GuestDesktopLayout>
      <AboutContent data={data} />
    </GuestDesktopLayout>
  );
}
