import { useDeviceType } from "../../Hooks/useDeviceType";
import HomeMobile from "../../Components/Guest/Mobile/HomeMobile";
import HomeDesktop from "../../Components/Guest/Desktop/HomeDesktop";

export default function Home({ data }) {
  const { isMobile } = useDeviceType();

  return isMobile ? <HomeMobile data={data} /> : <HomeDesktop data={data} />;
}
