import React from 'react';
import { withShipsConsumer } from '../context';
import Loading from './Loading';
import ShipsFilter from './ShipsFilter';
import ShipsList from './ShipsList';

function ShipsHolder({ context }) {
  const { loading, sortedShips, ships } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <ShipsFilter rooms={rooms} />
      <ShipsList rooms={sortedRooms} />
    </>
  );
}

export default withShipsConsumer(ShipsHolder);
