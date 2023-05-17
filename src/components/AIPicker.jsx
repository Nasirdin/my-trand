import React from "react";
import log from "../../src/assets/best.svg";
import logs from "../../src/assets/shirts.svg";
import wogs from "../../src/assets/woman.svg";
import wo from "../../src/assets/sh.svg";
import { Link } from "react-router-dom";

const AIPicker = () => {
  return (
    <>
      <Link to="/">
        <img src={log} alt="logo" />
      </Link>
      <Link to="/sasuke">
        <img src={log} alt="logo" />
      </Link>
      <Link to="/blue">
        <img src={logs} alt="logo" />
      </Link>
      <Link to="/woman">
        <img src={wogs} alt="logo" />
      </Link>
      <Link to="/minus">
        <img src={wo} alt="logo" />
      </Link>
    </>
  );
};

export default AIPicker;
