import { useDeviceType } from "../../Hooks/useDeviceType";
import AboutMobile from "../../Components/Guest/Mobile/ContentWrappers/AboutContentWrapper";
import AboutDesktop from "../../Components/Guest/Desktop/ContentWrappers/AboutContentWrapper";

export default function About({ data }) {
  const { isMobile } = useDeviceType();

  return isMobile ? <AboutMobile data={data} /> : <AboutDesktop data={data} />;
}
