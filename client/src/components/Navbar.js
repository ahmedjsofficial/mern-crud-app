import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <header className="bg-primary">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <NavLink className="navbar-brand fs-5 fw-bolder" to="/">MERN CRUD</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item"><NavLink className="nav-link fs-5" to="/CreateStudent">Create Student</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link fs-5" to="/StudentList">Student List</NavLink></li>
                        </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
    
};

export default Navbar;
