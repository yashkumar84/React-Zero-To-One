import useCounter from "../hooks/Hook";

const Button = ({ text }: { text: string }) => {
  const { inc, dec } = useCounter();
  return <button onClick={text === "+" ? inc : dec}>{text}</button>;
};

export default Button;
