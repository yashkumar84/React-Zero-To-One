import Button from "../components/Button";
import Message from "../components/Message";

const CounterPage = () => {
  return (
    <div>
      <Message />
      <Button text="+" />
      <Button text="-" />
    </div>
  );
};

export default CounterPage;
