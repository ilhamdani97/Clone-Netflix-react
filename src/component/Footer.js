import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {Icon} from 'react-icons-kit'
import {iosWorld} from 'react-icons-kit/ionicons/iosWorld'
import {arrowSortedDown} from 'react-icons-kit/typicons/arrowSortedDown'

class Footer extends Component{
    render(){
        return(
            <FooterContainer>
                <span style={{marginLeft:'17.8%', fontSize:'1.125rem'}}>Question? <Link>Call 1-887-742-1335</Link></span>
                <div className="footer-columns">
                    <ul>
                        <li><Link>FAQ</Link></li>
                        <li><Link>Investor relation</Link></li>
                        <li><Link>Whys to watch</Link></li>
                        <li><Link>Corporate infonrmation</Link></li>
                        <li><Link>Netflix Original</Link></li>
                    </ul>
                    <ul>
                        <li><Link>Help center</Link></li>
                        <li><Link>Jobs</Link></li>
                        <li><Link>Terms of Use</Link></li>
                        <li><Link>Contact Us</Link></li>
                    </ul>
                    <ul>
                        <li><Link>Account</Link></li>
                        <li><Link>Redeem Gift Card</Link></li>
                        <li><Link>Privacy</Link></li>
                        <li><Link>Speed Test</Link></li>
                    </ul>
                    <ul>
                        <li><Link>Media Center</Link></li>
                        <li><Link>Buy Gift Card</Link></li>
                        <li><Link>Cookie Preference</Link></li>
                        <li><Link>Legal Notices</Link></li>
                    </ul>
                    {/* Language Button */}
                    <div className="lang-button">
                        <Icon icon={iosWorld} size={20}/>
                         &nbsp;&nbsp;English&nbsp;&nbsp;
                        <Icon icon={arrowSortedDown}/>
                    </div>
                </div>
                {/* <div className="language-toogle">
                     <ul>
                         <li>Indonesian</li>
                     </ul>
                     <ul>
                         <li>English</li>
                     </ul>
                </div> */}
                <span style={{marginLeft:'17.8%',fontSize:'0.9rem'}}>Netflix Indonesia</span>
            </FooterContainer>
        )
    }
}

export default Footer

const FooterContainer = styled.footer`
    background: var(--main-deep-dark);
    padding-top: 10rem;
    padding-bottom: 3rem;
    color: #999; 

    .footer-columns {
        width: 70%;
        margin: 1rem auto 0;
        font-size: 0.9rem;
        overflow: auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }
    ul li {
        list-style: none;
        line-height: 2.5;
    }
    a {
        color: #999;
    }
    a:hover {
        text-decoration: underline;
        cursor: pointer;
    }
    .lang-button {
        margin-left: 16%;
        background: transparent;
        border: 1px solid #333;
        padding: 0.9rem;
        width: 8rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
    .language-toogle {
        margin-left: 16%;
        position: absolute;
    }
    .language-toogle ul {
        background: var(--main-deep-dark);
        width: 8.125rem;
        border: 1px solid #333;
        text-align: center;
        &:hover {
            background: #0085ff; 
            color: #fff;    
        }
    }

`;