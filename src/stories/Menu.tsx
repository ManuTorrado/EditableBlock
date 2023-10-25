import React, { useState } from "react";
import Components from "./defaultComponents";
import { Callback } from "./EditableBlock";

interface Props {
  children?: React.ReactNode;
  isVisible: boolean;
  ref?: React.RefObject<HTMLInputElement>;
  onClose: (Callback) => void;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const Menu = ({ children, isVisible = false, onClose, onClick }: Props) => {
  const menuStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    zIndex: 1000,
    backgroundColor: "white",
  };

  const handleClick = (component) => {
    onClick(component);
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
              {Components.map((component, key) => (
                <div
                  onClick={() => {
                    handleClick(component);
                  }}
                  className={"componentButton"}
                  key={key}
                >
                  <h2>{component.name}</h2>
                  {component.description}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
