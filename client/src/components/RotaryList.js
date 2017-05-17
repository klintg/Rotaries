import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import Rotary from './Rotary';

class RotaryList extends PureComponent {
  render() {
    const {
      rotarys,
      searchBar,
      setSearchBar,
      toggleModal,
      deleteCar,
    } = this.props;

    return (
      <div className="container">
        <div className="row text-left">
          <Link to="/rotarys/add" className="btn btn-danger">Add a new Car!</Link>
        </div>
        <div className="row">
          <input
            type="search" placeholder="Search by Name" className="form-control search-bar" onKeyUp={setSearchBar} />
        </div>
        <div className="row">
        {
    // A car is only shown if its name contains the string from the searchBar
          rotarys
            .filter(car => car.name.toLowerCase().includes(searchBar))
            .map((car, i) => {
              return (
                <Rotary  {...car}
                  key={car._id}
                  i={i}
                  toggleModal={toggleModal}
                  deleteCar={deleteCar}
                />
              );
            })
        }
        </div>
        <hr />
      </div>
    )
  }
}

export default RotaryList;
