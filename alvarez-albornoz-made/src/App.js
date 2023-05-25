import './App.css';
import Header from './componentes/header/Header';

function App() {
  return (
    <div className="contenedor">

      <div className="cont_header bordes"> 
       <Header/>
      </div>
      <div className="cont_menu bordes">
        <div>
            <ul>
              <li><button>Inicio</button></li>
              <li><button>Inicio</button></li>
              <li><button>Inicio</button></li>
            </ul>
        </div>

      </div>
      <div className="cont_content bordes">
        <div>

          <div className="ttt"></div>
          <div className="ttt"></div>
          <div className="ttt"></div>

        </div>
      </div>
      <div className="cont_sideBar bordes">

        <div>
          <h1>Hola</h1>
          <ul>

            <li></li>
            <li></li>

          </ul>
        </div>
      </div>
      <div className="cont_footer bordes">

        <div>
          <h1>Chau</h1>
        </div>
        <div>
          <p>tt</p>
          <p>tt</p>
          <p>tt</p>

        </div>

      </div>

    </div>
    
  );
}

export default App;
