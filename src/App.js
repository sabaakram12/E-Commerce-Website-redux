import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// pages
import {Home, Category, Cart} from "./Pages/index";
// components
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import {Provider} from 'react-redux';
import Store from "./Store/store";

function App() {
  return (
    <div className="App">
      <Provider store = {Store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/category/:id" element = {<Category />} />
            <Route path = "/cart" element = {<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;