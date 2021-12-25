import React, { Component } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';


export default class StudentTableRow extends Component {
    deleteStudent = () => {
        axios.delete('http://localhost:9000/students/DelteStudent/' + this.props.obj._id)
            .then((res) => {
                console.log('Student successfully deleted!');
            }).catch((error) => {
                console.log(error)
            })
    }
    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.rollno}</td>
                <td className="d-flex justify-content-around flex-row">
                    <NavLink className="btn btn-primary" to={"/EditStudent/" + this.props.obj._id}>Edit</NavLink>
                    <button className="btn btn-danger" onClick={this.deleteStudent}>Delete</button>
                </td>
                
            </tr>
        )
    }
}
