import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const narrowLinks = useRef(null);

    const handleToggle = () => {
        narrowLinks.current.classList.toggle("hidden");
    };

    return (
        <section className="topnav" id="myTopnav">
            <nav>
                <div className="navWide">
                </div>
                <div className="navNarrow">
                    <i onClick={handleToggle} className="fa fa-bars fa-3x"></i>
                    <div ref={narrowLinks} className="narrowLinks hidden">
                        <Link to="/">Home</Link>
                        <Link to="/">Calculator</Link>
                        <Link to="/">See Code</Link>
                    </div>
                </div>
            </nav>
        </section>
    )
};

export default Navbar;