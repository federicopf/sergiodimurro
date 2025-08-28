import GuestMobileLayout from "../../../Layouts/Guest/Mobile/GuestMobileLayout";
import AboutContent from "../Shared/AboutContent";

export default function AboutMobile({ contact }) {
  return (
    <GuestMobileLayout>
      <AboutContent contact={contact} />
    </GuestMobileLayout>
  );
}
