import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer({ data }) {
  if (data) {
    console.log("3333", data);
    var linkedinUrl = data.linkedin.url;
    var githubUrl = data.github.url;
  }
  return (
    <div>
      <div className="flex justify-center items-center h-20 text-white text-4xl gap-3 bg-neutral-900 mt-10">
        <a href={linkedinUrl}>
          <FaLinkedin className="ease-in duration-300 opacity-100 hover:opacity-60" />
        </a>
        <a href={githubUrl}>
          <FaGithub className="ease-in duration-300 opacity-100 hover:opacity-60" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
