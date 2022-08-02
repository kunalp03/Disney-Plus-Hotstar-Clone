import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    function increaseWidth(e){
        // e.target.styled.input.wid 
    }
    return (
        <>
            <Nav>
                <CustomMenu />
                <Logo src="/images/disney-logo.png" />
                <NavMenu>
                    <ul>
                        <li><a href="#">TV</a></li>
                        <li><a href="#">Movies</a></li>
                        <li><a href="#">Sports</a></li>
                        <li><a href="#">Disney+</a></li>
                        <li><a href="#">KIDS</a></li>
                    </ul>
                </NavMenu>
                <RightNav>
                    <input placeholder="Search" className='searchbox'></input>
                    <button>Subscribe</button>
                    <div className="btn">Login</div>
                </RightNav>
            </Nav>
        </>
    )
}

export default Header

const Nav = styled.nav`
        overflow-x: hidden;
            height: 70px;
            background: linear-gradient(to bottom, #141b29, #0c111b 300px);
            display:flex;
            align-items: center;
            padding: 0 70px;
            font-family: "Roboto","HelveticaNeue-Light",sans-serif;
`
const CustomMenu = styled(MenuIcon)`
            cursor: pointer;
            color: white;
`
const Logo = styled.img`
            width: 115px;
            margin-bottom: 7px;
            padding: 0 30px;
`
const NavMenu = styled.div`
    flex: 1;
    ul{
        display: flex;
    }
    li{
        list-style: none;
    }
    a{
        padding-right: 40px;
        color: rgba(255, 255, 255, 0.8);
        text-decoration: none;
        position: relative;
        &:after{
            content: "";
            height: 2px;
            margin-right: 34px;
            background: white;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -6px;
            opacity: 0;
            transform-origin: left center;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform: scaleX(0);
        }
        &:hover{
            &:after{
                transform: scaleX(0.9);
                opacity: 1;
            }
        }
    }
`
const RightNav = styled.div`
    .searchbox:focus{
        width: 350px;
        border-color: #1f80e0;
        transition: 0.5s;
    }
    .btn{
        font-weight: 500;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.8);
        text-decoration: none;
        cursor: pointer;
        display: inline-block;
        padding: 13px 0;
        margin-left: 15px;
        opacity: 1;
        font-size: 14px;
    }

    input{
        background: transparent;
        border: none;
        border-bottom: 2px solid rgba(255, 255, 255, 0.6);;
        width: 240px;
        outline: none;
        ::placeholder {
            color: rgba(255, 255, 255, 0.8);
            font-size: 15px;
        }
    }

    button{
        background-color: #1f80e0;
        cursor: pointer;
        border-radius: 4px;
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 0.4px;
        padding: 2px 10px;
        margin-left: 22px;
        font-size: 12px;
        line-height: 19px;
    }            
`

