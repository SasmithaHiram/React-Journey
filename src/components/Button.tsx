interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onQty: () => void;
}

const Button = ({ children, color, onQty }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onQty}>
      {children}
    </button>
  );
};

export default Button;
