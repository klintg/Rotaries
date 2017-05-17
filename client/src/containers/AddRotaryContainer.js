import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { Form } from '../components';

class AddRotaryContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { newCar: {}}

    this.submit = this.submit.bind(this);
    this.uploadPicture = this.uploadPicture.bind(this);
    this.setGame = this.setGame.bind(this);
  }

  submit() {
    const newCar = Object.assign({}, { picture: $('#picture').attr('src')}, this.state.newCar)
    fetch('http://localhost:8080/games', {
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      method: 'POST',
      body: JSON.stringify(newCar)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data.message);
      hashHistory.push('/rotarys');       // we go back to the list view
    })
  }

  uploadPicture() {
    filepicker.pick(
      {
        mimetype: 'image/*', // Cannot upload other files but images
        container: 'modal',
        services: ['COMPUTER', 'FACEBOOK', 'INSTAGRAM', 'URL', 'IMGUR', 'PICASA'],
        openTo: 'COMPUTER' // First choice to upload files from
      },
      function(Blob) {
        console.log(JSON.stringify(Blob));
        $('#picture').attr('src', Blob.url);
      },
      function (FPError) {
        console.log(FPError.toString());
      }
    );
  }

  setGame() {
    const newCar = {
       name: document.getElementById('name').value,
       description: document.getElementById('description').value,
       year: document.getElementById('year').value,
       picture: $('#picture').attr('src')
     };
     console.log(newCar);
     this.setState({ newCar });
  }

  render() {
    return <Form submit={this.submit} uploadPicture={this.uploadPicture} setGame={this.setGame} />
  }
}

export default AddRotaryContainer;
