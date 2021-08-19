import React, { useState } from 'react';
import './Navbar.css';
import Navlist from '../Navlist/Navlist';

const Navbar = () => {
    const [open, setOpen] = useState(true);

    const onToggleClick = () => {
        const state = open ? false : true;
        setOpen(state);
    }

    const renderNavWidth = () => {
        if (open)
            return 280;
        return 102;
    }

    const renderToggleTitle = () => {
        if (open)
            return "Close";
        return "Open";
    }

    const renderContents = () => 
    {
        const tempPath = window.location.origin + "/logo192.png";
        return (
            <nav style={{width:renderNavWidth()+'px'}}>
                <Navlist title="Home" iconPath={tempPath}/>
                <Navlist title="Feed" iconPath={tempPath}/>
                <Navlist title="Mandalplan" iconPath={tempPath}/>
                <Navlist title="Mandaland" iconPath={tempPath}/>
                <Navlist title="Setting" iconPath={tempPath}/>
                <button class="toggle-button" onClick={onToggleClick}>{renderToggleTitle()}</button>
            </nav>
        )
    }

    console.log("state:", open)
    return (
        <div>
            {renderContents()}
        </div>
    )
}

export default Navbar;