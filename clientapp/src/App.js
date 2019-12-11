import React from 'react';
import Logo from './logo.svg';
import Axios from 'axios';
import SideNav from './components/SideNav/SideNav';
import GetUsers from '../src/components/GetUsers';
import Test from './Functional_Components/Test'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        users: []
    }
  }
  render(){ 
    return (
      <div>
        <SideNav />
        <GetUsers />
        <Test />
      </div>
    );
  }
}

export default App;