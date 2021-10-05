import React, {useState} from 'react'
import Header from "./Header.jsx"
import Books from "./Books.jsx"
import Abouts from "./Abouts.jsx"
import Footer from "./Footer.jsx"
import Nav from "./Nav.jsx"
import Menu from './Menu'
// asd



function App() {
  const [isOpen, setOpen]= useState(true);
  return (
    <div id="page-wrap">
      <Nav isOpen={isOpen} setOpen={setOpen} />
      <Menu isOpen ={isOpen} setOpen={setOpen}/>
      <Header title="Welcome to React"/>
      <Books />
      <Abouts />
      <Footer />
    </div>
  )
}

export default App
