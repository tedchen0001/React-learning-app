import { render } from "@testing-library/react";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

const NavbarText = (props) => {
  const setName = props.setNavName;

  return (
    <div className="AppNavbar">
      {props.setNavName ? <FontAwesomeIcon icon={faChartLine} /> : ""}
      {props.setNavName}
    </div>
  );
};

export default NavbarText;
