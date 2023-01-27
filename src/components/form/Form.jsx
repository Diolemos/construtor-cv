import React from "react"
import Personal from "./Personal"
import Whereabouts from "./Whereabouts"
import Education from "./Education"
import Experience from "./Experience"

const Form = ()=> {
    
      return <div className="form-container">

        <form className="form">


            <Personal/>
            <Whereabouts/>
            <Experience/>  
            <Education/>
        </form>


      </div>
    }
  

  export default Form