import './App.css';
import Counter from './component/Counter';
import Login from './component/CodeStepByStep/Login';
import Header from './component/CodeStepByStep/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from './component/CodeStepByStep/Register';
import AddProduct from './component/CodeStepByStep/AddProduct';
import UpdateProduct from './component/CodeStepByStep/UpdateProduct';
function App() {
  return (
    <div>
      {/* <Counter/> */}
      {/* <Login/> */}

      <BrowserRouter>
        <Header />

        <Route path='/login'><Login /></Route>
        <Route path='/register'><Register /></Route>
        <Route path='/addproduct'><AddProduct /></Route>
        <Route path='/updateproduct'><UpdateProduct /></Route>
      </BrowserRouter>

    </div>
  );
}

export default App;
