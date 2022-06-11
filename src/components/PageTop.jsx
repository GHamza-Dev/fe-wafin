const PageTop = ({ h2, p }) => {
  return (
    <div className="text-center mt-7">
      <h2 className=" font-semibold text-darken text-xl">{h2}</h2>
      <p className="font-normal text-lg mt-2">{p}</p>
    </div>
  );
};

export default PageTop;
