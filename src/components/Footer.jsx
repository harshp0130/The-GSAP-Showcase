import { FaLinkedin , FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const socialLinks = [
  { href: "https://www.linkedin.com/in/harshp0130/", icon: <FaLinkedin /> },
  { href: "mailto:harshp0130@gmail.com", icon: <SiGmail /> },
  { href: "https://github.com/harshp0130", icon: <FaGithub /> },
  
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©Made with ❤️ by Harsh Patel
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
  href="mailto:harshp0130@gmail.com" // Points to email
  className="text-center text-sm font-light hover:underline md:text-right"
>
  Please Hire Me!
</a>
      </div>
    </footer>
  );
};

export default Footer;
