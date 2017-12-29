import React from 'react';
import Firebase from '../firebase';

import { Button, Col, Row, Grid } from 'react-bootstrap';
import RegisterModal from './registermodal';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRegisterModal: false,
    };
    this.signup = this._signup.bind(this);
    this.openModal = this._openModal.bind(this);
    this.closeModal = this._closeModal.bind(this);
  }
  render() {
    return (
      <div>
      {/* //LANDING */}
      <div className="cover">
        <h1>Welcome to <strong>Wildfit</strong></h1>
        <p>Never go hungry again</p>
        <a className="btn" onClick={this.openModal}>Join the Wildfit Tribe</a>
      </div>
      {/* <img src="food.jpg" alt="Food" className="cover-image"></img> */}

      {/* //WHAT IS IT? */}
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={8}>Hello</Col>
          <Col xs={6} md={4}>Hello</Col>
        </Row>
        <Row className="show-grid">
          <Col xs={6} md={4}>Hello</Col>
          <Col xs={6} md={4}>Hello</Col>
          <Col xsHidden md={4}>Hello</Col>
        </Row>
      </Grid>

      {/* REGISTER MODAL */}
      {this.state.showRegisterModal ?
        <RegisterModal
          closeModal = {this.closeModal}
          signup = {this.signup}
        /> : null}

      </div>
    );
  }


  //Helper Functions
   _signup (firstName, lastName, email) {
     const userID = "user" + Date.now()
     Firebase.database().ref().child('users/').update({
       [userID]: {
         email: email,
         firstName: firstName,
         lastName: lastName,
        }
     })
    }

    _openModal() {
      this.setState({showRegisterModal: true});
    }

    _closeModal() {
      this.setState({showRegisterModal: false});
    }
};

export default Homepage
