import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import axios from "axios";
import AddStudents from './addStudents';
import EditStudent from './editStudent';

export default class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
          students: [],
          newStudentData: {
            name: "",
            email: "",
            password: "",
          
          },
          isLoading: false,
          status: "",
          newStudentModal: false,
          editStudentData: {
            id: "",
            name: "",
            email: "",
            password: "",
            
          },
          editStudentModal: false,
          noDataFound: "",
        };
      }

    componentDidMount() {
        this.getStudents();
      }      
    getStudents() {
    axios.get("http://design/api/oopproject").then((response) => {
        if (response.status === 200) {
        this.setState({
            students: response.data.items ? response.data.items : [],
        });
        }
        if (
        response.data.status === "failed" &&
        response.data.success === false
        ) {
        this.setState({
            noDataFound: response.data.message,
        });
        }
    });
    } 

    toggleNewStudentModal = () => {
        this.setState({
          newStudentModal: !this.state.newStudentModal,
        });
      };
    onChangeAddStudentHandler = (e) => {
        let { newStudentData } = this.state;
        newStudentData[e.target.name] = e.target.value;
        this.setState({ newStudentData });
    };
    addStudent = () => {
        axios
          .post(
            "http://localhost:8888/userspost",
            this.state.newStudentData
          )
          .then((response) => {
            const { students } = this.state;
            const newStudents = [...students];
            newStudents.push(response.data);
            this.setState(
              {
                students: newStudents,
                newStudentModal: false,
                newStudentData: {
                  name: "",
                  email: "",
                  password: ""
                 
                },
              },
              () => this.getStudents()
            );
          });
      };

      toggleEditStudentModal = () => {
        this.setState({
          editStudentModal: !this.state.editStudentModal,
        });
      };

      onChangeEditStudentHanler = (e) => {
        let { editStudentData } = this.state;
        editStudentData[e.target.name] = e.target.value;
        this.setState({ editStudentData });
      };

      editStudent = (id, name, email, password) => {
        this.setState({
          editStudentData: { id, name, email, password },
          editStudentModal: !this.state.editStudentModal,
        });
      };
      
      updateStudent = () => {
        let {
          id,
          name,
          email,
          password,
          
        } = this.state.editStudentData;
        this.setState({
          isLoading: true,
        });
        axios
          .post( "http://design/api/oopproject/"+id, {
            id,
            name,
            email,
            password,           
           
          })
          .then((response) => {
            this.getStudents();
            this.setState({
              editStudentModal: false,
              editStudentData: { name, email, password },
              isLoading:false,
            });
          })
          .catch((error) => {
            this.setState({isLoading:false})
            console.log(error.response);
          });
      };
    
      deletStudent = (id) => {
        this.setState({
          isLoading: true,
        });
        axios
          .delete("http://design/api/oopproject/" + id)
          .then((response) => {
            this.setState({
              isLoading: false,
            });
            this.getStudents();
          })
          .catch((error) => {
            this.setState({
              isLoading: false,
          });
        });
      };
    
  render() {
    const { newStudentData,editStudentData,noDataFound,students} = this.state;
      let studentsDetails = [];
      if (students.length) {
        studentsDetails = students.map((student) => {
          return (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.password}</td>
             
              <td>
                <Button
                  color="success"
                  className="mr-3"
                  size="sm"
                  onClick={() =>
                    this.editStudent(
                      student.id,
                      student.name,
                      student.email,
                      student.password,
                   
                    )
                  }
                >
                  Edit
                </Button>
                <Button
                  color="danger"
                  size="sm"
                  onClick={() => this.deletStudent(student.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          );
        });
      }
  
      if (this.state.isLoading) {
        return <div className="spinner-border text-center" role="status"> <span className="sr-only">Loading...</span>
      </div>
      } 
    return (
      <div className="App container mt-4">
           <h4 className="font-weight-bold">Students Registration</h4> 
            {/* Model for Add Studnet Record */}
           <AddStudents
                toggleNewStudentModal={this.toggleNewStudentModal}
                newStudentModal={this.state.newStudentModal}
                onChangeAddStudentHandler={this.onChangeAddStudentHandler}
                addStudent={this.addStudent}
                newStudentData={newStudentData}
          />
         {/* Model for Edit Studnet Record */}
            <EditStudent
            toggleEditStudentModal={this.toggleEditStudentModal}
            editStudentModal={this.state.editStudentModal}
            onChangeEditStudentHanler={this.onChangeEditStudentHanler}
            editStudent={this.editStudent}
            editStudentData={editStudentData}
            updateStudent={this.updateStudent}
            />
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Email</th>
              
            </tr>
          </thead>
          {students.length === 0 ? (
            <tbody>
              <h3>{noDataFound}</h3>
            </tbody>
          ) : (
            <tbody>{studentsDetails}</tbody>
          )}
        </Table>
      </div>
    );
  }
}