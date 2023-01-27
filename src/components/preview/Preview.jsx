import React from "react";


function Preview({data}) {
  
    return (<div className="preview">
        <div className="preview-body">  
         <div className="preview-header">
            <div className="preview-header__name">
            <h2>{`${data.firstName} ${data.lastName}`}</h2>
         <h5>{data.title}</h5>
            </div>
            <div className="preview-header__info">
              <p className="adress">{data.adress}</p>
              <p className="telephpne">{data.phone}</p>
              <p className="email">{data.email}</p>
            </div>
         <div className="Experience">
          <h2>Experience</h2>
          {/* the app will dynamically render a list of experience, meanwhile I will place a placeholder experience field */}
          <p>{data.companyName}</p>
          <p>{data.experienceDate}</p>
          <p>{data.description}</p>
         </div>
         {/* Optional component: row of social links */}
         
         </div>


         

        </div>


    </div>
  )
}


export default Preview