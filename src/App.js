import React, { Component } from "react";
import "./App.css";
import "./ProductList.css";
import { Product } from "./components/Product";
import data from "./server/index";

const products = data().products;

class App extends Component {
    render() {
        return (
            <div className="App">
                <ul className="ProductList">
                    {products.map(product => (
                        <Product data={product} key={product.id} />
                    ))}
                </ul>
            </div>
        );
    }
}

export default App;
