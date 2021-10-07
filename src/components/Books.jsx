import axios from 'axios'
import React, { useState, useEffect } from 'react'
import books from '../mocks/books.js'

const Books = (props) => {
  // console.log(books)

  //-------------------------Crea lista libri
  const booksList = (e) =>
    e.map((element) => (
      <div className="col-xs-6 col-sm-3" key={element.id}>
        <div className="thumbnail">
          <img alt="" className="img-responsive" src={element.cover} />
        </div>
      </div>
    ))

  //----------------------Setta i filtri
  const navPills = ['All', 'Design', 'Mobile', 'DevOps', 'Essentials']

  const [filter, setFilter] = useState('All')

  const booksFilter = () =>
    navPills.map((element, index) => (
      <li
        onClick={() => {
          setBooksFilter(element)
        }}
        className={element === filter ? 'active' : ''}
        key={index}
      >
        <a href="#0">{element}</a>
      </li>
    ))
  console.log('filtri', filter)

  //---------------------------Associa i Filtri ai Libri
  function setBooksFilter(e) {
    setFilter(e)
    setBooks(e)
  }
  //---------------Determina i libri da passare alla funzione booksList
  const [newbooks, setBooksList] = useState([])
  const setBooks=async(e)=> {
    // console.log(" e ", filter)
    // console.log("prima",newbooks);
    const result= await axios.get (`http://localhost:9000/books`);
    if (e === 'All') return setBooksList(result.data)
    else {
      let displayBooks = result.data.filter((elem) => elem.category === e)
       
       setBooksList(displayBooks) 
      
       return newbooks
    }
  }
  console.log("dopo",newbooks);
  //-----------------------Fetch di chiamata
 
  
  async function fetchBooks(){
    const result= await axios.get (`http://localhost:9000/books`);
    // console.log(result);
    setBooksList(result.data);
    
  }
  useEffect(()=>{
    fetchBooks() ;
  },[]);
  // console.log(newbooks);
  
  //-----------------------Return della funzione madre
  return (
    <section id="books">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2>Books</h2>
            <hr className="star-primary" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="nav nav-pills text-center">{booksFilter()}</ul>
          </div>
        </div>
        {/* <div className="row book-list">{booksList(setBooks(filter))}</div> */}
        <div className="row book-list">{booksList(newbooks)}</div>
      </div>
    </section>
  )
}

export default Books