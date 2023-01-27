import React from "react"
import Personal from "./Personal"
import Whereabouts from "./Whereabouts"
import Education from "./Education"
import Experience from "./Experience"
import Skills from "./Skills"
import Links from "./Links"

const Form = ({setData})=> {
    
      return <div className="form-container">

        <form className="form">


            <Personal updateData={setData}/>
            <Whereabouts updateData={setData}/>
            <Experience updateData={setData}/>  
            <Education updateData={setData}/>
            <Skills updateData={setData}/>
            <Links updateData={setData}/>
        </form>


      </div>
    }
  

  export default Form