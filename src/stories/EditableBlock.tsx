import React, { useEffect, useRef, useState } from "react";
import { Block } from "./Block";
import { v4 as uuidv4 } from "uuid";

import "./defaultStyles.css";
export type Callback = (error?: Error | null, data?: any) => void;

export interface block {
  handleAdd: Callback;
  type?: string;
  content?: string | React.ReactNode;
  id?: string;
  draggable?: boolean;
  editable?: boolean;
  onDragStart?: React.DragEventHandler;
  onDragEnter?: React.DragEventHandler;
  OnDragEnd?: React.DragEventHandler;
  onDragOver?: React.DragEventHandler;
  key?: React.Key;
}

interface Props {
  style?: React.CSSProperties;
  enumerated?: boolean;
  blocks: Array<block>;
  popUpMenu?: React.ReactNode;
}

export const EditableBlock = ({ blocks = [], enumerated = false }: Props) => {
  const [blocksState, SetBlocks] = useState<Array<block>>(blocks);

  const gridSystem: React.CSSProperties = {
    display: "grid",
    gridTemplateRows: "auto",
    gridTemplateColumns: enumerated ? "50px 5fr" : "5fr",
  };

  const draggedItem = useRef<number>(0);
  const draggedOverItem = useRef<number>(0);

  const sortElements = () => {
    const blocksClone = [...blocksState];
    const fixClone = blocksClone[draggedItem.current];
    blocksClone[draggedItem.current] = blocksClone[draggedOverItem.current];
    blocksClone[draggedOverItem.current] = fixClone;
    SetBlocks(blocksClone);
  };

  const handleAdd = () => {
    pickOption();
  };

  useEffect(() => {
    if (blocksState.length == 0) {
      SetBlocks([
        {
          id: uuidv4(),
          handleAdd: handleAdd,
          key: blocksState.length + 1,
        },
      ]);
    }
  }, []);

  useEffect(() => {
    console.log(blocksState);
  }, [blocksState]);

  const pickOption = () => {
    const data: block = {
      id: uuidv4(),
      handleAdd: handleAdd,
    };
    SetBlocks([...blocksState, data]);
  };

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          ...gridSystem,
        }}
      >
        {blocksState.map((block: block, key: number) => (
          <React.Fragment key={key}>
            {enumerated && (
              <div
                style={{
                  backgroundColor: "black",
                  color: "white",
                  textAlign: "center",
                }}
              >
                <a style={{ textAlign: "center" }}>{key}</a>
              </div>
            )}

            <Block
              content={block.content}
              draggable
              onDragStart={() => (draggedItem.current = key)}
              onDragEnter={() => (draggedOverItem.current = key)}
              OnDragEnd={sortElements}
              onDragOver={(e) => e.preventDefault()}
              key={key}
              id={block.id}
              handleAdd={handleAdd}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
