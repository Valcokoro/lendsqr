import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import UsersNumber from './components/UsersNumber';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
       <div>
       <Switch>
       <Route path='/' exact component={LoginPage} />
       <Route path='/dashboard'  component={Dashboard} />
       <Route path='/users'  component={Users} />
       <Route path='/usersn'  component={UsersNumber} />
       </Switch>
       </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
