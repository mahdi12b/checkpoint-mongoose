import {Switch,Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/navbar/NavBar'
import Home from './pages/Home'
import ContactList from './pages/ContactList'
import Add from './pages/Add'
import Errors from './pages/Errors'
function App() {
  return (
    <>
    <NavBar/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route  path='/contacts' component={ContactList}/>
      <Route  path='/add' component={Add}/>
      <Route  path='/*' component={Errors}/>
      
    </Switch>
    </>
  );
}

export default App;
