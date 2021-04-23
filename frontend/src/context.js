import React, { Component } from 'react';
import items from './data';
//import Client from "./Contentful";

const ShipContext = React.createContext();

export default class ShipProvider extends Component {
  state = {
    ships: [],
    sortedShips: [],
    featuredShips: [],
    loading: true,
    //
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };

  componentDidMount() {
    // this.getData();
    let ships = this.formatData(items);
    let featuredShips = ships.filter((ship) => ship.featured === true);
    //
    let maxPrice = Math.max(...ships.map((item) => item.price));
    let maxSize = Math.max(...ships.map((item) => item.size));
    this.setState({
      ships,
      featuredShips,
      sortedShips: ships,
      loading: false,
      //
      price: maxPrice,
      maxPrice,
      maxSize,
    });
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);

      let ship = { ...item.fields, images, id };
      return ship;
    });
    return tempItems;
  }
  getShip = (slug) => {
    let tempShips = [...this.state.ships];
    const ship = tempShips.find((ship) => ship.slug === slug);
    return ship;
  };
  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log(name, value);

    this.setState(
      {
        [name]: value,
      },
      this.filterShips
    );
  };
  filterShips = () => {
    let {
      ships,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets,
    } = this.state;

    let tempShips = [...ships];
    // transform values
    // get capacity
    capacity = parseInt(capacity);
    price = parseInt(price);
    // filter by type
    if (type !== 'all') {
      tempShips = tempShips.filter((ship) => ship.type === type);
    }
    // filter by capacity
    if (capacity !== 1) {
      tempShips = tempShips.filter((ship) => ship.capacity >= capacity);
    }
    // filter by price
    tempShips = tempShips.filter((ship) => ship.price <= price);
    //filter by size
    tempShips = tempShips.filter(
      (ship) => ship.size >= minSize && ship.size <= maxSize
    );
    //filter by breakfast
    if (breakfast) {
      tempShips = tempShips.filter((ship) => ship.breakfast === true);
    }
    //filter by pets
    if (pets) {
      tempShips = tempShips.filter((ship) => ship.pets === true);
    }
    this.setState({
      sortedShips: tempShips,
    });
  };
  render() {
    return (
      <ShipContext.Provider
        value={{
          ...this.state,
          getShip: this.getShip,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </ShipContext.Provider>
    );
  }
}
const ShipConsumer = ShipContext.Consumer;

export { ShipProvider, ShipConsumer, ShipContext };

export function withShipConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <ShipConsumer>
        {(value) => <Component {...props} context={value} />}
      </ShipConsumer>
    );
  };
}
