import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaFacebook, FaLinkedinIn } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "https://github.com" },
    { icon: <FaLinkedinIn />, path: "https://linkedin.com" },
    { icon: <FaYoutube />, path: "https://youtube.com" },
    { icon: <FaFacebook />, path: "https://facebook.com" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            );
        })}
    </div>
  );
};

export default Social;
