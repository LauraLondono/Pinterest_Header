import React from "react";
import HeaderHomeOptions from "../Header-Components/HeaderHomeOptions";
import HeaderSearch from "../Header-Components/HeaderSearch";
import HeaderOptions from "../Header-Components/HeaderOptions";

const HeaderLayout = () => {
  const _HeaderLayoutStyles = {
    HeaderLayout: {
      backgroundColor: "white",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      height: "75px",
      width: "100%",
      top: "0px",
      position: "fixed",
      zIndex: 1,
    },
  };

  return (
    <div style={_HeaderLayoutStyles.HeaderLayout}>
      <HeaderHomeOptions />
      <HeaderSearch />
      <HeaderOptions />
    </div>
  );
};

export default HeaderLayout;
