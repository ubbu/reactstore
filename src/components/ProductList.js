import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
//import { storeProducts } from "../data";
import { ProductConsumer } from "../Context";
export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products"></Title>
            <div className="row">
              <ProductConsumer>
                {
                  (value) => {
                    return value.products.map((p) => {
                      return (
                        <Product
                          key={p.id}
                          product={p}
                          handleDetail={p.handleDetail}
                        ></Product>
                      );
                    });
                  }

                  /* {(value) => {
                  return value.products.map((p) => {
                    return <Product key={p.id} product={p}></Product>;
                  });
                }} */
                }
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
