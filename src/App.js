import './App.css';
import Body from './Body';
import NavbarTop from './Navbar';
import { Route, Switch } from 'react-router-dom'
import Cleaning from './Cleaning';
import Barber from './Barber';

function App() {
  return (
    <div className="App">
     <NavbarTop/>
      <Switch>
        <Route path='/cleaning' component={Cleaning}/>
        <Route path='/barber' component={Barber}/>
        <Route exact path='/' component={Body}/>
      </Switch>
    </div>
  ); 
}

export default App;
