import React, { useState } from 'react'
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
  function setBooks(e) {
    // console.log(" e ", filter)
    if (e === 'All') return books
    else {
      let displayBooks = books.filter((elem) => elem.category === filter)
      //  console.log(displayBooks);
      return displayBooks
    }
  }

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
        <div className="row book-list">{booksList(setBooks(filter))}</div>
      </div>
    </section>
  )
}

export default Books
