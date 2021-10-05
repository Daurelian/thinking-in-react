import React, {useState} from 'react'
import books from '../mocks/books.js'



const Books=(props)=>{

  const[filter, setFilter] = useState(books.category)

  // console.log(books)

  const booksList= ()=>books.map((element)=>(
    <div className="col-xs-6 col-sm-3" key={element.id}>
    <div className="thumbnail">
      <img alt="" className="img-responsive" src={element.cover} />
    </div>
  </div>
  ))



  const navPills=['All','Design','Mobile','DevOps','Essentials']

  const booksFilter= ()=>navPills.map((element,index) =>(
    <li key={index}>
           <a onClick={()=>{setFilter(element)}}href="#">{element}</a>
        </li>
  )
  )
console.log(filter);
  return  <section id="books">
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
      <div className="row book-list">{booksList()}</div>
    </div>
  </section>
}

export default Books






