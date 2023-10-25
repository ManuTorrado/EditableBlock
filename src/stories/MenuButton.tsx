import React from "react";

interface Props {
  onClick: () => void;
  children: React.ReactNode;
}

const MenuButton = ({ onClick, children }: Props) => {
  return (
    <div onClick={onClick} className="MenuButton">
      {children}
    </div>
  );
};

export default MenuButton;
