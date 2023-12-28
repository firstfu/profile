// import React from "react";

import { NavLinks } from "../Navbar/Navbar";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="dark:bg-black dark:text-white pt-10 text-white">
      <nav className="container">
        <ul className="flex items-center justify-center gap-6">
          {NavLinks.map(link => {
            return (
              <li className="" key={link.id}>
                <a href={link.link}>{link.name}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      {/* Footer icons */}
      <section className="bg-dark container">
        <div className="mt-10 p-6 flex items-center justify-between gap-6">
          <h1 className="text-3xl font-bold">Portfolio</h1>
          <div className="flex gap-6">
            <FaFacebook className="text-2xl text-white/60 hover:text-primary cursor-pointer duration-300" />
            <FaInstagram className="text-2xl text-white/60 hover:text-primary cursor-pointer duration-300" />
            <FaYoutube className="text-2xl text-white/60 hover:text-primary cursor-pointer duration-300" />
          </div>
          <div className="hidden sm:block "> Demo Test!</div>
        </div>
      </section>
    </div>
  );
}
