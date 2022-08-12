import React from "react";
// import TypeWriter from "react-typewriter";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

function Header({ data }) {
  if (data) {
    var name = data.name;
  }
  return (
    <section id="home">
      <div className="flex justify-center items-center flex-col space-y-60 bg-bg-img w-full h-screen bg-cover bg-center">
        <h1 className="text-4xl font-bold text-white ">
          <h1>Hello</h1>
          <span>I'm {name}</span>
        </h1>
        <div className="flex absolute animate-bounce bottom-5 text-white">
          <a href="#about">
            <ExpandMoreOutlinedIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Header;
