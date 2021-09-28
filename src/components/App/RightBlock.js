import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import pages_data from '../../data/pages_data'
import ContextMenu from '../../context/ContextMenu'

const RightBlock = () => {
    const { closeNav, setCloseNav } = useContext(ContextMenu)

    return (
        <div className="main__right-block">
            <nav className="main__right-block__nav">
                <Link to={pages_data.profile.link} onClick={_ => setCloseNav(!closeNav)}>
                    <div>
                        <i>{pages_data.profile.icon}</i>
                        {pages_data.profile.title}
                    </div>
                </Link>
                <Link to={pages_data.projects.link} onClick={_ => setCloseNav(!closeNav)}>
                    <div>
                        <i>{pages_data.projects.icon}</i>
                        {pages_data.projects.title}
                    </div>
                </Link>
                <Link to={pages_data.about.link} onClick={_ => setCloseNav(!closeNav)}>
                    <div>
                        <i>{pages_data.about.icon}</i>
                        {pages_data.about.title}
                    </div>
                </Link>
            </nav>
        </div>
    );
};

export default RightBlock;