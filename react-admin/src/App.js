import React, { Component } from 'react'
import Footer from './Footer'
import Sidebar from './Sidebar'
import Header from './Header'
import MainContent from './MainContent'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Sidebar/>
        <MainContent/>
        <Footer/>
      </div>
    )
  }
}
