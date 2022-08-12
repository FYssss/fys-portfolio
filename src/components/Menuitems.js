import React from "react";
import { Close } from "@mui/icons-material";

function Menuitems({ showMenu, active }) {
  return (
    <div className="">
      <ul
        className={
          active
            ? " text-white flex-col flex items-center fixed inset-0 left-1/4 uppercase bg-black/40 backdrop-blur-lg gap-8 justify-center p-8 md:hidden"
            : "hidden"
        }
      >
        <Close
          onClick={showMenu}
          className="text-white p-1 cursor-pointer scale-150 bg-white/10 rounded-3xl opacity-80 hover:opacity-100"
        />
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
  );
}

export default Menuitems;
