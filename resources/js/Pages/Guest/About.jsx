import { useDeviceType } from "../../Hooks/useDeviceType";
import AboutMobile from "../../Components/Guest/Mobile/AboutMobile";
import AboutDesktop from "../../Components/Guest/Desktop/AboutDesktop";

export default function About({ data }) {
  const { isMobile } = useDeviceType();

  return isMobile ? <AboutMobile data={data} /> : <AboutDesktop data={data} />;
}
