import Image from '../UI/Image';

const Welcome = () => {
  return (
    <div className="bg-darkOne">
      <div className="container mx-auto mb-20 bg-darkOne">
        <h1 className="w-full text-5xl text-white font-bold leading-tight text-center my-14 ">
          Lorem ipsum
        </h1>
        <div className="flex flex-col items-center my-10 mx-20 xl:flex-row ">
          <div className="flex flex-col m-5 w-full text-center xl:w-1/2 lg:text-left">
            <h1 className="text-4xl font-bold mb-5 text-white">Lorem ipsum</h1>
            <p className="text-base text-white">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. At vero eos et accusamus et
              iusto odio dignissimos ducimus qui blanditiis praesentium
              voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi sint occaecati cupiditate non provident, similique sunt
              in culpa qui officia deserunt mollitia animi, id est laborum et
              dolorum fuga.
            </p>
          </div>

          <div className="flex flex-1 justify-center">
            <Image
              className="w-auto rounded-3xl mt-10 hidden sm:block"
              src="moon-landing.png"
              width="416px"
              height="416px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
