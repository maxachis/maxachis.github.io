import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: rgba(13, 111, 141, 0.66);
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  margin: auto;
  align-items: center;
`;

export const NavLink = styled(Link)`
  color: #020101;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    font-weight: bold;
  }
`;

export const BurgerLink = styled(Link)`
  //border: 1px solid black;
  text-decoration: none;
  text-align: center;
  font-size: 2em;
  color: white;

  &.active {
    color: #000000;
    background-color: white;
    font-weight: bold;
  }
`;


export const NavMenu = styled.div`
display: flex;
align-items: center;
margin: auto;
@media screen and (max-width: 768px) {
	display: none;
}
`;
