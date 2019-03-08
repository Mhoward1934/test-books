import React from "react";
import { Link } from "react-router-dom";

const Searchbar = () => (

    <div className="searchbar" >

        <nav className="navbar navbar-light bg-light">
            <Link className="navbar-brand">Navbar</Link>
            <form className="form-inline">
                <input className="form-control mr-sm-5" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    </div>
)

export default Searchbar;
