import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

export default class EditStudent extends Component {
  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.editStudentModal}
          toggle={this.props.toggleEditStudentModal}
        >
          <ModalHeader toggle={this.props.toggleEditStudentModal}>
            Update Student
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="first_name">Name</Label>
              <Input
                id="id"
                name="name"
                value={this.props.editStudentData.name}
                onChange={this.props.onChangeEditStudentHanler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="id"
                name="email"
                value={this.props.editStudentData.email}
                onChange={this.props.onChangeEditStudentHanler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                id="id"
                name="password"
                value={this.props.editStudentData.password}
                onChange={this.props.onChangeEditStudentHanler}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button 
              color="primary" 
              onClick={this.props.updateStudent}
            >
              Update
            </Button>
            <Button
              color="secondary"
              onClick={this.props.toggleEditStudentModal}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}