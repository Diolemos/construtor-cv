import { useReducer } from "react";

function reducer(state, action) {
switch (action.type) {
case "UPDATE_FIRSTNAME":
return { ...state, firstName: action.payload };
case "UPDATE_LASTNAME":
return { ...state, lastName: action.payload };
case "UPDATE_TITLE":
return { ...state, title: action.payload };
default:
return state;
}
}

const initialState = { firstName: "", lastName: "", title: "" };

const Personal = ({ updateData }) => {
const [personaldata, dispatch] = useReducer(reducer, initialState);

function handleSubmit(event) {
event.preventDefault();
updateData(previousData => {
return { ...previousData, ...personaldata };
});
}


    return(
        <div className="personal-info">
              <h3>Informações pessoais</h3>
            <div className="firstname-field">
              <label htmlFor="firstName">Primeiro Nome</label>
              <input type="text" id="firstName" 
              min={5} max="20"
               placeholder={"Pedro Algusto"} 
               onChange={e =>dispatch({ type: "UPDATE_FIRSTNAME", payload: e.target.value })
                } />
            </div>

            <div className="lastname-field">
              <label htmlFor="firstName">Último Nome</label>
              <input type="text" 
              id="firstName" min={5}
               max='20'
              placeholder="Saraiva"
              onChange={e=>dispatch({type: "UPDATE_LASTNAME", payload: e.target.value})} />
            </div>

            <div className="title-field">
              <label htmlFor="title">Título</label>
              <input type="text" name="title" id="title" placeholder="Gerente / Professor / UX designer" 
              onChange={e=>dispatch({type:'UPDATE_TITLE',payload: e.target.value})}/>

            </div>



            {/* here in the personal info should reside an optinal "Sobre Mim" section */}
          
            <button onClick={handleSubmit}>Salvar</button>

          </div>
    )
}

export default Personal