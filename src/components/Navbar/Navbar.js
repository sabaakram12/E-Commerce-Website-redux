import React, { useEffect, useState } from 'react';
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../../Store/CategorySlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const { data: categories } = useSelector((state) => state.category);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <nav className='navbar'>
      <div className='navbar-content'>
        <div className='container'>
          <div className='navbar-top flex flex-between'>
            <Link to="/" className="navbar-brand">
              <span className='text-regal-blue'>Shopping</span>
              <span className='text-gold'>Hub.</span>
            </Link>
            <form className='navbar-search flex'>
              <input type="text" placeholder='search here ...' />
              <button type='submit' className='navbar-search-btn'>
                <i className='fas fa-search'></i>
              </button>
            </form>
            <div className='navbar-btn'>
              <Link to="/cart" className='add-to-btn flex'>
                <span className='btn-ico'>
                  <i className='fas fa-shopping-cart'></i>
                </span>
                <div className='btn-text fw-5'>cart<span className='cart-count-value'>0</span></div>
              </Link>
            </div>
          </div>
        </div>
        <div className='navbar-between bg-regal-blue'>
          <div className='container flex flex-between'>
            <ul className={`nav-links flex ${isSidebarOpen ? 'show-nav-links' : ""}`}>
              <button type='button' className='navbar-hide-btn text-white'
                onClick={() => setIsSidebarOpen(false)}
              >
                <i className='fas fa-times'></i>
              </button>
              {
                categories.map(category => (
                  <li key={category.id}>
                    <Link to={`/category/${category.id}`} className='nav-link text-white' onClick={() => setIsSidebarOpen(false)}>{category.name}</Link>
                  </li>
                ))
              }
            </ul>
            <button type='button' className='navbar-show-btn text-gold'
              onClick={() => setIsSidebarOpen(true)}>
              <i className='fas fa-bars'></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
