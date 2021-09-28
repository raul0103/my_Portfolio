import React, { useState } from 'react';
import ContextMenu from '../../context/ContextMenu'
import LeftBlock from './LeftBlock';
import RightBlock from './RightBlock';

const MainMenu = () => {

    const [closeNav, setCloseNav] = useState(false)

    return (
        <ContextMenu.Provider value={{ closeNav, setCloseNav }}>
            <button className="btn-close-page" onClick={_ => setCloseNav(!closeNav)}>X</button>
            <div className={closeNav ? 'main close' : 'main'}>
                <LeftBlock />
                <RightBlock />
            </div>
        </ContextMenu.Provider>
    );
};

export default MainMenu;