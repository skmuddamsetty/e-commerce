import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header-nav-bar">Header Nav Bar</div>
        <div className="side-bar">
          <div className="side-bar__div">
            <h5 className="side-bar__title">Logo</h5>
          </div>
          <ul className="nav">
            <li className="nav__item">
              <div className="side-bar__div">
                <h5 className="side-bar__title">product categories</h5>
              </div>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                <span className="nav__link-text">Chairs</span>
                <span className="nav__link-count">4</span>
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                <span className="nav__link-text">fruits</span>
                <span className="nav__link-count">10</span>
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                <span className="nav__link-text">vegetables</span>
                <span className="nav__link-count">100</span>
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                <span className="nav__link-text">clocks</span>
                <span className="nav__link-count">1</span>
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                <span className="nav__link-text">toys</span>
                <span className="nav__link-count">2</span>
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                <span className="nav__link-text">bulbs</span>
                <span className="nav__link-count">9</span>
              </a>
            </li>
          </ul>
        </div>
        <main className="main-content">
          <div className="products-filters">
            <nav className="products-filters-nav">
              <ul className="products-filters-ul">
                <li className="products-filters-item">
                  Filter by Price Slider
                </li>
                <li className="products-filters-item">
                  Search Products Text box
                </li>
              </ul>
            </nav>
          </div>
          <div className="products">
            <div className="product__box">
              <div className="product__image__div">
                <img
                  src="https://images.unsplash.com/photo-1518131672697-613becd4fab5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cb83a90eb70b431ca38229d3100c2b1f&auto=format&fit=crop&w=750&q=80"
                  className="product__image"
                />
              </div>
              <div className="product__content-box">
                <h5 className="product__title">Watch 1</h5>
                <h6 className="product__price">$300.00</h6>
                <button className="btn-light-blue">View Product</button>
              </div>
            </div>
            <div className="product__box">
              <div className="product__image__div">Image</div>
              <div className="product__content-box">Product Content</div>
            </div>
            <div className="product__box">
              <div className="product__image__div">Image</div>
              <div className="product__content-box">Product Content</div>
            </div>
            <div className="product__box">
              <div className="product__image__div">Image</div>
              <div className="product__content-box">Product Content</div>
            </div>
          </div>
        </main>
        <footer className="footer">Footer</footer>
      </div>
    );
  }
}

export default App;
