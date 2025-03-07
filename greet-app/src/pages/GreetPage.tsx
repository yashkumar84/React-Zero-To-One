import { useState } from "react";
import Button from "../components/Button";
import InputBox from "../components/InputBox";

const GreetPage = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  
  function changeLastName(text: string) {
    setLastName(text);
  }

  function changeFirstName(text: string) {
    setFirstName(text);
  }

  function evaluateDate(): string {
    const hour = new Date().getHours();
    console.log(hour);
    if (hour < 12) {
      return "Good Morning";
    } else if (hour > 12 && hour < 17) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  }

  const fn = () => {
    if (firstName && lastName) setIsSubmit(true);
  };

  return (
    <>
      <div>
        <h1>GreetPage</h1>
        <InputBox text="First Name" name={firstName} fn={changeFirstName} />
        <InputBox text="Last Name" name={lastName} fn={changeLastName} />
        <Button fn={fn} />
      </div>
      {isSubmit ? (
        <h1>
          {evaluateDate()} {firstName} {lastName}
        </h1>
      ) : (
        ""
      )}
    </>
  );
};

export default GreetPage;
