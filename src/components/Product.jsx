import React, { Component } from "react";
import "./ProductCard.css";
import { DummyImage } from "./DummyImage";

export class Product extends Component {
    render() {
        return (
            <li className="ProductCard">
                <DummyImage
                    content={this.props.data.image.content}
                    color={this.props.data.image.color}
                    background={this.props.data.image.background}
                    className="card__image"
                />
                <h3 className="card__title">{this.props.data.name}</h3>
            </li>
        );
    }
}
