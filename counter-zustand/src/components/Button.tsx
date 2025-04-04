import { useCounter } from "../zustand/counterStore";

const Button = ({ text }: { text: string }) => {
  const { inc, dec } = useCounter();

  return <button onClick={text === "+" ? inc : dec}>{text}</button>;
};

export default Button;
