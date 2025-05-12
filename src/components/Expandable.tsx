import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const Expandable = ({ children, maxChars = 100 }: Props) => {
  const [isExapand, setExpand] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;

  const text = isExapand ? children : children.substring(0, maxChars);
  return (
    <p>
      {text}...
      <button onClick={() => setExpand(!isExapand)}>
        {isExapand ? "Less" : "More"}
      </button>
    </p>
  );
};

export default Expandable;
