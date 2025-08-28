import GuestMobileLayout from "../../../../Layouts/Guest/Mobile/GuestMobileLayout";
import HomeContent from "../../Shared/Contents/HomeContent";

export default function HomeMobile({ data }) {
  return (
    <GuestMobileLayout>
      <HomeContent data={data} />
    </GuestMobileLayout>
  );
}
