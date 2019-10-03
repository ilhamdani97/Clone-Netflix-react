import React from 'react'
import styled from 'styled-components'
import {Button} from './Button'
import {Icon} from 'react-icons-kit'
import {cross} from 'react-icons-kit/icomoon/cross'
import {checkmark} from 'react-icons-kit/icomoon/checkmark'

function TabContentThree(){
    return(
        <TabContainer>
            <div className="tab-content">
                <div className="tab-top-content">
                    <span>Choose one  plan and watch everything on Netflix.</span>
                    <Button className="btn">tri it now</Button>
                </div>
                {/* Bottom Content */}
                <div className="tab-bottom-content">
                    <table>
                        <tr>
                            <th></th>
                            <th>Basic</th>
                            <th>Standart</th>
                            <th>Premium</th>
                        </tr>
                        <tbody>
                            <tr>
                                <td>Montly price</td>
                                <td>$9.99</td>
                                <td>$13.99</td>
                                <td>$16.99</td>
                            </tr>
                            <tr>
                                <td>HD available</td>
                                <td><Icon icon={cross} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                            </tr>
                            <tr>
                                <td>Ultra HD available</td>
                                <td><Icon icon={cross} size={10}/></td>
                                <td><Icon icon={cross} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                            </tr>
                            <tr>
                                <td>Screen you can watch on at the same time</td>
                                <td>1</td>
                                <td>2</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>Watch on your laptop, TV, phone and tablet</td>
                                <td><Icon icon={checkmark} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                            </tr>
                            <tr>
                                <td>Unlimited movies and TV show</td>
                                <td><Icon icon={checkmark} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                            </tr>
                            <tr>
                                <td>Cancel anytime</td>
                                <td><Icon icon={checkmark} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </TabContainer>
    )
}
export default TabContentThree

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
        grid-column: 3/9; 
        font-size: 1.4rem;
    }
    .btn{
        margin: 0 1.25rem 1.25rem;
        grid-column: 10/12;
    }
    //Bottom Content
    .tab-bottom-content{
        padding-bottom: 4rem auto;
    }
    //Table
    table {
        width: 100%;
        margin-top: 2rem;
        border-collapse: collapse;
    }
    table thead th {
        text-transform: uppercase;
        padding: 0.8rem;
    }
    table tbody {
        display: table-row-group;
        vertical-align: middle;
        border-color: inherit;
    }
    table tbody tr td {
        color: #999;
        padding: 0.8rem 1.2rem;
        text-align: center;
    }
    table tbody tr td:first-child {
        text-align: left; 
    }
    table tbody tr:nth-child(even) {
        background: #222;
    }
`;