import {
  HashRouter as Router,
  Route
} from "react-router-dom";


import './App.css';
import Header from './components/Header'
import ProductsListPage from './pages/ProductsListPage'

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Route path="/" exact component={ProductsListPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
