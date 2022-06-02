const Button = ({ text, classes, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`btn-primary bg-darken hover:bg-primary rounded-md ${classes}`}
    >
      {text}
    </button>
  );
};

export default Button;
