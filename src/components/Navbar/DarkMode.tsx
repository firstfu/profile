/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

export default function DarkMode() {
  const [theme, setTheme] = useState(window.localStorage.getItem("theme") ? window.localStorage.getItem("theme") : "light");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const element: any = document?.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element?.classList?.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element?.classList?.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div>
      {theme === "dark" ? (
        <BiSolidSun
          className="cursor-pointer text-2xl"
          onClick={() => {
            setTheme("light");
            console.log(localStorage.getItem("theme"));
          }}
        />
      ) : (
        <BiSolidMoon
          className="cursor-pointer text-2xl"
          onClick={() => {
            setTheme("dark");
            console.log(localStorage.getItem("theme"));
          }}
        />
      )}
    </div>
  );
}
