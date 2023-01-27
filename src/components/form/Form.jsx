import React from "react"
import Personal from "./Personal"
import Whereabouts from "./Whereabouts"
import Education from "./Education"
import Experience from "./Experience"
import Skills from "./Skills"

const Form = ()=> {
    
      return <div className="form-container">

        <form className="form">


            <Personal/>
            <Whereabouts/>
            <Experience/>  
            <Education/>
            <Skills/>
        </form>


      </div>
    }
  

  export default Form