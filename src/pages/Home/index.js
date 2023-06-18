import {Header} from "../../components/Header";
import background from '../../assets/background.png';
import ItemList from "../../components/ItemList";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />  
      <div className="conteudo">
        <img src={background} className="background" alt="background app" />
        <div className="info">
          <div>
            <input name="usuario" placeholder="@username" />
            <button>Buscar</button>
          </div>
          <div className="perfil">
            <img src="https://avatars.githubusercontent.com/u/112524429?v=4"
             className="profile" 
             alt="imagem de perfil" />
            <div>
              <h3>Teste</h3>
              <span>@KhalilBrito</span>
              <p>Description</p>
            </div>
          </div>
          <hr />
          <div>
            <h4 className="repositorio">Repositorios</h4>
            <ItemList title="Teste1" description="teste de description"/>
            <ItemList title="Teste1" description="teste de description"/>
            <ItemList title="Teste1" description="teste de description"/>
          </div>
        </div>  
      </div>
    </div>
  );
}

export default App;
