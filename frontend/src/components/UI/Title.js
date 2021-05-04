const Title = ({ message }) => {
  return (
    <div className="container mx-auto my-auto bg-darkOne">
      <h1 className="w-full text-5xl font-bold leading-tight text-center mt-14 text-white">
        {message}
      </h1>
    </div>
  );
};

export default Title;
