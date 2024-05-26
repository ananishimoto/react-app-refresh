interface ButtonProps {
  children: string;
  color?: "primary" | "secondary" | "info";
  onButtonClick: () => void;
}

const Button = ({
  children,
  onButtonClick,
  color = "primary",
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={"btn btn-" + color}
      onClick={onButtonClick}
    >
      {children}
    </button>
  );
};

export default Button;
