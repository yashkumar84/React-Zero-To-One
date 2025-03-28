import { useState } from "react";
import { CounterContext } from "../context/CounterContext";
import Message from "../components/Message";
import Button from "../components/Button";

const HomePage = () => {
  const [count, setCount] = useState<number>(0);

  const inc = () => {
    setCount(count + 1);
  };

  const dec = () => {
    setCount(count - 1);
  };
  return (
    <>
      <CounterContext.Provider value={{ count, dec, inc }}>
        <div>
          <Message />
          <Button text="+" />
          <Button text="-" />
        </div>
      </CounterContext.Provider>
    </>
  );
};

export default HomePage;
