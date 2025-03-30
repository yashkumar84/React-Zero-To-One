import { useCounter } from "../zustand/counterStore";

const Message = () => {
  const count = useCounter((state) => state.count);
  return <div>{count}</div>;
};

export default Message;
