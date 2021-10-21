import React, {useState} from "react";

const HeaderDefault = (props) => {

    const [inputColor, setInputColor] = useState("#efefef");

    const _stylesHeaderSearch = {
      
        buscar: {
          display: "flex",
          alignItems: "center",
          justifyContent: " space-between",
          width: "100%",
          height: '40px',

          input: {
            display: "flex",
            width: "100%",
            backgroundColor: `${inputColor}`,
            borderStyle: "none",
            borderRadius: "30px",
            padding: "20px",
            paddingLeft: "40px",
            fontSize: "16px",
          },
      },
      
        btn: {
          backgroundColor: "transparent",
          border: "none",
          height: "100%",
          display: "flex",
          alignItems: "center",
        },
      
        icon: {
          position: 'absolute',
          padding: '15px',
          width: '15px',
          height: '15px',
      },
      };
    
  return (
    <div  style={_stylesHeaderSearch.buscar}>
      <div style={_stylesHeaderSearch.btn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
          style={_stylesHeaderSearch.icon}
        >
          <path
            fill="gray"
            d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
          />
        </svg>
      </div>

      <input
        type="text"
        placeholder="Buscar"
        style={_stylesHeaderSearch.buscar.input}
        onMouseEnter={() => {
            setInputColor("#dddddd")
        }}
        onMouseLeave={() => {
            setInputColor("#efefef")
        }}
      />
    </div>
  );
};



export default HeaderDefault;
