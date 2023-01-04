
const Personal = ()=>{
    return(
        <div className="personal-info">
              <h3>Informações pessoais</h3>
            <div className="firstname-field">
              <label htmlFor="firstName">Primeiro Nome</label>
              <input type="text" id="firstName" min={5} max="20" placeholder={"Pedro Algusto"} />
            </div>

            <div className="lastname-field">
              <label htmlFor="firstName">Último Nome</label>
              <input type="text" id="firstName" min={5} max='20' placeholder="Saraiva" />
            </div>

            <div className="title-field">
              <label htmlFor="title">Título</label>
              <input type="text" name="title" id="title" placeholder="Gerente / Professor / UX designer" />

            </div>

            {/* here in the personal info should reside an optinal "Sobre Mim" section */}
          
          </div>
    )
}

export default Personal