import React from "react";
import { v4 as uuidv4 } from "uuid";
import { block } from "./EditableBlock";

export const Block = (props: block) => {
  const id = uuidv4();

  const handleClick = () => {
    props.handleAdd({});
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
      id={id}
    >
      <button onClick={handleClick}>+</button>
      <div
        style={{
          flexGrow: 1,
          border: "1px solid black",
        }}
        contentEditable
      >
        {id}
      </div>
    </div>
  );
};
