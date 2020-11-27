import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBase = styled.nav`
background-color: lightblue;
padding: 1rem;
    & > a {
        padding: 1rem;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 80%;
        letter-spacing: 2px;

        &:hover {
            background: darkblue;
            color:white;
        }
    }
`;

const Nav = () => {

    return (
        <NavBase>
            <Link to="/register">Register</Link>
            <Link to="/checkout">Checkout</Link>
        </NavBase>
    );
}

export default Nav;