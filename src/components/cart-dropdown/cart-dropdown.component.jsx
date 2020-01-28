import CustomButton from  '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux'
import './cart-dropdown.styles.scss';
import {selectCartItems, selectCartItemsCount} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {withRouter} from 'react-router-dom';

import React from 'react'

function CartDropdown({cartItems, history, dispatch}) {
    return (
      <div className="cart-dropdown">
        <div className="cart-items">
          {cartItems.length ? (
            cartItems.map(cartItem => (
              <CartItem id={cartItem.id} item={cartItem} />
            ))
          ) : (
            <span className="empty-message">Your Cart is empty.</span>
          )}
        </div>
        <CustomButton onClick={() => {
            dispatch(toggleCartHidden())
            history.push("/checkout")
        }}>
          GO TO CHECKOUT
        </CustomButton>
      </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))