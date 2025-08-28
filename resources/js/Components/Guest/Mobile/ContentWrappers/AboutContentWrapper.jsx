import GuestMobileLayout from "../../../../Layouts/Guest/Mobile/GuestMobileLayout";
import AboutContent from "../../Shared/Contents/AboutContent";

export default function AboutMobile({ data }) {
  return (
    <GuestMobileLayout>
      <AboutContent data={data} />
    </GuestMobileLayout>
  );
}
