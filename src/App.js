import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import UserDetails from './Components/UserDetails/UserDetails';
import Users from './Components/Users/Users';

function App() {
  return (
    <BrowserRouter>

      <header className="App-header">
        <p>
          Mi proyecto
        </p>
      </header>

      <Switch>
        <Route path="/" component={Users} exact />
        <Route path="/UserDetails" component={UserDetails} exact />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
