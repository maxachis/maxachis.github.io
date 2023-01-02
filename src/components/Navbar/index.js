
import React from 'react';
import {
    Nav,
    NavLink,
    BurgerLink,
    NavMenu,
} from './NavbarElements';
import { slide as Menu } from 'react-burger-menu'

const Navbar = () => {
    return (
        <>
            <Menu>
                <BurgerLink to='/'>
                    Home
                </BurgerLink>
                <BurgerLink to='/about' activeStyle>
                    About
                </BurgerLink>
                <BurgerLink to='/work' activeStyle>
                    Work
                </BurgerLink>
                <BurgerLink to='/projects' activeStyle>
                    Projects
                </BurgerLink>
                <BurgerLink to='/education' activeStyle>
                    Education
                </BurgerLink>
                <BurgerLink to="/skills" activeStyle>
                    Skills
                </BurgerLink>
            </Menu>
            <Nav>
                <NavMenu>
                    <NavLink to='/'>
                        Home
                    </NavLink>
                    <NavLink to='/about' activeStyle>
                        About
                    </NavLink>
                    <NavLink to='/work' activeStyle>
                        Work
                    </NavLink>
                    <NavLink to='/projects' activeStyle>
                        Projects
                    </NavLink>
                    <NavLink to='/education' activeStyle>
                        Education
                    </NavLink>
                    <NavLink to="/skills" activeStyle>
                        Skills
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;