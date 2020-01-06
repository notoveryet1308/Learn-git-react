import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from './../../img/crown.svg';
import {auth} from './../../firebase/firebase.utils';

const Header = ({currentUser}) => (
    <header className="header">

        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/contact">
                Contact
            </Link>
            {currentUser ? 
             <div className="option" onClick={()=> auth.signOut()}>SIGN OUt</div>
             : <Link className="option" to="/signin">Sign In</Link> }
        </div>
    </header>
)

export default Header;