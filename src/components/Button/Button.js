const Button = (props) => {
  return (
    <button className="border-2 border-red-500 text-red-500 px-8 rounded-md text-lg" onClick={props.handleClick}>
      {props.text}
    </button>
  );
};

export default Button;
