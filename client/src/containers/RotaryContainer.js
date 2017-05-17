import React, { Component } from 'react';
import { Modal, RotaryList } from '../components';

class RotaryContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rotarys: [],
      selectedCar: {},
      searchBar: ''
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.deleteCar = this.deleteCar.bind(this);
    this.setSearchBar = this.setSearchBar.bind(this);
  }

  componentDidMount() {
    this.getCars();
  }

  toggleModal(index) {
    this.setState({
      selectedCar: this.state.rotarys[index]
    });
    $('#game-modal').modal();
  }

  getCars() {
    fetch('http://localhost:8080/games', {
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(res => res.json())
    .then(data => this.setState({ rotarys: data }));
  }
 
  deleteCar(id) {
    fetch(`http://localhost:8080/games/${id}`, {
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        rotarys: this.state.rotarys.filter(rotary => rotary._id !== id)
      });
      console.log(res.message);
    })
  }

  setSearchBar(e) {
    this.setState({ searchBar: e.target.value.toLowerCase() });
  }

  render() {
    const { rotarys, selectedCar, searchBar } = this.state;
    return (
      <div>
        <Modal car={selectedCar} />
        <RotaryList
          rotarys={rotarys}
          searchBar={searchBar}
          setSearchBar={this.setSearchBar}
          toggleModal={this.toggleModal}
          deleteCar={this.deleteCar}
        />
      </div>
    )
  }
}

export default RotaryContainer;
