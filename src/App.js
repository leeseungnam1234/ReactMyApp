import React, { Component } from 'react'
import Myheader from './Myheader'
import Mynav from './Mynav'
import Myarticle from './Myarticle'

export default class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      subject:{title:'React',desc:'Sing page Application'},
      menus:[
        {id:1,title:'HTML' ,desc:'Hypertext'},
        {id:2,title:'CSS' ,desc:'CSS is for design'},
        {id:3,title:'JavaScript' ,desc:'javascript is for interactive'}
      ]
    }
  }

  render() {
    return (
      <div className='App'>
        <Myheader 
        title={this.state.subject.title} 
        desc={this.state.subject.desc}
        />
        <Mynav data={this.state.menus} />
        <Myarticle title='HTML' desc='Hypertext Markup Language'/>
      </div>
    )
  }
}