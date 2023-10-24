import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { block } from "./EditableBlock";

export const Block = ({
  line,
  content,
  handleAdd,
  type,
  draggable = true,
  id,
  onDragStart,
  onDragEnter,
  OnDragEnd,
  onDragOver,
}: block) => {
  const [isDraggable, setDraggable] = useState(draggable);
  const [isEditable, setEditable] = useState(false);
  const [numberLine, setNumberLine] = useState(line);
  const [isHovered, setHovered] = useState(false);

  const handleAddButton = () => {
    handleAdd({ id: uuidv4() });
  };

  return (
    <div
      onDragOver={onDragOver}
      onDragEnd={OnDragEnd}
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      draggable={isDraggable}
      style={{
        display: "flex",
        cursor: "pointer",
        flexGrow: 1,

        border: isHovered ? "1px blue solid" : "none",
      }}
      id={id}
    >
      <button onClick={handleAddButton}>+</button>
      <div
        style={{
          flexGrow: 1,
          flexShrink: 0,

          border: "1px solid black",
          opacity: 1,
        }}
        contentEditable={isEditable}
      >
        {id}
      </div>
    </div>
  );
};
