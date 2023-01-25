import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const links = [
    {
      id: 1,
      link: "home",
      title: "home",
    },
    {
      id: 2,
      link: "about",
      title: "about",
    },
    {
      id: 3,
      link: "portfolio",
      title: "projects",
    },
    {
      id: 4,
      link: "experience",
      title: "skills",
    },
    {
      id: 5,
      link: "contact",
      title: "contact",
    },
  ];

  const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="font-signature text-4xl">Vivek</h1>
      </div>
      <div className="w-300 pr-32">
        <ul className="hidden sm:flex">
          {links.map(({ id, link, title }) => (
            <li
              key={id}
              className="px-3 cursor-pointer font-medium capitalize text-gray-500 hover:scale-125 duration-200"
            >
              <Link to={link} smooth duration={500}>
                {title}
              </Link>
            </li>
          ))}
          <a
            href="./Vivek_Bhatt_Resume.pdf"
            className=" flex justify-between items-center w-full px-3 cursor-pointer font-medium capitalize text-gray-500 hover:scale-125 duration-200"
            download
            target="_blank"
            rel="noreferrer"
            onClick={()=> window.open(
              "https://drive.google.com/file/d/1rHk2KzpHpVtN-52b9X8IkXXXGNmBwqdj/view?usp=sharing"
            )}
          >
            Resume
          </a>
        </ul>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-3 z-10 text-gray-500 sm:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute left-0 top-0 w-full h-screen bg-gradient-to-b from-black to-gray-700">
          {links.map(({ id, link, title }) => (
            <li
              key={id}
              className="text-4xl px-4 py-4 cursor-pointer capitalize text-gray-400"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
          <a
            href="./Vivek_Bhatt_Resume.pdf"
            className="text-4xl px-4 py-4 cursor-pointer capitalize text-gray-400 "
            download
            target="_blank"
            rel="noreferrer"
            onClick={()=> window.open(
              "https://drive.google.com/file/d/1rHk2KzpHpVtN-52b9X8IkXXXGNmBwqdj/view?usp=sharing"
            )}
          >
            Resume
          </a>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
