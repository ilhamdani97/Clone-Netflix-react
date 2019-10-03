import React, {Component} from 'react'
import logo from '../svg/logo.svg'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {Icon} from 'react-icons-kit'
import {Button} from './Button'
import {ic_keyboard_arrow_right} from 'react-icons-kit/md/ic_keyboard_arrow_right'
import { generateMedia } from 'styled-media-query'

class Header extends Component{
    render(){
        return(
           <HeaderComponent className="header-container">
               <div className="header-top">
                    <Logo src={logo}/>
                    <button className="signIn-button">Sign In</button>
               </div>
               <div className="header-content">
                   <Title>See What's Next</Title>
                   <SubTitle>WHATCH ANYWAHRE. CANCEL ANY TIME</SubTitle>
                   <Button className="main-offer-button" primary>Tri it now 
                        <Icon className="Icon" icon={ic_keyboard_arrow_right} size={34}/>
                   </Button>
               </div>
           </HeaderComponent>
        )
    }
}

export default Header
//Responsive
const customMedia = generateMedia({
    lgDesktop: '1350px',
    mdDesktop: '1150px',
    tablet: '960px',
    smTablet: '740px',
    phone: '540px'
})
//Header
const HeaderComponent = styled.div`
    .signIn-button{
        color: #fff;
        right: 0;
        border: none;
        display: inline-block;
        margin:  1.125rem 3% 0;
        padding: 0.4375rem 1.0625rem;   
        line-height: normal;
        border-radius: 0.3rem;
        font-size: 0.8rem;
        font-weight: 800;
        background: var(--main-red);
        position: absolute;
        translate: transform(-50%, -50%);
        cursor: pointer;
        transition:  backgoroud 0.2s ease-in;
        &:hover{
            background: var(--main-red-hover);
        }
        ${customMedia.lessThan('smTablet')`
            margin-top: 1.25rem;    
            right: 5%;
        `}
    }   
    //Header Top
    .header-top{
        position: relative;
        height: 10rem;  
        z-index:1; 
    }
    //Header Content
    .header-content{
        width: 65%;
        position: relative;
        margin: 4.5rem auto 0;
        display: flex; 
        flex-direction: column;
        align-content: center;
        text-align: center;
        z-index: 1;
        
    }
    .Icon svg{
        vertical-align: bottom;
        margin-left: 1.5rem;
    }
    .main-offer-button{
        ${customMedia.lessThan('lgDesktop')`
            margin: 0 32%;
            font-size: 1.4rem;
        `}
        ${customMedia.lessThan('mdDesktop')`
            margin: 0 30%;
            font-size: 1.2rem;
        `}
        ${customMedia.lessThan('tablet')`
            margin: 0 28%;
            font-size: 1rem;
        `}
        ${customMedia.lessThan('smTablet')`
            margin: 1rem 25%;
            font-size: 0.9rem;
        `}
        ${customMedia.lessThan('phone')`
            margin: 1rem 25%;
            font-size: 0.8rem;
        `}
    }
`;
//Logo
const Logo = styled.img`
    width: 10rem;
    height: 3.5rem;
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${customMedia.lessThan('tablet')`
        left: 15%;
        top: 20%;
        width: 7rem;
        height: 2.8rem;
    `}
`;
//Main Title
const Title = styled.h1`
    margin: 0 0 1.2rem;
    font-size: 5rem;
    font-weight: 700;
    line-heigt: 1.2rem;
    ${customMedia.lessThan('tablet')`
        margin: 0 0 1rem;
        font-size: 4rem;
        line-height: 1rem
    `}
    ${customMedia.lessThan('smTablet')`
        margin: 0 0 0.8rem;
        font-size: 2.4rem;
        line-height: 1rem;
    `}
`;
//Subtitle
const SubTitle = styled.h2`
    margin: 0 0 1.875rem;
    font-size: 1.875rem;
    font-weight: 400;
    line-height: 1.25rem;
    text-transform: uppercase;
    ${customMedia.lessThan('tablet')`
        margin: 1.4rem 0 3rem;
        font-size: 1.450rem;
        font-weight: 400;
        line-height: 1.05rem;
    `}
    ${customMedia.lessThan('smTablet')`
        margin: 1rem 0 0.2rem;
        font-size: 0.9rem;
        font-weight: 400;
        line-height: 0.7rem;
    `}
`;
