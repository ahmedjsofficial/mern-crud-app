import React, { Component } from 'react';
import axios from 'axios';

export default class EditStudent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            rollno: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:9000/students/EditStudent/' + this.props.match.params.id).then(res => {
            this.setState({
                name: res.data.name,
                email: res.data.email,
                rollno: res.data.rollno
            })
        }).catch((error) => {
            console.log(error)
        })
    }


    onChangeStudentName = (e) =>{
        this.setState({ name: e.target.value })
    }
    onChangeStudentEmail = (e) =>{
        this.setState({ email: e.target.value })
    }
    onChangeStudentRollno = (e) =>{
        this.setState({ rollno: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const studentObject = {
            name: this.state.name,
            email: this.state.email,
            rollno: this.state.rollno
        };

        axios.put('http://localhost:9000/students/UpdateStudent/' + this.props.match.params.id, studentObject).then((res) => {
            console.log(res.data);
        }).catch((error) => {
            console.log(error)
        });

        // Redirect to student list
        this.props.history.push('/StudentList');
    }
    render() {
        return (
            <main className="col-lg-4 col-md-8 col-sm-10 col-10 mx-lg-auto mx-md-auto mx-sm-auto mx-auto">
                <h1 className="text-center text-primary mt-5">Update Student</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="input-group">
                        <input type="text" value={this.state.name} onChange={this.onChangeStudentName} className="form-control" id="Name" placeholder="Name" aria-label="Name"/>
                    </div>
                    <div className="input-group mt-3">
                        <input type="email" value={this.state.email} onChange={this.onChangeStudentEmail} className="form-control" id="Email" placeholder="Email" aria-label="Email"/>
                    </div>
                    <div className="input-group mt-3">
                        <input type="text" value={this.state.rollno} onChange={this.onChangeStudentRollno} className="form-control" id="Roll" placeholder="Roll NO" aria-label="Roll No"/>
                    </div>
                    <div className="input-group mt-3">
                        <button className="btn btn-primary w-100">Update Student</button>
                    </div>
                </form>
            </main>
        )
    }
}
