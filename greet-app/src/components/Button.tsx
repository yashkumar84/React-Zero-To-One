const Button = (props: { fn: () => void }) => {
  return (
    <div>
      <button className="btn btn-submit" onClick={props.fn}>
        Submit
      </button>
    </div>
  );
};

export default Button;
