const Title = ({ message }) => {
  return (
    <div className="container mx-auto my-auto bg-white dark:bg-darkOne">
      <h1 className="w-full text-5xl font-bold leading-tight text-center mt-14 text-black dark:text-white">
        {message}
      </h1>
    </div>
  );
};

export default Title;
