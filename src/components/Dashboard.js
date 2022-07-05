import React from 'react'; 
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';
import icon from '../assets/icon.svg';
import logo from '../assets/logo.svg';
import search from '../assets/search.svg';
import bell from '../assets/bell.svg';
import user from '../assets/user.svg';
import users from '../assets/users.svg';
import users1 from '../assets/users1.svg';
import sorganization from '../assets/sorganization.svg';
import sorganization1 from '../assets/sorganization1.svg';
import dashboard from '../assets/dashboard.svg';
import dashboard1 from '../assets/dashboard1.svg';
import guarantors from '../assets/guarantors.svg';
import guarantors1 from '../assets/guarantors1.svg';
import loans from '../assets/loans.svg';
import loans1 from '../assets/loans1.svg';
import handshake from '../assets/handshake.svg';
import savings from '../assets/savings.svg';
import savings1 from '../assets/savings1.svg';
import requests from '../assets/requests.svg';
import requests1 from '../assets/requests1.svg';
import whitelist from '../assets/whitelist.svg';
import karma from '../assets/karma.svg';
import organization1 from '../assets/organization1.svg';
import organization2 from '../assets/organization2.svg';
import sproduct from '../assets/sproduct.svg';
import sproduct1 from '../assets/sproduct1.svg';
import fees from '../assets/fees.svg';
import transactions from '../assets/transactions.svg';
import transactions1 from '../assets/transactions1.svg';
import transactions2 from '../assets/transactions2.svg';
import services from '../assets/services.svg';
import saccount from '../assets/saccount.svg';
import saccount1 from '../assets/saccount1.svg';
import settlements from '../assets/settlements.svg';
import settlements1 from '../assets/settlements1.svg';
import reports from '../assets/reports.svg';
import reports1 from '../assets/reports1.svg';
import preferences from '../assets/preferences.svg';
import preferences1 from '../assets/preferences1.svg';
import pricing from '../assets/pricing.svg';
import pricing1 from '../assets/pricing1.svg';
import audit from '../assets/audit.svg';
import audit1 from '../assets/audit1.svg';


class Dashboard extends React.Component{
  
   

    render(){
        return (
        <section>
          <div>
           <img src={icon} alt='icon' className='icon-dashboard'/>
           <img src={logo} alt='logo' className='logo-dashboard'/>
           <form>
             <input name='search' type='text' 
             placeholder='Search for anything'
             className='dashboard-search'
             />
             <button className='search-btn'>
               <img src={search} 
               alt='search-icon' 
               className='search-icon'/>
              </button>
           </form>
           <a href='/dashboard' className='docs'>Docs</a>
           <img src={bell} alt='bell sign' className='bell'/>
           <img src={user} alt='user' className='user-image'/>
           <p className='current-user'>Candice</p>
           <select className='select'></select>
          </div>
          <div className='sidemenu'>
            <img src={sorganization} alt='organization icon' className='organization-icon'/>
            <img src={sorganization1} alt='organization icon' className='sorganization1-icon'/>
            <p className='switch'>Switch Organization</p>
            <select className='select-org'>
            <option value={user.organization}></option>
          </select>
            <img src={dashboard} alt='dashboard icon' className='dashboard-icon'/>
            <img src={dashboard1} alt='dashboard icon' className='dashboard1-icon'/>
            <a href='/dashboard' className='dashboard'>Dashboard</a>
            <p className='customers'>CUSTOMERS</p>
            <img src={users} alt='users icon' className='users-icon'/>
            <img src={users1} alt='users icon' className='users1-icon'/>
            <Link to='/users' className='users'>Users</Link>
            <img src={guarantors} alt='guarantors icon' className='guarantors-icon'/>
            <img src={guarantors1} alt='guarantors icon' className='guarantors1-icon'/>
            <a href='/dashboard' className='guarantors'>Guarantors</a>
            <img src={loans} alt='loans icon' className='loans-icon'/>
            <img src={loans1} alt='loans icon' className='loans1-icon'/>
            <a href='/dashboard' className='loans'>Loans</a>
            <img src={handshake} alt='handshake icon' className='handshake-icon'/>
            <a href='/dashboard' className='decision'>Decision Models</a>
            <img src={savings} alt='savings icon' className='savings-icon'/>
            <img src={savings1} alt='savings icon' className='savings1-icon'/>
            <a href='/dashboard' className='savings'>Savings</a>
            <img src={requests} alt='loan request icon' className='requests-icon'/>
            <img src={requests1} alt='loan request icon' className='requests1-icon'/>
            <a href='/dashboard' className='requests'>Loan Requests</a>
            <img src={whitelist} alt='whitelist icon' className='whitelist-icon'/>
            <a href='/dashboard' className='whitelist'>Whitelist</a>
            <img src={karma} alt='karma icon' className='karma-icon'/>
            <a href='/dashboard' className='karma'>Karma</a>
            <p className='businesses'>BUSINESSES</p>
            <img src={organization1} alt='organization icon' className='organization1-icon'/>
            <img src={organization2} alt='organization icon' className='organization2-icon'/>
            <a href='/dashboard' className='organization1'>Organization</a>
            <img src={requests} alt='loan products icon' className='loan-products'/>
            <img src={requests1} alt='loan products icon' className='loan-products1'/>
            <a href='/dashboard' className='products'>Loan Products</a>
            <img src={sproduct} alt='savings products icon' className='savings-products'/>
            <img src={sproduct1} alt='savings products icon' className='savings-products1'/>
            <a href='/dashboard' className='savings-product'>Savings Products</a>
            <img src={fees} alt='fees icon' className='fees'/>
            <a href='/dashboard' className='fees-charges'>Fees and Charges</a>
            <img src={transactions} alt='transactions icon' className='transactions-icon'/>
            <img src={transactions1} alt='transactions icon' className='transactions1-icon'/>
            <img src={transactions2} alt='transactions icon' className='transactions2-icon'/>
            <a href='/dasboard' className='transactions'>Transactions</a>
            <img src={services} alt='services icon' className='services-icon'/>
            <a href='/dashboard' className='services'>Services</a>
            <img src={saccount} alt='service account icon' className='saccount-icon'/>
            <img src={saccount1} alt='service account icon' className='saccount1-icon'/>
            <a href='/dashboard' className='service-account'>Service Account</a>
            <img src={settlements} alt='settlements icon' className='settlements-icon'/>
            <img src={settlements1} alt='settlements icon' className='settlements1-icon'/>
            <a href='/dashboard' className='settlements'>Settlements</a>
            <img src={reports} alt='reports icon' className='reports-icon'/>
            <img src={reports1} alt='reports icon' className='reports1-icon'/>
            <a href='/dashboard' className='reports'>Reports</a>
            <p className='settings'>SETTINGS</p>
            <img src={preferences} alt='preferences icon' className='preferences-icon'/>
            <img src={preferences1} alt='preferences icon' className='preferences1-icon'/>
            <a href='/dashboard' className='preferences'>Preferences</a>
            <img src={pricing} alt='pricing icon' className='pricing-icon'/>
            <img src={pricing1} alt='pricing icon' className='pricing1-icon'/>
            <a href='/dashboard' className='pricing'>Fees and Pricing</a>
            <img src={audit} alt='audit icon' className='audit-icon'/>
            <img src={audit1} alt='audit icon' className='audit1-icon'/>
            <a href='/dashboard' className='audit'>Audit Logs</a>
           </div>
           {this.props.children}
        </section>
        )
    }
}







export default Dashboard;

