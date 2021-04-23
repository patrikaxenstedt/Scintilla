import React from 'react';
import { withShipConsumer } from '../context';
import Loading from './Loading';
import ShipsFilter from './ShipsFilter';
import ShipsList from './ShipsList';

function ShipHolder({ context }) {
  const { loading, sortedShips, ships } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <ShipsFilter ships={ships} />
      <ShipsList ships={sortedShips} />
    </>
  );
}

export default withShipConsumer(ShipHolder);
