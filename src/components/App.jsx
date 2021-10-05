import React, {useState} from 'react'
import Header from "./Header.jsx"
import Books from "./Books.jsx"
import Abouts from "./Abouts.jsx"
import Footer from "./Footer.jsx"
import Nav from "./Nav.jsx"
import Menu from './Menu'
// asd



function App() {
  const [isOpen, setOpen]= useState(false);
  
  function toggleOpen(){
    setOpen(!isOpen)
  }
  return (
    <div id="page-wrap">
      <Nav toggleOpen={toggleOpen} />
      {/* <Menu isOpen ={isOpen} setOpen={setOpen}/> */}
      {isOpen && <Menu toggleOpen={toggleOpen} />}
      <Header title="Welcome to React"/>
      <Books />
      <Abouts />
      <Footer />
    </div>
  )
}

export default App
