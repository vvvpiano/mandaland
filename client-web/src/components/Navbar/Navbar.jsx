import React from 'react';
import { connect } from 'react-redux';
import './Navbar.css';
import NavProfile from '../NavProfile/NavProfile';
import Navlist from '../Navlist/Navlist';
import NavMonthly from '../NavMonthly/NavMonthly';

class Navbar extends React.Component {
    state = {open : true};
    
    dropContent = [
        {dropTitle: "My", dropLink: "/"},
        {dropTitle: "New", dropLink: "/"}
    ]

    onToggleClick = () => {
        const state = this.state.open ? false : true;
        this.setState({open: state});
    }

    renderNavWidth = () => {
        return this.state.open ? 280 : 102;
    }

    renderToggleTitle = () => {
        return this.state.open ? "Close" : "Open";
    }

    renderContents = () => 
    {
        const tempPath = window.location.origin + "/logo192.png";
        const tempLink = "/";

        return (
            <nav style={{width:this.renderNavWidth()+'px'}}>
                <NavProfile open={this.state.open} userProfile={this.props.user} />
                <div>
                    <Navlist title="Home" iconPath={tempPath} open={this.state.open} aLink={tempLink} />
                    <Navlist title="Feed" iconPath={tempPath} open={this.state.open} aLink={tempLink} />
                    <Navlist title="Mandalplan" iconPath={tempPath} open={this.state.open} aLink={tempLink} dropContent={this.dropContent} />
                    <Navlist title="Mandaland" iconPath={tempPath} open={this.state.open} aLink={tempLink} />
                    <Navlist title="Setting" iconPath={tempPath} open={this.state.open} aLink={tempLink} />
                </div>
                <NavMonthly open={this.state.open} />
                <div className="toggle-button-wrapper">
                    <div className="toggle-button" onClick={this.onToggleClick} >{this.renderToggleTitle()}</div>
                </div>
            </nav>
        )
    }

    render () {
        return (
            <React.Fragment>
                {this.renderContents()}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Navbar);