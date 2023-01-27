
export default function Education (){

    return(<div>  <div className="education-field">
    <label htmlFor="adicionarEducacao?">Adicionar Educação? <input type="checkbox"  id="adicionarEducacao?" /></label>
        <h3>Formação</h3>
    <div className="new-education">
        <div className="institution-name-container">
            <label htmlFor="institution-name">Nome da Escola</label>
            <input type="text"  id="company-name" placeholder="UFRJ, Udesc, Colégio Bom Jesus" />
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

</div></div>)
}