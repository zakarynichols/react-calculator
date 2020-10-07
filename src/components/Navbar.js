import React, { useRef } from 'react';
// import { Link } from 'react-router-dom';

const Navbar = () => {
    const narrowLinks = useRef(null);

    const handleToggle = () => {
        narrowLinks.current.classList.toggle("hidden");
    };

    return (
        <section className="topnav" id="myTopnav">
            <nav>
                <div className="navWide">
                    <div className="wideDiv">
                        <div>Home</div>
                        <div>Athletes</div>
                        <div>Login</div>
                    </div>
                </div>
                <div className="navNarrow" onClick={handleToggle}>
                    <i className="fa fa-bars fa-2x"></i>
                    <div ref={narrowLinks} className="narrowLinks hidden">
                        <div>Home</div>
                        <div>Athletes</div>
                        <div>Login</div>
                    </div>
                </div>
            </nav>
        </section>
    )
};

export default Navbar;