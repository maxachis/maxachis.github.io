
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
                        <NavLink to={entry.Path}>
                            {entry.Name}
                        </NavLink>
                    ))}
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;