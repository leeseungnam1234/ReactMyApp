import React, { Component } from 'react'

export default class Myarticle extends Component {
    render() {
        return (
            <section>
            <h2>{this.props.title}</h2>
            <p>{this.props.desc}</p>
            </section>
        )
    }
}