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
    <Home/>
    <Switch>
      <Route exact path='/' component={ContactList}/>
      <Route  path={['/add','/edit']} component={Add}/>
      <Route  path='/*' component={Errors}/>
      
    </Switch>
    </>
  );
}

export default App;
