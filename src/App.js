/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import Myheader from './Myheader'
import Mynav from './Mynav'
import Myarticle from './Myarticle'

export default class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      mode:'read',
      subject:{title:'React',desc:'Sing page Application'},
      welcome:{title:'Welcome',desc:'Welcome to React'},
      menus:[
        {id:1,title:'HTML' ,desc:'Hypertext'},
        {id:2,title:'CSS' ,desc:'CSS is for design'},
        {id:3,title:'JavaScript' ,desc:'javascript is for interactive'}
      ]
    }
  }

  render() {
    var _title,_desc = null
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title
      _desc = this.state.welcome.desc
    } else if (this.state.mode === 'read'){
      _title = this.state.menus.title
      _desc = this.state.menus.desc
    }

    return (
      <div className='App'>
        {/* <Myheader 
        title={this.state.subject.title} 
        desc={this.state.subject.desc}
        /> */}
        <header>
          <h1 className='logo'><a 
          href='/'
          onClick={function(e){
            e.preventDefault()
            this.setState({
              mode:'welcome'
            })
          }.bind(this)}
          >{this.state.subject.title}</a></h1>
          <p>{this.state.subject.desc}</p>
        </header>
        <Mynav data={this.state.menus} />
        <Myarticle
          title={_title} 
          desc={_desc}
        />
      </div>
    )
  }
}