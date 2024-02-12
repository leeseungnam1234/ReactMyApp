/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import Myheader from './Myheader'
import Mynav from './Mynav'
import Myarticle from './Myarticle'

export default class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      mode:'welcome',
      selected_id:2,
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
      var i = 0;
      // while () {
        
      //   i++
      // }
      _title = this.state.menus[0].title
      _desc = this.state.menus[0].desc
    }

    return (
      <div className='App'>
        <Myheader 
        title={this.state.subject.title} 
        desc={this.state.subject.desc}
        onChangePage = {
          function () {
            this.setState({
              mode:'welcome'
            });
          }.bind(this)
        }
        />
        <Mynav 
          data={this.state.menus}
          onChangePage = {
            function (id) {
              this.setState({
                mode:'read',
                selected_id:Number(id)
              });
            }.bind(this)
          }
        />
        <Myarticle
          title={_title} 
          desc={_desc}
        />
      </div>
    )
  }
}