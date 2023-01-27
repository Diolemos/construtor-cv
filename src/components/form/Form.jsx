import React from "react"
import Personal from "./Personal"
import Whereabouts from "./Whereabouts"
import Education from "./Education"

const Form = ()=> {
    
      return <div className="form-container">

        <form className="form">


            <Personal/>
            <Whereabouts/>
            {/* Experience&&<Experience/>  add experience? */}
            <Education/>
        </form>


      </div>
    }
  

  export default Form