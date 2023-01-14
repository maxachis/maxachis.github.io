
import React from 'react';
import {
    Nav,
    NavLink,
    BurgerLink,
    NavMenu,
} from './NavbarElements';
import { slide as Menu } from 'react-burger-menu'
import Config from "../../config";

const Navbar = () => {
    // TODO: Consider changing font or using Typography
    return (
        <>
            <Menu>
                {Config.ROUTES.map((entry) => (
                    <BurgerLink to={entry.Path}>
                        {entry.Name}
                    </BurgerLink>
                ))}
            </Menu>
            <Nav>
                <NavMenu>
                    {Config.ROUTES.map((entry) => (
                        <NavLink to={entry.Path} activeClass={"navbar-active"}>
                            {entry.Name}
                        </NavLink>
                    ))}
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;