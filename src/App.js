import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import UsersNumber from './components/UsersNumber';
import UserDetails from './components/UserDetails';
import UsersTable from './components/UsersTable';
import Navbar from './components/Navbar/Navbar';
import GeneralDetails from './components/GeneralDetails';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route path='/' exact component={LoginPage} />
          <Route path='/user' exact component={Users} />
          <Route path='/usersn' exact component={UsersNumber} />
          <Route path='/dashboard' exact component={Dashboard} />
          <Route path='/userstable' exact component={UsersTable} />
          <Route path='/generaldetails' exact component={GeneralDetails} />
          <Route path={[
              '/users',
              '/usersn',
              '/userdetails',
            ]}
            exact
          >
            <Dashboard>
              <Switch>
                <Route path='/users' exact component={Users} />
                <Route path='/userdetails' exact component={UserDetails} />
                {/*<Route path='/generaldetails'  component={GeneralDetails} />*/}
              </Switch>
            </Dashboard>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
