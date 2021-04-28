import React from "react";
import Link from "next/link";

function CardProduct(props) {
  const { data } = props;
  return (
    <>
      <div className="col-lg-4 col-md-6 col-12">
        <div className="single-product">
          <div className="product-img">
            <Link href="/">
              <a>
                <img className="default-img" src={data.product_img} alt="#" />
                <img className="hover-img" src={data.product_img} alt="#" />
              </a>
            </Link>
            <div className="button-head">
              <div className="product-action">
                <Link
                  data-toggle="modal"
                  data-target="#exampleModal"
                  title="Quick View"
                  href="/"
                >
                  <a>
                    <i className=" ti-eye" />
                    <span>Quick Shop</span>
                  </a>
                </Link>
                <Link title="Wishlist" href="/">
                  <a>
                    <i className=" ti-heart " />
                    <span>Add to Wishlist</span>
                  </a>
                </Link>
                <Link title="Compare" href="/">
                  <a>
                    <i className="ti-bar-chart-alt" />
                    <span>Add to Compare</span>
                  </a>
                </Link>
              </div>
              <div className="product-action-2">
                <Link title="Add to cart" href="/">
                  Add to cart
                </Link>
              </div>
            </div>
          </div>
          <div className="product-content">
            <h3>
              <Link href="/detail">{data.product_name}</Link>
            </h3>
            <div className="product-price">
              <span>${data.product_price}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProduct;
