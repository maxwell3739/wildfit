import React from 'react';
import Firebase from '../firebase';

import {Button, Col, Row, Grid } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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

      {/* //WHY WILDFIT */}
      <div className="whitebox">
        <h3><strong>Why Wildfit?</strong></h3>
        <div className="underline"></div>
        <h4>Tired of Feeling Powerless Over Food?</h4>
        <p>If you're confused about what to eat and feel like food is holding you hostage from living your best life,
           you're not alone. Millions of people around the world struggle every single day with their weight, energy
           levels, sleep and overall wellbeing. We understand that you're frustrated and we're here to help.</p>
      </div>

      {/* //WHAT WILDFIT*/}
      <div className="yellowboxwide">
        <h3><strong>What is Wildfit?</strong></h3>
        <div className="underline"></div>
        <Grid>
          <Row className="show-grid">
          <Col xs={12} md={6}>
            <div className="infobox">
              <img src="/img/Fork.png" alt="Fork" className="infobox-picture"></img>
              <center><p> Inspired by the Paleo diet, WildFit is founded on what humans are supposed to eat based on our
                history of hunters and gatherers living in the wild. Sound complicated? It's actually pretty simple and
                 that's why it works. </p></center>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="infobox">
              <img src="/img/Head.png" alt="Head" className="infobox-picture"></img>
              <center><p> The WildFit principles are based on a solid foundation of nutritional science, food psychology
                and behavioral change: the ideal combination for lasting results.</p></center>
            </div>
          </Col>
        </Row>
      </Grid>
      </div>

      {/* OUR STORY */}
      <div className="whitebox">
      <h3><strong>Our Story</strong></h3>
      <div className="underline"></div>
      <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/4lW-gnW8eeM" frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen></iframe>
      </div>

      {/* CHALLENGE */}
      <div className="yellowbox">
        <h3><strong>90-Day Wildfit Challenge</strong></h3>
        <div className="underline"></div>
        <p>Carefully designed by our founder Eric Edmeades, the WildFit 90 Challenge takes you on a three month journey of
          self-discovery and personal growth while you learn powerful tools to help you transform your relationship with food, forever.</p>
      </div>

      <div className="lightyellowbox">
        <h5><strong>Session 1</strong></h5>
        <p>January 1, 2018 - April 28, 2018</p>
        <p>Space Limited</p>
      </div>

      <div className="yellowbox">
        <h5><strong>What You'll Receive</strong></h5>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={6}>
              <div className="infobox">
                <h6><strong>Coaching Calls</strong></h6>
                <p> 2-3 online coaching calls per week by Dr. Ruben Ruiz and a master WildFit Coach </p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="infobox">
                <h6><strong>Educational Videos</strong></h6>
                <p> 2-5 videos per week explaining the entire WildFit program. Over 30 videos in total. </p>
              </div>
            </Col>
          </Row>
          <Row className="show-grid">
          <Col xs={12} md={6}>
            <div className="infobox">
              <h6><strong>WildFit Facebook Group</strong></h6>
              <p> Active community of the WildFit members to share knowledge, give feedback, and seek advice.  </p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="infobox">
              <h6><strong>WildFit Food Database</strong></h6>
              <p> Log of all important information to understand your food </p>
            </div>
          </Col>
        </Row>
        <Row className="show-grid">
        <Col xs={12} md={12}>
          <div className="infobox">
            <h6><strong>WildFit Recipes</strong></h6>
            <p> 50+ easy-to-make recipes  </p>
          </div>
        </Col>
      </Row>
    </Grid>
    <Button className="smallbutton" onClick="location.href='/payments'">Get Started Today</Button>
    </div>

    {/* TESTIMONIALS */}
    <div className="whiteboxwide">
    <h3><strong>What the Tribe is Saying</strong></h3>
    <div className="underline"></div>
    <Grid>
      <Row className="show-grid">
      <Col xs={12} md={6}>
        <div className="infobox">
          <img src="/img/hearticon.png" alt="Heart" className="infobox-picture"></img>
          <center><p>  "I have never been able to complete or stick with any kind of diet in the past.
             Wildfit is a unique and amazing program because it helps you make healthy lifestyle changes
             step-by-step with careful guidance." </p></center>
        </div>
      </Col>
      <Col xs={12} md={6}>
        <div className="infobox">
          <img src="/img/Mind.jpg" alt="Heart" className="infobox-picture"></img>
          <center><p> At the end of the 90 day program, I lost 20 pounds and all my primary health problems disappeared.
             I no longer have to take medication for headaches, muscle aches, heartburn or allergies, and my waist size
             dropped from a size 12 to a size 6.</p></center>
        </div>
      </Col>
    </Row>
  </Grid>
    </div>

    {/* FOOTER */}
    <div className="footer"></div>

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
