import React, { Component } from 'react'
import Footer from './footer/Footer'
import Form from './form/Form'
import Header from './Header/Header'
import Preview from './preview/Preview'

class App extends Component {
    render(){
        return(
            <div className='app'> <Header></Header>
                <div className='container'>
                    <Form/>
                    <Preview/>
                </div>
                
                <Footer></Footer> </div>
        )
    }
}

export default App