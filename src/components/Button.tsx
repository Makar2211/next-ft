"use client";

interface ButtonProps {
  text: string;
  style?: string;
}

const Button = ({ ...props }: ButtonProps) => {
  const { text, style } = props;
  return (
    <button
      onClick={() => console.log("it is button component")}
      className={`text-white ${style} `}
    >
      {text}
    </button>
  );
};

export default Button;
