const Experience = ()=>{
    return (
        <div className="experience-field">
            <label htmlFor="aadicionarExperiencia?">Adicionar Experiência? <input type="checkbox"  id="adicionarExperiencia?" /></label>
                <h3>Experiêcia</h3>
            <div className="new-experience">
                <div className="company-name-container">
                    <label htmlFor="company-name">Nome da empresa</label>
                    <input type="text"  id="company-name" placeholder="Noma da empresa" />
                </div>
                <div className="experience-date-container">
                    <label htmlFor="experience-date">Período</label>
                    <input type="text"  id="experience-date" placeholder="jul/2020-set/2022" />
                </div>
                <div className="description-container">
                    <label htmlFor="descricao">Descrição</label>
                <textarea  id="descricao" cols="30" rows="10" placeholder="Aumentei a produtividade da equipe em 20% , reduzindo tempo de produlção de apps e organizando ambiente de trabalho;
Reduzi custos em 10% solicitando materiais ;
Participava de reuniões diárias com equipe de produção."></textarea>
                </div>
                
            
            </div>        

        </div>
    )
}



export default Experience