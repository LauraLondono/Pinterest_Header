import React, { useState } from "react";

//componente derecho del Layout, contiene todas las opciones personales del usuario
const HeaderOptions = () => {
  const [notifBg, setNotifBg] = useState("white");
  const [msgBg, setMsgBg] = useState("white");
  const [userBg, setUserBg] = useState("white");
  const [adminBg, setAdminBg] = useState("white");

  const _stylesOptionsHeader = {
    options: {
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingRight: "20px",
    },

    btn: {
      height: "50px",
      width: "50px",
      borderRadius: "50%",
      color: "#767676",
      display: "flex",
      position: "relative",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      fontSize: "25px",
      margin: "1px",
      border: "none",
    },
    btn_notif: {
      backgroundColor: `${notifBg}`,
    },
    btn_msg: {
      backgroundColor: `${msgBg}`,
    },
    btn_user: {
      backgroundColor: `${userBg}`,
    },
    btn_admin: {
      cursor: "pointer",
      display: "flex",
      position: "relative",
      justifyContent: "center",
      alignItems: "center",
      height: "25px",
      width: "25px",
      borderRadius: "30px",
      color: "#767676",

      fontSize: "25px",
      backgroundColor: `${adminBg}`,
      border: "none",
    },

    svg: {
      position: "relative",
      width: "20px",
      height: "20px",
      padding: "6px",
      cursor: "pointer",
    },

    icon_admin: {
      cursor: "pointer",
      height: "15px",
      width: "15px",
    },
    profile_img: {
      height: "25px",
      width: "25px",
      cursor: "pointer",
      borderRadius: "50%",
    },
  };
  return (
    <div style={_stylesOptionsHeader.options}>
      <button
        style={{
          ..._stylesOptionsHeader.btn,
          ..._stylesOptionsHeader.btn_notif,
        }}
        onMouseEnter={() => {
          setNotifBg("#f0f0f0");
        }}
        onMouseLeave={() => {
          setNotifBg("white");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
          style={_stylesOptionsHeader.svg}
        >
          <path
            fill="gray"
            d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
          />
        </svg>
      </button>
      <button
        style={{
          ..._stylesOptionsHeader.btn,
          ..._stylesOptionsHeader.btn_msg,
        }}
        onMouseEnter={() => {
          setMsgBg("#f0f0f0");
        }}
        onMouseLeave={() => {
          setMsgBg("white");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
          style={_stylesOptionsHeader.svg}
        >
          <path
            fill="gray"
            d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zM128 272c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
          />
        </svg>
      </button>
      <button
        style={{
          ..._stylesOptionsHeader.btn,
          ..._stylesOptionsHeader.btn_user,
        }}
        onMouseEnter={() => {
          setUserBg("#f0f0f0");
        }}
        onMouseLeave={() => {
          setUserBg("white");
        }}
      >
        <img
          src="https://picsum.photos//45/45"
          alt="usr"
          style={_stylesOptionsHeader.profile_img}
        />
      </button>
      <button
        style={{ ..._stylesOptionsHeader.btn_admin }}
        onMouseEnter={() => {
          setAdminBg("#f0f0f0");
        }}
        onMouseLeave={() => {
          setAdminBg("white");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
          style={_stylesOptionsHeader.icon_admin}
        >
          <path
            fill="gray"
            d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default HeaderOptions;
