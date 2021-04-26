import Image from '../UI/Image';

const Founder = () => {
  return (
    <div className="container mx-auto mb-20">
      <h1 className="w-full text-5xl font-bold leading-tight text-center my-14 ">
        Hello
      </h1>
      <div className="flex flex-col items-center my-10 mx-20 xl:flex-row ">
        <div className="flex flex-col m-5 w-full text-center xl:w-1/2 lg:text-left">
          <h1 className="text-4xl font-bold mb-5">Name</h1>
          <p className="text-base">subtitle</p>
        </div>
        <div className="flex flex-1 justify-center">
          <Image
            className="w-auto rounded-3xl mt-10 hidden sm:block"
            src="logo192.png"
            width="416px"
            height="416px"
          />
        </div>
      </div>
    </div>
  );
};

export default Founder;
