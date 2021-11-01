
import './index.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home  from "./paginas/home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
} 

export default App;
