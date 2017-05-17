import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class Welcome extends PureComponent {
  render () {
    return (
      <div className="inner cover">
        <h1 className="cover-heading">Welcome</h1>
        <p className="lead">Click on browse through the rotary world.</p>
        <p className="lead">
          <Link className="btn btn-lg" to="/rotarys">Browse!</Link>
        </p>
      </div>
    );
  }
}
