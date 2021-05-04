import { Link } from 'react-router-dom';

import Image from './Image';

const Card = ({ title, active, imageUrl, date, to, details, isRocket }) => {
  return (
    <div
      className={`bg-darkTwo flex flex-col cursor-pointer shadow-lg rounded-md w-80 mx-16 mt-16 transition duration-2000  hover:shadow-2xl overflow-hidden`}
      style={{
        height: '480px',
      }}
    >
      <Link to={to ? to : '#'}>
        <Image
          className={`m-auto h-72 ${
            isRocket ? 'object-cover' : 'object-scale-down'
          }`}
          src={imageUrl}
          width="320px"
          height="288px"
        />

        <div className="p-5">
          <div className="flex items-center justify-between">
            <div className="font-bold text-lg " width="200">
              {title}
            </div>

            <div className="relative inline-flex rounded-md shadow-sm ">
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                  active ? 'bg-mainTwo' : 'bg-mainOne'
                } opacity-75`}
              />

              <span
                className={`relative inline-flex rounded-full h-3 w-3 ${
                  active ? 'bg-mainTwo' : 'bg-mainOne'
                }`}
              />
            </div>
          </div>

          <div className="flex flex-1">
            <span className="text-white">
              {date && new Date(date).toLocaleDateString('en-GB')}
            </span>
          </div>

          <div className="flex flex-1 mt-3">
            <div className="text-white opacity-75" width="250">
              {details ? details : 'No Data'}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
