import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => (

    <div className="navbar" >
   
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" href="/" to="/">Google-Books</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active float-right">
                            <Link className="nav-Link " href="#" to="*">Search<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item float-right">
                            <Link className="nav-Link " href="/saved" to="/saved">Saved</Link>
                        </li>

                    </ul>

                </div>
            </nav>
    </div >
)





export default Navbar;