import React, { useState } from "react";

import { Callback } from "./EditableBlock";

interface Props {
  children?: React.ReactNode;
  isVisible: boolean;
  ref?: React.RefObject<HTMLInputElement>;
  onClose: (Callback) => void;
}

const Menu = ({ children, isVisible = false, onClose }: Props) => {
  const menuStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    zIndex: 1000,
    backgroundColor: "whitesmoke",
  };

  return (
    <>
      {isVisible && (
        <div className={"dropdown-content"} style={{ ...menuStyle }}>
          <div style={{ width: "100%" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>Components</p>
                <button
                  style={{
                    textAlign: "right",
                    cursor: "pointer",
                    float: "right",
                    textDecoration: "none",
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                  onClick={onClose}
                >
                  x
                </button>
              </div>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
