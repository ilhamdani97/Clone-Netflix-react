import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'
const customMedia = generateMedia({
    lgDesktop: '1350px',
    mdDesktop: '1150px',
    tablet: '960px',
    smTablet: '740px',
    phone: '540px'
})
export const Button = styled.button`
    font-weight: 800;
    display: inline-block;
    background: var(--main-red);
    border: none;
    font-size: ${props => props.primary ? '1.6rem': '0.8rem'};
    text-transform: uppercase;
    outline: none;
    margin: ${props => props.primary ? '0 33%' :'0'};
    padding: ${props => props.primary ? '1.5rem' : '0.8rem 1.3rem'};
    border-radius: 0.8rem;
    color: #fff;
    cursor: pointer;
    text-align: center;
    box-shadow: 0 1px 0 rgba(0,0,0,0.45);
    transition: background 0.2s ease-in;
    &:hover{
        background: var(--main-red-hover);
    }
    ${customMedia.lessThan('mdDesktop')`
        padding: ${props => props.primary ? '1.3rem' : '0.8rem 1.3rem'};
    `}
    ${customMedia.lessThan('tablet')`
        padding: ${props => props.primary ? '1.2rem' : '0.8rem 1.3rem'};
    `}
    ${customMedia.lessThan('smTablet')`
        padding: ${props => props.primary ? '0.7rem' : '0.8rem 1.3rem'};
    `}
    ${customMedia.lessThan('phone')`
        padding: ${props => props.primary ? '0.6rem' : '0.8rem 1.3rem'};
    `}
`;