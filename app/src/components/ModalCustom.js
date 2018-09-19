import React, { Component } from "react";
import { Button, Header, Image, Modal } from 'semantic-ui-react'


class ModalCustom extends Component {


  render() {
    return (
      <Modal trigger={<Image src={this.props.img.src}/>}>
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Image wrapped size="medium" src={this.props.img.src} />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>
              We've found the following gravatar image associated with your
              e-mail address.
            </p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default ModalCustom;
