import React, { useState } from 'react';
import './Navbar.css';
import NavProfile from '../NavProfile/NavProfile';
import Navlist from '../Navlist/Navlist';
import NavMonthly from '../NavMonthly/NavMonthly';

const Navbar = () => {
    const [open, setOpen] = useState(true);
    const dropContent = [
        {dropTitle: "My", dropLink: "/"},
        {dropTitle: "New", dropLink: "/"}
    ]

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
        const tempLink = "/";

        return (
            <nav style={{width:renderNavWidth()+'px'}}>
                <NavProfile open={open} />
                <div>
                    <Navlist title="Home" iconPath={tempPath} open={open} aLink={tempLink} />
                    <Navlist title="Feed" iconPath={tempPath} open={open} aLink={tempLink} />
                    <Navlist title="Mandalplan" iconPath={tempPath} open={open} aLink={tempLink} dropContent={dropContent} />
                    <Navlist title="Mandaland" iconPath={tempPath} open={open} aLink={tempLink} />
                    <Navlist title="Setting" iconPath={tempPath} open={open} aLink={tempLink} />
                </div>
                <NavMonthly open={open} />
                <div className="toggle-button-wrapper">
                    <div className="toggle-button" onClick={onToggleClick} >{renderToggleTitle()}</div>
                </div>
            </nav>
        )
    }

    return (
        <React.Fragment>
            {renderContents()}
        </React.Fragment>
    )
}

export default Navbar;