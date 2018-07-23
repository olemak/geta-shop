import React, { Component } from "react";

export class DummyImage extends Component {
    render() {
        return (
            <svg
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                className={this.props.className}
                stroke={this.props.color}
                fill="white"
            >
                <style>
                    @import
                    url('https://fonts.googleapis.com/css?family=Bungee+Shade|Creepster|Monoton|Work+Sans');
                </style>

                <text
                    x="10"
                    y="20"
                    textLength="80%"
                    style={{
                        fontFamily: "Bungee Shade",
                        fontSize: "16px"
                    }}
                >
                    {this.props.content[0]}
                </text>
                <text
                    x="10"
                    y="38"
                    textLength="80%"
                    style={{
                        fontFamily: "Monoton",
                        textTransform: "uppercase"
                    }}
                >
                    {this.props.content[1]}
                </text>
                <text
                    x="10"
                    y="55"
                    textLength="80%"
                    style={{
                        fontFamily: "Creepster"
                    }}
                >
                    {this.props.content[2]}
                </text>
            </svg>
        );
    }
}
