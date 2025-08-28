import GuestMobileLayout from "../../../Layouts/Guest/Mobile/GuestMobileLayout";
import AboutContent from "../Shared/AboutContent";

export default function AboutMobile({ data }) {
  return (
    <GuestMobileLayout>
      <AboutContent data={data} />
    </GuestMobileLayout>
  );
}
