import React, {Component} from 'react'
import Header from '../component/Header'
import TabComponent from '../component/TabComponent'
import Footer from '../component/Footer'
class Main extends Component {
    render(){
        return(
            <div>
                <Header/>
                <TabComponent/>
                <Footer/>
            </div>
        )
    }
}
export default Main