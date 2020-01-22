import React from 'react'
import {Link} from 'react-router-dom';
import './header.styles.scss'
import {ReactComponent as Logo} from '../../assets/4.4 crown.svg.svg'
import {auth} from '../../firebase/firebase.util';
export default function Header({currentUser}) {
    return (
        <div className="header">
           <Link to="/" className="logo-container">
               <Logo className="logo"/>
            </Link> 
            <div className="options">
                <Link to="/shop" className="option">SHOP</Link>
                <Link to="/" className="option">CONTACT</Link>
                {currentUser ? <div className="option" onClick={auth.signOut}>Signout</div>:<Link className="option" to="/signin">Sign In</Link>}
            </div>
        </div>
    )
}
