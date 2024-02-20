import React, { useState } from "react";
import { Link, useNAvigate, useNavigate } from "react-router-dom";

import { CustomButton } from "./";
import { logo, menu, search, thirdweb } from "../assets";
import { navlinks } from "../constants";

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");
  
  
  return <div>Navbar TEST</div>;
};

export default Navbar;
