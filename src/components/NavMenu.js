import React, { useState } from "react";
import "../global.css";
import Menuitems from "./Menuitems";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

function NavMenu() {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };
  return (
    <div className="flex w-full p-4 justify-center items-center fixed z-10">
      <nav>
        <div className="absolute right-6 md:hidden top-6 scale-110 opacity-80 hover:opacity-100">
          <MenuOutlinedIcon
            onClick={showMenu}
            className="scale-150 cursor-pointer"
          />
        </div>
        <div className="bg-black/30 backdrop-blur-lg rounded-lg justify-center items-center">
          <ul className="hidden md:flex gap-8 p-5 text-white justify-center">
            <li className="ease-in duration-300 opacity-60 hover:opacity-100">
              <a href="#home">HOME</a>
            </li>
            <li className="ease-in duration-300 opacity-60 hover:opacity-100">
              <a href="#about">ABOUT</a>
            </li>
            <li className="ease-in duration-300 opacity-60 hover:opacity-100">
              <a href="#projects">PROJECTS</a>
            </li>
            {/* <li className="ease-in duration-300 opacity-60 hover:opacity-100">
              CONTACT
            </li> */}
          </ul>
        </div>

        <Menuitems showMenu={showMenu} active={active} />
      </nav>
    </div>
  );
}

export default NavMenu;
