import React from "react"
import Personal from "./Personal"
import Whereabouts from "./Whereabouts"

const Form = ()=> {
    
      return <div className="form-container">

        <form className="form">


            <Personal/>
            <Whereabouts/>
            {/* Experience&&<Experience/>  add experience? */}
        </form>


      </div>
    }
  

  export default Form