import React from 'react';
import Firebase from '../firebase';

import {Button, Col, Row, Grid } from 'react-bootstrap';
import RegisterModal from './registermodal';
import ThanksModal from './thanksmodal';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRegisterModal: false,
      showThanksModal: false,
    };
    this.signup = this._signup.bind(this);
    this.openRegisterModal = this._openRegisterModal.bind(this);
    this.closeRegisterModal = this._closeRegisterModal.bind(this);
    this.openThanksModal = this._openThanksModal.bind(this);
    this.closeThanksModal = this._closeThanksModal.bind(this);
  }
  render() {
    return (
      <div>
      {/* //LANDING */}
      <div className="cover">
        <div className="cover-titlebox">
          <h1><strong>Welcome to WILDFIT</strong></h1>
          <h2>Never go hungry again</h2>
          <Button className="smallbutton" onClick={this.openRegisterModal}>Join the Wildfit Tribe</Button>
        </div>
      </div>

      {/* //WHAT IS IT? */}
      <Grid>
        <Row className="show-grid">
          <Col xs={6} md={4}>
            <div className="infobox">
              <center><h3>Solid Health <br></br> Principles</h3></center>
              <img src="/img/hearticon.png" alt="Heart" className="infobox-picture"></img>
              <center><p> WildFit is a Paleo-influenced health methodology that draws heavily from human history
                  and modern-day hunter-gatherer communities. A key principle of WildFit is that ‘every living
                  thing has a diet’ and that the degree to which a species can stay on its diet it will experience
                   health and longevity. </p></center>
            </div>
          </Col>
          <Col xs={6} md={4}>
            <div className="infobox">
              <center><h3>Powerful <br></br> Psychology</h3></center>
              <img src="/img/Mind.jpg" alt="Heart" className="infobox-picture"></img>
              <center><p> WildFit creator, Eric Edmeades, has been a professional speaker and executive business mentor
                 for 2 decades; he understands behavior and how to create lasting change for you. WildFit’s structure
                 is designed to help you make the changes you want, quickly and easily.</p></center>
            </div>
          </Col>
          <Col xs={6} md={4}>
            <div className="infobox">
              <center><h3>No Hunger <br></br> No Exercise</h3></center>
              <img src="/img/Weight.jpg" alt="Heart" className="infobox-picture-weight"></img>
              <center><p> The WildFit Challenge is carefully designed so that you will NOT be hungry and there is no
                requirement to exercise. This program is about nutritional balance and getting your diet, energy levels
                and sleep on track so that, when you are ready, you will enjoy any excerise you do a great deal.</p></center>
            </div>
          </Col>
        </Row>
      </Grid>

      {/* REGISTER MODAL */}
      {this.state.showRegisterModal ?
        <RegisterModal
          closeModal = {this.closeRegisterModal}
          openThanksModal = {this.openThanksModal}
          signup = {this.signup}
        /> : null}

      {/* THANK YOU MODAL */}
      {this.state.showThanksModal ?
        <ThanksModal
          closeModal = {this.closeThanksModal}
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

    _openRegisterModal() {
      this.setState({showRegisterModal: true});
    }

    _closeRegisterModal() {
      this.setState({showRegisterModal: false});
    }

    _openThanksModal() {
      this.setState({showThanksModal: true});
    }

    _closeThanksModal() {
      this.setState({showThanksModal: false});
    }
};

export default Homepage
