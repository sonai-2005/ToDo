import React from 'react'
import PropTypes from 'prop-types'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

export default function Header(props) {
    return (
        <div style={{ margin: "2vh" }}>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ "--bs-scroll-height": "100px" }}>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item dropdown">

                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="#">Action</Link></li>



                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to='/about' aria-disabled="true">about</Link>
                            </li>
                            {/* for contact */}
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/contact'>Contact</Link>
                            </li>
                        </ul>
                        {props.searchBar ? <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> : ""}
                    </div>
                </div>
            </nav>
        </div>
    )
}
Header.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired
}
Header.defaultProps = {
    title: "your title here",
    searchBar: true
}