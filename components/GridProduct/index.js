import React from "react";
import Link from "next/link";
import CardProduct from "./CardProduct";

function index(props) {
  return (
    <>
      <section className="product-area shop-sidebar shop section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-12">
              <div className="shop-sidebar">
                <div className="single-widget category">
                  <h3 className="title">Categories</h3>
                  <ul className="categor-list">
                    <li>
                      <Link href="/">T-shirts</Link>
                    </li>
                    <li>
                      <Link href="/">jacket</Link>
                    </li>
                    <li>
                      <Link href="/">jeans</Link>
                    </li>
                    <li>
                      <Link href="/">sweatshirts</Link>
                    </li>
                    <li>
                      <Link href="/">trousers</Link>
                    </li>
                    <li>
                      <Link href="/">kitwears</Link>
                    </li>
                    <li>
                      <Link href="/">accessories</Link>
                    </li>
                  </ul>
                </div>
                <div className="single-widget range">
                  <h3 className="title">Shop by Price</h3>
                  <div className="price-filter">
                    <div className="price-filter-inner">
                      <div
                        id="slider-range"
                        className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                      >
                        <div
                          className="ui-slider-range ui-widget-header ui-corner-all"
                          style={{ width: "26%", left: "24%" }}
                        />
                        <span
                          className="ui-slider-handle ui-state-default ui-corner-all"
                          tabIndex={0}
                          style={{ left: "24%" }}
                        />
                        <span
                          className="ui-slider-handle ui-state-default ui-corner-all"
                          tabIndex={0}
                          style={{ left: "50%" }}
                        />
                      </div>
                      <div className="price_slider_amount">
                        <div className="label-input">
                          <span>Range:</span>
                          <input
                            type="text"
                            id="amount"
                            name="price"
                            placeholder="Add Your Price"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className="check-box-list">
                    <li>
                      <label className="checkbox-inline" htmlFor={1}>
                        <input name="news" id={1} type="checkbox" />
                        $20 - $50<span className="count">(3)</span>
                      </label>
                    </li>
                    <li>
                      <label className="checkbox-inline" htmlFor={2}>
                        <input name="news" id={2} type="checkbox" />
                        $50 - $100<span className="count">(5)</span>
                      </label>
                    </li>
                    <li>
                      <label className="checkbox-inline" htmlFor={3}>
                        <input name="news" id={3} type="checkbox" />
                        $100 - $250<span className="count">(8)</span>
                      </label>
                    </li>
                  </ul>
                </div>

                <div className="single-widget recent-post">
                  <h3 className="title">Recent post</h3>

                  <div className="single-post first">
                    <div className="image">
                      <img
                        src="https://wpthemesgrid.com/themes/eshop/images/modal2.png"
                        alt="#"
                      />
                    </div>
                    <div className="content">
                      <h5>
                        <Link href="/">Girls Dress</Link>
                      </h5>
                      <p className="price">$99.50</p>
                      <ul className="reviews">
                        <li className="yellow">
                          <i className="ti-star" />
                        </li>
                        <li className="yellow">
                          <i className="ti-star" />
                        </li>
                        <li className="yellow">
                          <i className="ti-star" />
                        </li>
                        <li>
                          <i className="ti-star" />
                        </li>
                        <li>
                          <i className="ti-star" />
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="single-post first">
                    <div className="image">
                      <img
                        src="https://wpthemesgrid.com/themes/eshop/images/single-shop-img2.png"
                        alt="#"
                      />
                    </div>
                    <div className="content">
                      <h5>
                        <Link href="/">Women Clothings</Link>
                      </h5>
                      <p className="price">$99.50</p>
                      <ul className="reviews">
                        <li className="yellow">
                          <i className="ti-star" />
                        </li>
                        <li className="yellow">
                          <i className="ti-star" />
                        </li>
                        <li className="yellow">
                          <i className="ti-star" />
                        </li>
                        <li className="yellow">
                          <i className="ti-star" />
                        </li>
                        <li>
                          <i className="ti-star" />
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="single-post first">
                    <div className="image">
                      <img
                        src="https://wpthemesgrid.com/themes/eshop/images/single-shop-img1.png"
                        alt="#"
                      />
                    </div>
                    <div className="content">
                      <h5>
                        <Link href="/">Man Tshirt</Link>
                      </h5>
                      <p className="price">$99.50</p>
                      <ul className="reviews">
                        <li className="yellow">
                          <i className="ti-star" />
                        </li>
                        <li className="yellow">
                          <i className="ti-star" />
                        </li>
                        <li className="yellow">
                          <i className="ti-star" />
                        </li>
                        <li className="yellow">
                          <i className="ti-star" />
                        </li>
                        <li className="yellow">
                          <i className="ti-star" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="single-widget category">
                  <h3 className="title">Manufacturers</h3>
                  <ul className="categor-list">
                    <li>
                      <Link href="/">Forever</Link>
                    </li>
                    <li>
                      <Link href="/">giordano</Link>
                    </li>
                    <li>
                      <Link href="/">abercrombie</Link>
                    </li>
                    <li>
                      <Link href="/">ecko united</Link>
                    </li>
                    <li>
                      <Link href="/">zara</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-8 col-12">
              <div className="row">
                <div className="col-12">
                  <div className="shop-top">
                    <div className="shop-shorter">
                      <div className="single-shorter">
                        <label>Show :</label>
                        <select style={{ display: "none" }}>
                          <option selected="selected">09</option>
                          <option>15</option>
                          <option>25</option>
                          <option>30</option>
                        </select>
                        <div className="nice-select" tabIndex={0}>
                          <span className="current">09</span>
                          <ul className="list">
                            <li data-value={9} className="option selected">
                              09
                            </li>
                            <li data-value={15} className="option">
                              15
                            </li>
                            <li data-value={25} className="option">
                              25
                            </li>
                            <li data-value={30} className="option">
                              30
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="single-shorter">
                        <label>Sort By :</label>
                        <select style={{ display: "none" }}>
                          <option selected="selected">Name</option>
                          <option>Price</option>
                          <option>Size</option>
                        </select>
                        <div className="nice-select" tabIndex={0}>
                          <span className="current">Name</span>
                          <ul className="list">
                            <li data-value="Name" className="option selected">
                              Name
                            </li>
                            <li data-value="Price" className="option">
                              Price
                            </li>
                            <li data-value="Size" className="option">
                              Size
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <ul className="view-mode">
                      <li className="active">
                        <Link href="shop-grid.html">
                          <i className="fa fa-th-large" />
                        </Link>
                      </li>
                      <li>
                        <Link href="shop-list.html">
                          <i className="fa fa-th-list" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                {props.data.map((data) => (
                  <CardProduct data={data} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default index;
