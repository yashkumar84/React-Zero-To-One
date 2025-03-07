const InputBox = ({
  text,
  name,
  fn,
}: {
  text: string;
  name: string;
  fn: (text: string) => void;
}) => {
  return (
    <div>
      <div>
        <label htmlFor="">{text}</label>
      </div>
      <input type="text" value={name} onChange={(e) => fn(e.target.value)} />
    </div>
  );
};

export default InputBox;
