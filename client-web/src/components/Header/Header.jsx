import React from 'react';
import Logo from '../Logo/Logo';
import Profile from '../Profile/Profile';
import SearchBox from '../SearchBox/SearchBox'
// import db from '../../../../database/db'
import '../reset.css'
import '../common.css'
import './Header.css'

const Header = () => {
    return (
        <header className="background fixed">
            <Logo/>
            <SearchBox/>
            <Profile />
        </header>
    )
}

export default Header;