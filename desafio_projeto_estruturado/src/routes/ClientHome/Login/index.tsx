import "./styles.css";

export default function Login() {
  return (
    <main>
      <section id="login-section" className="dsc-container">
        <div className="dsc-login-form-container">
          <form action="" className="dsc-form">
            <h2>Login</h2>
            <div className="dsc-form-controls-container">
              <div>
                <input type="text" className="dsc-form-control dsc-input-error" placeholder="Email" />
                <div className="dsc-form-error">Campo obrigatório</div>
              </div>
              <div>
                <input type="password" className="dsc-form-control" placeholder="Senha" />
              </div>
            </div>

            <div className="dsc-login-form-buttons">
              <button type="submit" className="dsc-button dsc-button-primary">Entrar</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}