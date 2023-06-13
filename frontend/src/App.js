import {
  HashRouter as Router,
  Route
} from "react-router-dom";


import './App.css';
import Header from './components/Header'
import ProductsListPage from './pages/ProductsListPage'
import Cart from './pages/Cart'
import {Login} from "./pages/Login";
// import {Logout} from './components/logout';
import LoginPage from './pages/LoginPage'
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <Router>
      <AuthProvider>
          <Header/>
          <PrivateRoute component={ProductsListPage} path="/" exact/>
          <Route component={LoginPage} path="/login"/>
      </AuthProvider>
      <div className="container dark">
        <div className="app">
          <Header />
          <Route path="/" exact component={ProductsListPage} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/login" element={<Login/>}/>
          {/*<Route path="/logout" element={<Logout/>}/>*/}
        </div>
      </div>
    </Router>
  );
}

export default App;
