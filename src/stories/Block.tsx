import React, { useState } from "react";

import { block } from "./EditableBlock";
import Menu from "./Menu";
import "./defaultStyles.css";
import MenuButton from "./MenuButton";

export const Block = (props: block) => {
  const {
    content = <i>{"Write here"}</i>,
    handleAdd,
    type,
    draggable = true,
    id,
    editable = true,
    onDragStart,
    onDragEnter,
    OnDragEnd,
    onDragOver,
  } = props;

  const [isDraggable, setDraggable] = useState(draggable);
  const [isMenuVisible, setMenuVisible] = useState<boolean>(false);
  const [isHovered, setHover] = useState<boolean>(false);

  const onHover = () => {
    setHover(true);
  };
  const onLeftHover = () => {
    setHover(false);
  };

  const handleAddButton = () => {
    setMenuVisible(true);
  };

  const pickOption = () => {
    handleAdd();
    closeMenu();
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeftHover}
      onDragOver={onDragOver}
      onDragEnd={OnDragEnd}
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      draggable={isDraggable}
    >
      <div className="dropdown">
        <button
          style={{ opacity: isHovered ? 1 : 0 }}
          className="addItemButton"
          onClick={handleAddButton}
        >
          <b>Drag</b>
        </button>

        <button
          style={{ opacity: isHovered ? 1 : 0 }}
          className="addItemButton"
          onClick={handleAddButton}
        >
          <b>+</b>
        </button>

        <Menu onClose={closeMenu} isVisible={isMenuVisible}>
          <MenuButton onClick={pickOption}>H1</MenuButton>
          <MenuButton onClick={pickOption}>H1</MenuButton>
          <MenuButton onClick={pickOption}>H1</MenuButton>
          <MenuButton onClick={pickOption}>H1</MenuButton>
        </Menu>
      </div>
      <div id={id} className={"block"}>
        <i>Text</i>
      </div>
    </div>
  );
};
