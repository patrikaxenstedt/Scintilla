import React from 'react';
import Ship from './Ship';
const ShipsList = ({ ships }) => {
  if (ships.length === 0) {
    return (
      <div className="empty-search">
        <h3>No ships matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {ships.map((item) => {
          return <Ship key={item.id} ship={item} />;
        })}
      </div>
    </section>
  );
};

export default ShipsList;
