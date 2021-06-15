import React, { useEffect } from "react";

import Links from "./navLinks";

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 700) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  return (
    <header>
      <nav className={navbarClasses.join(" ")}>
        <div className="nav-links m-auto">
          <Links />
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
