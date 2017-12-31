import React from 'react';

import {Button} from 'react-bootstrap';


class Payments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
    this.paynow = this._paynow.bind(this);
  }
  render() {
    return (
      <div>
        <div className="cover">
          <div className="cover-titlebox">
            <h1><strong>Join WILDFIT Now</strong></h1>
            <center><Button className="smallbutton" onClick={this.paynow}>Paynow</Button></center>
          </div>
        </div>
      </div>
    );
  }


  //Helper Functions
  _paynow() {
    console.log("Quinn this should prompt the Stripe")
  }
};

export default Payments
