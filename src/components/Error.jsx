import React from "react";

function Error({ children }) {
  return (
    <div
      style={{
        minWidth: "64px",
        marginTop: "16px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Helvetica",
        fontSize: "14px",
          fontWeight: "bold",
        letterSpacing: "0.24px",
        textTransform: "uppercase",
        textAlign: "center",
        color: "#b50505",
        // backgroundColor: "#b50505",
        // boxShadow: "1px 1px 2px #999",
        borderRadius: "4px",
      }}
    >
      {children}
    </div>
  );
}

export default Error;
