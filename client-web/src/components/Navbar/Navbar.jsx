import React, { useState } from 'react';
import './Navbar.css';
import NavProfile from '../NavProfile/NavProfile';
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
                <NavProfile open={open}/>
                <div>
                    <Navlist title="Home" iconPath={tempPath} open={open}/>
                    <Navlist title="Feed" iconPath={tempPath} open={open}/>
                    <Navlist title="Mandalplan" iconPath={tempPath} open={open}/>
                    <Navlist title="Mandaland" iconPath={tempPath} open={open}/>
                    <Navlist title="Setting" iconPath={tempPath} open={open}/>
                    <button class="toggle-button" onClick={onToggleClick}>{renderToggleTitle()}</button>
                </div>
            </nav>
        )
    }

    return (
        <div>
            {renderContents()}
        </div>
    )
}

export default Navbar;