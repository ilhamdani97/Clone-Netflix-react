import React from 'react'
import styled from 'styled-components'
import {Button} from './Button'
import ImageTv from '../images/tab-tv.png'
import ImageTablet from '../images/tab-tablet.png'
import ImageMacBook from '../images/tab-macbook.png'

function TabContentTwo(){
    return(
        <TabContainer>
            <div className="tab-content">
                <div className="tab-top-content">
                    <span>
                        Watch TV shows and movie anytime, anywhere - personalize for you.
                    </span>
                    <Button className="btn">tri it now</Button>
                </div>
                {/* Tab Bottom Content */}
                <div className="tab-bottom-content">
                    {/* TV Image Container */}
                    <div>
                        <img src={ImageTv} style={{width: '18.75rem'}}/>
                        <h3>Watch on your TV</h3>
                        <p>Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray player and more.</p>
                    </div>
                    {/* Tablet Image Container */}
                    <div>
                        <img src={ImageTablet} style={{width: '18.75rem', paddingTop:'0.625rem'}}/>
                        <h3>Watch or download for later.</h3>
                        <p>Available on phone or tablet, wherever you go</p>
                    </div>
                    {/* MacBook Image Container */}
                    <div>
                        <img src={ImageMacBook} style={{width: '18.75rem', paddingTop:'0.625rem',paddingBottom:'0.625rem'}}/>
                        <h3>Use any computer</h3>
                        <p>Watch right on Netflix.com</p>
                    </div>
                </div>
            </div>
        </TabContainer>
    )
}
export default TabContentTwo

const TabContainer = styled.div`
    background: var(--main-deep-dark); 
    .tab-content{
        margin: 0 15%;
    }
    .tab-top-content{
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        justify-content: center;
        align-items: center;
        padding: 2.5rem 0;
    }
    span{
        grid-column: 1/8; 
        font-size: 1.5rem;
    }
    .btn{
        margin: 0 1.25rem 1.25rem;
        grid-column: 10/12;
    }
    //Tab Bottom Content
    .tab-bottom-content{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        text-align: center;
        margin-top: 2rem;
    }
    h3{
        margin: 0.5rem;
    }
    p{
        color: var(--main-grey);
    }
`;
