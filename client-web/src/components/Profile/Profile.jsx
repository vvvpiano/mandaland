import React, { useRef, useState, useEffect } from 'react'
import LoginButton from '../LoginButton/LoginButton';
import { connect } from 'react-redux';
import './Profile.css'

const Profile = ({userImg}) => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);

    useEffect(() => {
        const pageClickEvent = (e) => {
            if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
              setIsActive(!isActive);
            }
          };

        if (isActive) {
          window.addEventListener('click', pageClickEvent);
        }
      
        return () => {
          window.removeEventListener('click', pageClickEvent);
        }
      
      }, [isActive]);

    return (
        <div className="profileWrapper">
            <span className="alertIcon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
            </span>
            <img src={userImg === null ? window.location.origin+'/icons/user.svg': userImg} alt="" className="profileBtn" onClick={()=>(onClick())} />
            <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <ul>
                    <li><a href="/settings"><span>Settings</span></a></li>
                    <li onClick={()=>(onClick())}><LoginButton /></li>
                </ul>
            </nav>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {userImg: state.user.imagePath}
}

export default connect(mapStateToProps)(Profile)
