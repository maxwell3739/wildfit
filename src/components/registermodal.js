import React from 'react';
import { Modal,
         Button,
         FormGroup,
         Col,
         ControlLabel,
         FormControl,
         Form } from 'react-bootstrap';

class RegisterModal extends React.Component {
  constructor() {
    super();
    this.state = {
      showRegisterModal: true,
      firstName: '',
      lastName: '',
      email: '',
    };

    // this.login = this._login.bind(this);
    this.onFirstNameChange = this._onFirstNameChange.bind(this);
    this.onLastNameChange = this._onLastNameChange.bind(this);
    this.onEmailChange = this._onEmailChange.bind(this);
    this.signup = this._signup.bind(this);
  }

  render() {
    return (
      <div>
        <Modal show={this.state.showRegisterModal} onHide={() => this.props.closeModal()}>
          <Modal.Header closeButton>
            <Modal.Title className="modal-title">Signup</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group">
              <div className="col-xs-9 col-xs-offset-3">
                <div id="loginFailure">{this.state.loginFailure}</div>
              </div>
            </div>
            <Form horizontal >
              <FormGroup controlId="formFirstName">
                <Col componentClass={ControlLabel} sm={4}>
                  First Name
                </Col>
                <Col sm={8}>
                  <FormControl onChange={(e) => this.onFirstNameChange(e)} type="text" placeholder="Maxwell" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formLastName">
                <Col componentClass={ControlLabel} sm={4}>
                  Last Name
                </Col>
                <Col sm={8}>
                  <FormControl onChange={(e) => this.onLastNameChange(e)} type="text" placeholder="Nicholson" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formEmail">
                <Col componentClass={ControlLabel} sm={4}>
                  Email
                </Col>
                <Col sm={8}>
                  <FormControl onChange={(e) => this.onEmailChange(e)} type="text" placeholder="maxwell@uvic.ca" />
                </Col>
              </FormGroup>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button className="modal-button-orange" type="submit" onClick={() => this.signup()}>Signup</Button>
            <Button className="modal-button-red" onClick={() => this.props.closeModal()}>Cancel</Button>
          </Modal.Footer>
        </Modal>
    </div>
    );
  }

    //HELPER FUNCTIONS
    _signup() {
      console.log("hello")
      console.log(this.state.firstName, this.state.lastName, this.state.email)
      this.props.signup(this.state.firstName, this.state.lastName, this.state.email);
      this.props.closeModal();
    }

    _onFirstNameChange(e) {
      this.setState({firstName: e.target.value});
    }

    _onLastNameChange(e) {
      this.setState({lastName: e.target.value});
    }

    _onEmailChange(e) {
      this.setState({email: e.target.value});
    }

  };

export default RegisterModal;
