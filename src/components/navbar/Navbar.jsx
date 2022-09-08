import { Link } from "react-router-dom";
import { SearchModal } from "./SearchModal";
import React, { useState } from "react";
import "./css/style.css";

export const Navbar = () => {
  const [openModalSearch, setOpenModalSearch] = useState(false);

  return (
    <header className="main-header-area">
      <div className="header-top bg-pronia-primary d-none d-lg-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="header-top-left">
                <span className="pronia-offer">
                  HELLO EVERYONE! 25% Off All Products
                </span>
              </div>
            </div>
            <div className="col-6">
              <div className="header-top-right">
                <ul className="dropdown-wrap">
                  <li className="dropdown">
                    <button
                      className="btn btn-link dropdown-toggle ht-btn"
                      type="button"
                      id="currencyButton"
                      data-bs-toggle="dropdown"
                      aria-label="currency"
                      aria-expanded="false"
                    >
                      USD
                    </button>
                  </li>
                  <li className="dropdown">
                    <button
                      className="btn btn-link dropdown-toggle ht-btn"
                      type="button"
                      id="languageButton"
                      data-bs-toggle="dropdown"
                      aria-label="language"
                      aria-expanded="false"
                    >
                      Español
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-middle py-30">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="header-middle-wrap position-relative">
                <div className="header-contact d-none d-lg-flex">
                  <i className="pe-7s-call"></i>
                  <Link to="tel://+00-123-456-789">+00 123 456 789</Link>
                </div>

                <Link to="index.html" className="header-logo">
                  <img src="../../dark.png" alt="Header Logo" />
                </Link>
                <div className="header-right">
                  <ul>
                    <li>
                      <button
                        className="search-btn bt"
                        type="button"
                        onClick={() => {
                          setOpenModalSearch(!openModalSearch);
                        }}
                      >
                        <i className="pe-7s-search"></i>
                      </button>
                      {openModalSearch ? <SearchModal /> : null}
                    </li>
                    <li className="dropdown d-none d-lg-block">
                      <button
                        className="btn btn-link dropdown-toggle ht-btn p-0"
                        type="button"
                        id="settingButton"
                        data-bs-toggle="dropdown"
                        aria-label="setting"
                        aria-expanded="false"
                      >
                        <i className="pe-7s-users"></i>
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="settingButton"
                      >
                        <li>
                          <Link
                            className="dropdown-item"
                            to="login-register.html"
                          >
                            Login | Register
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="d-none d-lg-block">
                      <Link to="wishlist.html">
                        <i className="pe-7s-like"></i>
                      </Link>
                    </li>
                    <li className="minicart-wrap me-3 me-lg-0">
                      <button
                        className="minicart-btn toolbar-btn"
                        type="button"
                      >
                        <i className="pe-7s-shopbag"></i>
                        <span className="quantity">3</span>
                      </button>
                    </li>
                    <li className="mobile-menu_wrap d-block d-lg-none">
                      <Link
                        to="#mobileMenu"
                        className="mobile-menu_btn toolbar-btn pl-0"
                      >
                        <i className="pe-7s-menu"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-menu position-relative">
                <nav className="main-nav">
                  <ul>
                    <li className="drop-holder">
                      <Link to="index.html">Home</Link>
                    </li>
                    <li className="megamenu-holder">
                      <Link to="shop.html">Shop</Link>
                      <ul className="drop-menu megamenu">
                        <li>
                          <span className="title">Shop Layout</span>
                          <ul>
                            <li>
                              <Link to="shop.html">Shop Default</Link>
                            </li>
                            <li>
                              <Link to="shop-grid-fullwidth.html">
                                Shop Grid Fullwidth
                              </Link>
                            </li>
                            <li>
                              <Link to="shop-right-sidebar.html">
                                Shop Right Sidebar
                              </Link>
                            </li>
                            <li>
                              <Link to="shop-list-fullwidth.html">
                                Shop List Fullwidth
                              </Link>
                            </li>
                            <li>
                              <Link to="shop-list-left-sidebar.html">
                                Shop List Left Sidebar
                              </Link>
                            </li>
                            <li>
                              <Link to="shop-list-right-sidebar.html">
                                Shop List Right Sidebar
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <span className="title">Product Style</span>
                          <ul>
                            <li>
                              <Link to="single-product-variable.html">
                                Single Product Variable
                              </Link>
                            </li>
                            <li>
                              <Link to="single-product-group.html">
                                Single Product Group
                              </Link>
                            </li>
                            <li>
                              <Link to="single-product.html">
                                Single Product Default
                              </Link>
                            </li>
                            <li>
                              <Link to="single-product-affiliate.html">
                                Single Product Affiliate
                              </Link>
                            </li>
                            <li>
                              <Link to="single-product-sale.html">
                                Single Product Sale
                              </Link>
                            </li>
                            <li>
                              <Link to="single-product-sticky.html">
                                Single Product Sticky
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <span className="title">Product Related</span>
                          <ul>
                            <li>
                              <Link to="my-account.html">My Account</Link>
                            </li>
                            <li>
                              <Link to="login-register.html">
                                Login | Register
                              </Link>
                            </li>
                            <li>
                              <Link to="cart.html">Shopping Cart</Link>
                            </li>
                            <li>
                              <Link to="wishlist.html">Wishlist</Link>
                            </li>
                            <li>
                              <Link to="compare.html">Compare</Link>
                            </li>
                            <li>
                              <Link to="checkout.html">Checkout</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="about.html">About Us</Link>
                    </li>
                    <li>
                      <Link to="contact.html">Contact Us</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-sticky py-4 py-lg-0">
        <div className="container">
          <div className="header-nav position-relative">
            <div className="row align-items-center">
              <div className="col-lg-3 col-6">
                <Link to="index.html" className="header-logo">
                  <img src="assets/images/logo/dark.png" alt="Header Logo" />
                </Link>
              </div>
              <div className="col-lg-6 d-none d-lg-block">
                <div className="main-menu">
                  <nav className="main-nav">
                    <ul>
                      <li className="drop-holder">
                        <Link to="index.html">Home</Link>
                      </li>
                      <li className="megamenu-holder">
                        <Link to="shop.html">Shop</Link>
                        <ul className="drop-menu megamenu">
                          <li>
                            <span className="title">Shop Layout</span>
                            <ul>
                              <li>
                                <Link to="shop.html">Shop Default</Link>
                              </li>
                              <li>
                                <Link to="shop-grid-fullwidth.html">
                                  Shop Grid Fullwidth
                                </Link>
                              </li>
                              <li>
                                <Link to="shop-right-sidebar.html">
                                  Shop Right Sidebar
                                </Link>
                              </li>
                              <li>
                                <Link to="shop-list-fullwidth.html">
                                  Shop List Fullwidth
                                </Link>
                              </li>
                              <li>
                                <Link to="shop-list-left-sidebar.html">
                                  Shop List Left Sidebar
                                </Link>
                              </li>
                              <li>
                                <Link to="shop-list-right-sidebar.html">
                                  Shop List Right Sidebar
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <span className="title">Product Style</span>
                            <ul>
                              <li>
                                <Link to="single-product-variable.html">
                                  Single Product Variable
                                </Link>
                              </li>
                              <li>
                                <Link to="single-product-group.html">
                                  Single Product Group
                                </Link>
                              </li>
                              <li>
                                <Link to="single-product.html">
                                  Single Product Default
                                </Link>
                              </li>
                              <li>
                                <Link to="single-product-affiliate.html">
                                  Single Product Affiliate
                                </Link>
                              </li>
                              <li>
                                <Link to="single-product-sale.html">
                                  Single Product Sale
                                </Link>
                              </li>
                              <li>
                                <Link to="single-product-sticky.html">
                                  Single Product Sticky
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <span className="title">Product Related</span>
                            <ul>
                              <li>
                                <Link to="my-account.html">My Account</Link>
                              </li>
                              <li>
                                <Link to="login-register.html">
                                  Login | Register
                                </Link>
                              </li>
                              <li>
                                <Link to="cart.html">Shopping Cart</Link>
                              </li>
                              <li>
                                <Link to="wishlist.html">Wishlist</Link>
                              </li>
                              <li>
                                <Link to="compare.html">Compare</Link>
                              </li>
                              <li>
                                <Link to="checkout.html">Checkout</Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="drop-holder">
                        <Link to="blog.html">Blog</Link>
                        <ul className="drop-menu">
                          <li>
                            <Link to="blog-listview.html">Blog List View</Link>
                          </li>
                          <li>
                            <Link to="blog-detail.html">Blog Detail</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="about.html">About Us</Link>
                      </li>
                      <li className="drop-holder">
                        <Link to="#">Pages</Link>
                        <ul className="drop-menu">
                          <li>
                            <Link to="faq.html">FAQ</Link>
                          </li>
                          <li>
                            <Link to="404.html">Error 404</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="contact.html">Contact Us</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="global-overlay"></div>
    </header>
  );
};
