import React, {Component} from 'react'
import {Tab, Tabs, TabList,TabPanel} from 'react-tabs'
import { generateMedia } from 'styled-media-query'
import TabDoor from './tabs_nav/TabDoor'
import TabDevice from './tabs_nav/TabDevice'
import TabPrice from './tabs_nav/TabPrice'
//Tab Content
import TabContentOne from './TabContentOne'
import TabContentTwo from './TabContentTwo'
import TabContentThree from './TabContentThree'
import '../styles/TabNav.css'
class TabComponent extends Component{
    state = {
        tabIndex: 0
    }
    render(){
        return(
            <div>
                <Tabs className="tabs" selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({tabIndex})}>
                    <TabList className="tabs-container">
                        <Tab className={`${this.state.tabIndex === 0 ?'tab-selected active':null}`}>
                            <TabDoor/>
                            <p className="lgCancel"><strong>No commitment<br/> Cancel online at anytime</strong></p>
                            <p className="mdCancel"><strong>Cancel online</strong></p>
                            <p className="smCancel"><strong>Cancel</strong></p>
                        </Tab >
                        <Tab className={`${this.state.tabIndex === 1 ?'tab-selected active':null}`}>
                            <TabDevice/>
                            <p className="lgWatch" style={{marginTop:'-2.8rem'}}><strong>Watch anywhere</strong></p>
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 2 ?'tab-selected active':null}`}>
                            <TabPrice/>
                            <p className="lgPrice"><strong>Pick your price</strong></p>
                        </Tab>
                    </TabList>
                    {/* Tab Content */}
                    <TabPanel>
                        <TabContentOne/> 
                    </TabPanel>
                    <TabPanel>
                        <TabContentTwo/> 
                    </TabPanel>
                    <TabPanel>
                        <TabContentThree/> 
                    </TabPanel>
                </Tabs>     
            </div>
        )
    }
}
export default TabComponent
const customMedia = generateMedia({
    lgDesktop: '1350px',
    mdDesktop: '1150px',
    tablet: '960px',
    smTablet: '740px',
    phone: '540px'
})