const Button = ({ text, classes }) => {
  return (
    <button
      className={`btn-primary bg-darken hover:bg-primary rounded-md ${classes}`}
    >
      {text}
    </button>
  );
};

export default Button;
