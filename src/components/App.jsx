import  { useState } from 'react'
import Footer from './footer/Footer'
import Form from './form/Form'
import Header from './Header/Header'
import Preview from './preview/Preview'

function App() {
    const [data, setData] = useState({
        firstName: 'Fulano',
        lastName: 'de Tal',
        title: 'Engenheiro de Sotware',
        email: 'fuLaNo@email.com',
        phone: '+55 47 123 4567',
        adress: 'Joinville, SC, Brasil',
        links:[],
        education: [],
        companyName: '',
        experienceDate: '',
        description: '',
        skills: [],
    })
    
        return(
            <div className='app'> <Header></Header>
                <div className='container'>
                    <Form data={data} setData={setData}/>
                    <Preview data={data}/>
                </div>
                
                <Footer></Footer> </div>
        )
    
}

export default App