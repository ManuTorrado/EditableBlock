import React, { useState } from "react";
import { Block } from "./Block";

type Callback = (error: Error | null, data: any) => void;

export interface block {
  handleAdd: (Callback) => void;
  type?: string;
  content?: string | React.ReactNode;
}

export const EditableBlock = () => {
  const [blocks, SetBlocks] = useState<Array<block>>([]);

  const handleAdd = (data: block) => {
    SetBlocks([...blocks, data]);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",

        border: "1px black dashed",
      }}
    >
      <Block handleAdd={handleAdd} />
      {blocks.map((block: block) => (
        <Block handleAdd={handleAdd} />
      ))}
    </div>
  );
};
