import { useReducer } from 'react';

const initialState = {
  companyName: '',
  experienceDate: '',
  description: ''
};

function experienceReducer(state, action) {
  switch (action.type) {
    case 'updateCompanyName':
      return { ...state, companyName: action.payload };
    case 'updateExperienceDate':
      return { ...state, experienceDate: action.payload };
    case 'updateDescription':
      return { ...state, description: action.payload };
    default:
      return state;
  }
}

const Experience = ({ updateData }) => {
  const [state, dispatch] = useReducer(experienceReducer, initialState);

  const handleCompanyNameChange = event => {
    dispatch({ type: 'updateCompanyName', payload: event.target.value });
  };

  const handleExperienceDateChange = event => {
    dispatch({ type: 'updateExperienceDate', payload: event.target.value });
  };

  const handleDescriptionChange = event => {
    dispatch({ type: 'updateDescription', payload: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    updateData(previousState=>{
       return {...previousState, ...state}});
  };

  return (
    <div className="experience-field">
     
        <label htmlFor="addExperience">
          Você tem experiência profissional? <input type="checkbox" id="addExperience" />
        </label>
        <h3>Experiência</h3>
        <div className="new-experience">
          <div className="company-name-container">
            <label htmlFor="company-name">Nome da empresa</label>
            <input
              type="text"
              id="company-name"
              placeholder="Nome da empresa"
              value={state.companyName}
              onChange={handleCompanyNameChange}
            />
          </div>
          <div className="experience-date-container">
            <label htmlFor="experience-date">Período</label>
            <input
              type="text"
              id="experience-date"
              placeholder="jul/2020-set/2022"
              value={state.experienceDate}
              onChange={handleExperienceDateChange}
            />
          </div>
          <div className="description-container">
            <label htmlFor="descricao">Descrição</label>
            <textarea
              id="descricao"
              cols="30"
              rows="10"
              placeholder="Aumentei a produtividade da equipe em 20% , reduzindo tempo de produlção de apps e organizando ambiente de trabalho; Reduzi custos em 10% solicitando materiais; Participava de reuniões diárias com equipe de produção."
              value={state.description}
              onChange={handleDescriptionChange}
            ></textarea>

                </div>
                
            
            </div>

            <button onClick={handleSubmit}>salvar</button>        

        </div>
    )
}



export default Experience