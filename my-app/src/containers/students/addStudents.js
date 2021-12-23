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

export default class AddStudents extends Component {
  render() {
    return (
      <div>
        <Button
          className="float-right mb-4"
          color="primary"
          onClick={this.props.toggleNewStudentModal}
        >
          Add Student
        </Button>
        <Modal
          isOpen={this.props.newStudentModal}
          toggle={this.props.toggleNewStudentModal}
        >
          <ModalHeader toggle={this.props.toggleNewStudentModal}>
            Add new Student
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                id="id"
                name="name"
                value={this.props.newStudentData.name}
                onChange={this.props.onChangeAddStudentHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                name="email"
                value={this.props.newStudentData.email}
                onChange={this.props.onChangeAddStudentHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                id="password"
                name="password"
                value={this.props.newStudentData.password}
                onChange={this.props.onChangeAddStudentHandler}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.props.addStudent()}>
              Add
            </Button>{" "}
            <Button color="secondary" onClick={this.props.toggleNewStudentModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}