const Whereabouts = ()=>{

    return(
        <div className="whereabouts-section">

            <h3>Contato</h3>

            <div className="email-field">
                {/* give the user a security tip, tell him to use a professional, public email acc */}
                <label htmlFor="email">Email</label> 
                <input type="email" name="email" id="email" />
            </div>

            <div className="address-field">
                <label htmlFor="address">Endereço</label>
                <input type="text" name="address" id="address" placeholder="São Paulo, SP, Brazil" />
            </div>

            <div className="phone-field">
                <label htmlFor="phone">Fone</label>
                <input type="tel" name="" id="" placeholder="(xx) xxxxx-xxxx" pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}" />
            </div>

        </div>
            )
}

export default Whereabouts