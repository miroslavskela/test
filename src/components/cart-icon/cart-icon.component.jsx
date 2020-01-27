import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/11.2 shopping-bag.svg.svg';
import {connect} from 'react-redux';

import {toggleCartHidden} from '../../redux/cart/cart.actions';
import React from 'react'

function CartIcon({toggleCartHidden, itemCount}) {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon'/>
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapStateToProps = ({cart:{cartItems}}) => ({
    itemCount:cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden:() => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)