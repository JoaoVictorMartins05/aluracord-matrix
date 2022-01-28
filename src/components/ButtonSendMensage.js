import React from "react";
import { Box, Button, Text, Image } from "@skynexui/components";
import appConfig from "../../config.json";

export function ButtonSendMensage(props) {
  //const [isOpen, setOpenState] = React.useState("");
  const divStyle = {
    borderRadius: "50%",
    padding: "0 3px 0 0",
    minWidth: "50px",
    minHeight: "50px",
    fontSize: "20px",
    marginBottom: "8px",
    lineHeight: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#70ff85",
    border: "1px solid",
    borderColor: "#70ff85",
    cursor: "pointer",

    ":hover": { color: "blue !important" },
    //borderColor: "#70c585",
    //color: "#70c585",
  };

  return (
    <Box
      styleSheet={{
        position: "relative",
        marginLeft: "8px",
      }}
    >
      <button
        className="btn"
        type="button"
        style={divStyle}
        onClick={() => props.sendMessage()}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#70c585";
          e.target.style.border = "#70c585";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "#70ff85";
        }}
      >
        ✔️
      </button>
    </Box>
  );
}
