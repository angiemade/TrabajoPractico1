import './App.css';
import Content from './componentes/content/Content';
import Footer from './componentes/footer/footer';
import Header from './componentes/header/Header';
import Menu from './componentes/menu/Menu';
import SideBar from './componentes/sideBar/SideBar';

function App() {
  return (
    <div className="contenedor">

      <div className="cont_header bordes">
        <Header />
      </div>
      <div className="cont_menu bordes">
        <Menu />
      </div>
      <div className="cont_content bordes">
        <div>
          <Content />
        </div>
      </div>
      <div className="cont_sideBar bordes">
        <SideBar />
      </div>
      <div className="cont_footer bordes">
        <Footer/>
      </div>
    </div>

  );
}

export default App;
