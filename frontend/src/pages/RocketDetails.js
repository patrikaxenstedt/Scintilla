import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import RocketsContext from '../contexts/RocketsContext';
import Rocket from '../components/Rockets/Rocket';
import Screen from '../components/UI/Screen';
import Footer from '../components/Footer/Foot';

// Creates Rocket with all data we want to fetch and display
// If more data is wanted, one must add this in here
const RocketDetails = () => {
  const { rocketId } = useParams();
  const { getRocket } = useContext(RocketsContext);
  const rocket = getRocket(rocketId);

  return (
    <Screen>
      <Rocket
        name={rocket?.rocket_name}
        active={rocket?.active}
        description={rocket?.description}
        country={rocket?.country}
        firstFlight={rocket?.first_flight}
        diameter={rocket?.diameter?.meters}
        height={rocket?.height?.meters}
        mass={rocket?.mass?.kg}
        cost_per_launch={rocket?.cost_per_launch}
        imageUrl={rocket?.flickr_images[0]}
        isLoading={!rocket}
      />
      <Footer />
    </Screen>
  );
};

export default RocketDetails;
