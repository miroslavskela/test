import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../redux/user/user.selector';
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import './header.styles.scss'
import {ReactComponent as Logo} from '../../assets/4.4 crown.svg.svg'
import {auth} from '../../firebase/firebase.util';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
function Header({currentUser, hidden}) {
    return (
        <div className="header">
           <Link to="/" className="logo-container">
               <Logo className="logo"/>
            </Link> 
            <div className="options">
                <Link to="/shop" className="option">SHOP</Link>
                <Link to="/" className="option">CONTACT</Link>
                {currentUser ? <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>:<Link className="option" to="/signin">SIGN IN</Link>}
                <CartIcon/>
            </div>
           { hidden ? null : <CartDropdown/>}
        </div>
    )
}

const mapStateToProps = createStructuredSelector ({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
})
export default connect(mapStateToProps)(Header)