// RootLayout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Heading from "../components/Heading/Heading";

const RootLayout = () => {
  return (
    <>
      <Heading />
      <Outlet />
    </>
  );
};

export default RootLayout;
