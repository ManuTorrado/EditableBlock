import React from "react";
import { v4 as uuidv4 } from "uuid";

export const Block = () => {
  return (
    <div contentEditable id={uuidv4()}>
      {uuidv4()}
    </div>
  );
};
