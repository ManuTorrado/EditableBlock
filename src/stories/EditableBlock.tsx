import React, { useEffect, useRef, useState } from "react";
import { Block } from "./Block";
import { v4 as uuidv4 } from "uuid";

type Callback = (error: Error | null, data?: any) => void;

const gridSystem: React.CSSProperties = {
  display: "grid",
  gridTemplateRows: " auto",
  gridTemplateColumns: " 50px 5fr",
};

export interface block {
  handleAdd: (Callback) => void;
  type?: string;
  content?: string | React.ReactNode;
  id?: string;
  line: number;
  draggable?: boolean;
  onDragStart?: React.DragEventHandler;
  onDragEnter?: React.DragEventHandler;
  OnDragEnd?: React.DragEventHandler;
  onDragOver?: React.DragEventHandler;
}

interface Props {
  style?: React.CSSProperties;
  enumerated?: boolean;
  blocks: Array<block>;
}

export const EditableBlock = ({ blocks = [], enumerated = true }: Props) => {
  const [blocksState, SetBlocks] = useState<Array<block>>(blocks);
  const [isEnumerated, setEnumerated] = useState(enumerated);

  const draggedItem = useRef<number>(0);
  const draggedOverItem = useRef<number>(0);

  const handleAdd = (data: block) => {
    SetBlocks([...blocksState, data]);
  };

  const sortElements = () => {
    const blocksClone = [...blocksState];
    const fixClone = blocksClone[draggedItem.current];
    blocksClone[draggedItem.current] = blocksClone[draggedOverItem.current];
    blocksClone[draggedOverItem.current] = fixClone;
    SetBlocks(blocksClone);
  };

  useEffect(() => {
    if (blocksState.length == 0) {
      SetBlocks([
        {
          id: uuidv4(),
          line: 0,
          handleAdd: handleAdd,
        },
      ]);
    }
  });

  useEffect(() => {
    console.log(blocksState);
  }, [blocksState]);

  return (
    <div>
      <div
        style={{
          ...gridSystem,
        }}
      >
        {blocksState.map((block: block, key: number) => (
          <>
            <div
              style={{
                backgroundColor: "black",
                color: "white",
                textAlign: "center",
              }}
            >
              {isEnumerated && <a style={{ textAlign: "center" }}>{key}</a>}
            </div>

            <Block
              draggable
              onDragStart={() => (draggedItem.current = key)}
              onDragEnter={() => (draggedOverItem.current = key)}
              OnDragEnd={sortElements}
              onDragOver={(e) => e.preventDefault()}
              line={key}
              key={key}
              id={block.id}
              handleAdd={handleAdd}
            />
          </>
        ))}
      </div>
    </div>
  );
};
