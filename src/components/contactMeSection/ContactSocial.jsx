import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/shivam-raj01/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/Shivamraj10" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/poddar_raj_/" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
