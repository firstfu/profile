// import React from "react";

import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "UI Design",
    icon: <FaCameraRetro className="text-5xl text-primary group-hover:text-white duration-300" />,
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
  {
    name: "Product Design",
    icon: <GiNotebook className="text-5xl text-primary group-hover:text-white duration-300" />,
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
  {
    name: "Branding",
    icon: <SlNote className="text-5xl text-primary group-hover:text-white duration-300" />,
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
];

export default function Skills() {
  return (
    <div className="dark:bg-black  dark:text-white py-14">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skillsData.map(skill => {
            return (
              <div className="group space-y-3 bg-dark p-4 hover:bg-primary duration-300 text-white">
                <div>{skill.icon}</div>
                <h1 className="text-2xl font-bold">{skill.name}</h1>
                <div>{skill.description}</div>
                <a className="inline-block text-lg font-semibold py-3 group-hover:text-white duration-300 text-primary" href={skill.link}>
                  {"  "}
                  Learn More
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
