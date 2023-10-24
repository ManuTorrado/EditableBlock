import React from "react";

import { Callback } from "./EditableBlock";

interface Props {
  children?: React.ReactNode;
  isVisible: boolean;
  ref?: React.RefObject<HTMLInputElement>;
  onClose: (Callback) => void;
}

const Menu = ({ children, isVisible = false, onClose }: Props) => {
  const menuStyle: React.CSSProperties = {
    position: "fixed",
    top: " 100%",
    left: 0,
    width: "100%",
    height: " 100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    backgroundColor: "whitesmoke",
  };

  return (
    <>
      {isVisible && (
        <div style={{ ...menuStyle }}>
          <button onClick={onClose}>x</button>
          {children}
        </div>
      )}
    </>
  );
};

export default Menu;
