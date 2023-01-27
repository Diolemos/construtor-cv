import React from "react";


class Preview extends React.Component {
  render() {
    return <div className="preview">
        <div className="preview-body">  
         <div className="preview-header">
            <div className="preview-header__name">
            <h2>Fulano de Tal</h2>
         <h5>Engenheiro de Software</h5>
            </div>
            <div className="preview-header__info">
              <p className="adress">Joinville-SC, BR</p>
              <p className="telephpne">+55 47 123456789</p>
              <p className="email">fulano.tal@email.com</p>
            </div>
         
         {/* Optional component: row of social links */}
         
         </div>

         
         

        </div>


    </div>;
  }
}


export default Preview