import React, { Component } from 'react'
import axios from 'axios';

import StudentTableRow from "../components/StudentTableRow.js";

export default class StudentList extends Component {
   
    constructor(props) {
        super(props);

        this.state = {
            students: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:9000/students').then(res => {
                this.setState({
                    students: res.data
                })
            }).catch((error) => {
                console.log(error)
            })
    }

    DataTable = () => {
        return this.state.students.map((res, i) => {
            return <StudentTableRow obj={res} key={i} />
        })
    }

    render() {
        return (
            <div className="col-lg-6 col-md-8 col-sm-10 col-10 mx-lg-auto mx-md-auto mx-sm-auto mx-auto">
                <div className="mt-5 mb-4 text-center"><h1 className="text-uppercase text-primary">Student List</h1></div>
                <table className="table table-striped table-bordered table-hover"> 
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Roll No</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.DataTable()}
                    </tbody>
                </table>
            </div>
            
        )
    }
}
