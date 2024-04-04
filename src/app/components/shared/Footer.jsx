import Image from "next/image";
import Logo from "../../../../public/assets/logo.svg";
import {
  PiMediumLogoFill,
  PiDribbbleLogo,
  PiInstagramLogo,
  PiTwitterLogo,
} from "react-icons/pi";

const Footer = () => {
  return (
    <section className="bg-[#f5f5f5] md:py-16 md:px-20 py-4 px-4 flex flex-col space-y-4">
      <div className="flex justify-between items-center">
        <Image src={Logo} />
        <ul className="flex text-[24px] space-x-2">
          <li>
            <PiMediumLogoFill />
          </li>
          <li>
            <PiDribbbleLogo />
          </li>
          <li>
            <PiInstagramLogo />
          </li>
          <li>
            <PiTwitterLogo />
          </li>
        </ul>
      </div>
      <ul className="flex space-x-4 text-xl font-medium">
        <li>Home</li>
        <li>About us</li>
        <li>Pricing</li>
      </ul>
      <h1>Worked by Gibran Khalilullah</h1>
    </section>
  );
};

export default Footer;
