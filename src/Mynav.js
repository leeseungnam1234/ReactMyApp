/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

export default class Mynav extends Component {
    render() {
        var lists = []
        var data = this.props.data
        var i = 0
        while (i < data.length) {
            lists.push(<li key={data[i].id}>
                <a 
                    href=''
                    data-id={data[i].id}
                    onClick={
                        function(e){
                            e.preventDefault()
                            this.props.onChangePage(e.target.dataset.id)
                        }.bind(this)
                    }
                >{data[i].title}</a></li>)
            i += 1
        }
        return (
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        )
    }
}
