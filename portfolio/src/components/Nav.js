import React from "react";
import { useColorblind } from "../hooks/useColorblind";

const Navbar = () => {
  const [colorblind, setColorblind] = useColorblind(false);
  const toggleSight = (e) => {
    e.preventDefault();
    setColorblind(!colorblind);
  };
  return (
    <nav className="navbar">
      <div className="sight-toggle">
        <div
          onClick={toggleSight}
          className={colorblind ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
