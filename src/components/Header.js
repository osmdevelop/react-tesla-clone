import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars);
    console.log(cars);

    return (
        <Container>
            <a href='#'>
                <img src='images/logo.svg' alt='logo' />
            </a>
            <Menu>
                {cars && cars.map((car, index) => (
                    <a key={index} href='#'>{car}</a>
                ))}
            </Menu>
            <RightMenu>
                <a href='#'>Shop</a>
                <a href='#'>Account</a>
                <CustomMenu onClick={() => setBurgerStatus(true)} />
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)} />
                </CloseWrapper>
                {cars && cars.map((car, index) => (
                    <li key={index}><a href='#'>{car}</a></li>
                ))}
                <li><a href='#'>Existing Inventory</a></li>
                <li><a href='#'>Used Inventory</a></li>
                <li><a href='#'>Trade-in</a></li>
                <li><a href='#'>Cybertruck</a></li>
                <li><a href='#'>Roadster</a></li>
                <li><a href='#'>Semi</a></li>
                <li><a href='#'>Utilities</a></li>
                <li><a href='#'>Accessories</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

    img {
        max-width: 140px;
    }
`

const Menu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex: 1;

    a {
        font-size: 14px;
        font-weight: 600;
        padding: 7px 15px;
        flex-wrap: nowrap;
    }
    
    a:hover {
        background-color: #3B3D4110;
        transition: 0.5s;
        border-radius: 4px;
    }

    @media(max-width: 1200px) {
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 600;
        padding: 7px 15px;
        margin-right: 10px;
    }

    a:hover {
        background-color: #3B3D4110;
        transition: 0.5s;
        border-radius: 4px;
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;

    background-color: #fff;
    width: 300px;
    z-index: 100;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    // align-items: flex-start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s ease-in;

    a:hover {
        transition: 0.2s;
    }

    li {
        margin: 4px 0;
        font-size: 14px;
        padding: 10px 7px;
        // border-bottom: 1px solid rgba(0, 0, 0, 0.2)
        border-radius: 4px;
    }
    a {
        font-weight: 600;
        // color: red;
    }

    li:hover {
        background-color: #F2F2F2;
        transition: 0.25s
    }
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`