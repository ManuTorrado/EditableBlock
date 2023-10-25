import React from "react";

export const H1Component = (props: { text?: string }) => {
  const { text = "default text" } = props;
  return (
    <h1 suppressContentEditableWarning contentEditable>
      {text}
    </h1>
  );
};

export const H2Component = (props: { text?: string }) => {
  const { text = "default text" } = props;
  return <h2 contentEditable>{text}</h2>;
};

export const PComponent = (props: { text?: string }) => {
  const { text = "default text" } = props;
  return <p contentEditable>{text}</p>;
};

const Components = [
  {
    name: "Heading 1",
    description: "Big header",
    component: <H1Component />,
  },
  {
    name: "Heading 2",
    description: "Medium header",
    component: <H2Component />,
  },
  {
    name: "Text",
    description: "Simple text",
    component: <PComponent />,
  },
];

export default Components;
