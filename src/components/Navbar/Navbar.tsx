// import React from "react";

const NavLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "PROJECTS",
    link: "/#project",
  },
  {
    id: 3,
    name: "ABOUT",
    link: "/#about",
  },
  //   {
  //     id: 4,
  //     name: "CONTACT",
  //     link: "/#contact",
  //   },
];

export default function Navbar() {
  return (
    <div className="shadow-md w-full dark:bg-black dark:text-white">
      <div className="container py-2 sm:py-0">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-3xl font-bold">Portfolio</span>
          </div>
          <div className="hidden sm:block">
            <ul className="flex items-center gap-6">
              {NavLinks.map(link => (
                <li key={link.id}>
                  <a className="inline-block  font-medium py-3 hover:text-primary transition-all duration-400" href={link.link}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
