import React from 'react';

const Header = (props) => {
    return (
        <div className="header">
            <header>
                <h1>{props.title}</h1>
            </header>
            <h2>{props.description}</h2>
        </div>
    );
};

export default Header;