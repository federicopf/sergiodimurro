import { useDeviceType } from "../../Hooks/useDeviceType";
import AboutMobile from "../../Components/Guest/Mobile/AboutMobile";
import AboutDesktop from "../../Components/Guest/Desktop/AboutDesktop";

export default function About({ contact }) {
  const { isMobile } = useDeviceType();

  return isMobile ? <AboutMobile contact={contact} /> : <AboutDesktop contact={contact} />;
}
