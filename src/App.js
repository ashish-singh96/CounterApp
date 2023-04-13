import './App.css';
import Counter from './component/Counter';
import Login from './component/CodeStepByStep/Login';
import Header from './component/CodeStepByStep/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from './component/CodeStepByStep/Register';
import AddProduct from './component/CodeStepByStep/AddProduct';
import UpdateProduct from './component/CodeStepByStep/UpdateProduct';
import Sidebar from './component/DemoSite/SideBar/Sidebar';
import Navbar from './component/DemoSite/NavBar/Navbar'

function App() {
  return (
    <div>
         <Navbar/>
         <Sidebar/>

    </div>
  );
}

export default App;
