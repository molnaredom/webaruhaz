import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";


import './App.css';
import Header from './components/Header'
import ProductsListPage from './pages/ProductsListPage'
import LoginPage from './pages/LoginPage'
import CartPage from './pages/CartPage'
import PrivateRoute from './utils/PrivateRoute'
import {AuthProvider} from "./context/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="container dark">
          <div className="app">
            <Header />
            <PrivateRoute path="/" exact component={ProductsListPage} />
            <Route path="/login" component={LoginPage} />
            <PrivateRoute path="/cart" component={CartPage} />
          </div>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
