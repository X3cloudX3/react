import * as React from 'react';
import { Component } from 'react';
import { Link } from "react-router-dom"

class Navbar extends Component<any, any> {
    state = {}
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <span className="navbar-brand">Movies</span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <button className="btn btn-dark"><Link style={{ color: "white" }} to="/">Home</Link></button>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-dark" ><Link style={{ color: "white" }} to="/allFeedbacks">Feedbacks</Link></button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>);
    }
}

export default Navbar