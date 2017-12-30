import React from 'react';
import { Modal,
         Button,
       } from 'react-bootstrap';

class ThanksModal extends React.Component {
  constructor() {
    super();
    this.state = {
      showThanksModal: true,
      firstName: '',
      lastName: '',
      email: '',
    };

    // this.login = this._login.bind(this);
  }

  render() {
    return (
      <div>
        <Modal show={this.state.showThanksModal} onHide={() => this.props.closeModal()}>
          <Modal.Header closeButton>
            <Modal.Title className="modal-title">Thank you</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group">
              <div className="col-xs-9 col-xs-offset-3">
                <div id="loginFailure">Thank you for joining the Wildfit tribe, you should receive an email shortly!</div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button className="modal-button-red" onClick={() => this.props.closeModal()}>Close</Button>
          </Modal.Footer>
        </Modal>
    </div>
    );
  }

    //HELPER FUNCTIONS
  };

export default ThanksModal;
