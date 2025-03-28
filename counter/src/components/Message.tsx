import useCounter from "../hooks/Hook";

const Message = () => {
  const { count } = useCounter();
  return <div>{count}</div>;
};

export default Message;
