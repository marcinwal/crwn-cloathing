import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { LogoContainer, HeaderContainer, OptionsContainer, OptionDiv, OptionLink } from './header.styles';

import './header.styles.scss';

const Header = ({ currentUser, hidden, signOutStart }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">
                SHOP
            </OptionLink> 
            <OptionLink to="/shop">
                CONTACT
            </OptionLink> 
            {currentUser ? (
            <OptionDiv onClick={signOutStart}> SIGN OUT</OptionDiv>
            ) : (
            <OptionLink to='/signin'>
                SIGN IN
            </OptionLink>
            )}
            <CartIcon />    
        </OptionsContainer>
        {hidden ? null : <CartDropdown />}
    </HeaderContainer>
);
//v1
// const mapStateToProps = state => ({
//     currentUser: state.user.currentUser
// })
//v2
// const mapStateToProps = ({user: { currentUser },cart: {hidden }}) => ({
//     currentUser,
//     hidden
// })
//v3
// const mapStateToProps = (state) => ({
//     currentUser: selectCurrentUser(state),
//     hidden: selectCartHidden(state)
// });

//v4
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Header);
