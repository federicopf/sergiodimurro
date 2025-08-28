import GuestDesktopLayout from "../../../../Layouts/Guest/Desktop/GuestDesktopLayout";
import HomeContent from "../../Shared/Contents/HomeContent";

export default function HomeDesktop({ data }) {
  return (
    <GuestDesktopLayout>
      <HomeContent data={data} />
    </GuestDesktopLayout>
  );
}
