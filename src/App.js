
import './index.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home  from "./paginas/home";
import Login  from "./componentes/login";
import DashLogin  from "./componentes/dashLogin";
import About  from "./paginas/about";
import PerfilesHome  from "./paginas/perfilesHome";
import FrmProyectos  from "./paginas/frmProyecto";
import DashboardHead  from "./componentes/dashboarHead";
import Footer  from "./componentes/footer";
import Dashboard  from "./componentes/dashboard";
import SimpleMap  from "./componentes/maps";
import ImgCompleto  from "./componentes/imgCompleto";



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/proyectos" component={FrmProyectos} />
        <Route exact path="/perfiles" component={PerfilesHome} />
        <Route exact path="/login" component={DashLogin} />
      </Switch>
    </Router>
  );
} 

export default App;
