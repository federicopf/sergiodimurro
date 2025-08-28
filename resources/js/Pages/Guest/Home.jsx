import { useDeviceType } from "../../Hooks/useDeviceType";
import HomeMobile from "../../Components/Guest/Mobile/ContentWrappers/HomeContentWrapper";
import HomeDesktop from "../../Components/Guest/Desktop/ContentWrappers/HomeContentWrapper";

export default function Home({ data }) {
  const { isMobile } = useDeviceType();

  return isMobile ? <HomeMobile data={data} /> : <HomeDesktop data={data} />;
}
