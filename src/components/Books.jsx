import React from 'react'

const navPills=['All','Design','Mobile','DevOps','Essentials']

const Books=(props)=>{

  const navMenu= ()=>navPills.map((element,index) =>(
    <li key={index}>
           <a href="#">{element}</a>
        </li>
  )
  )

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
          <ul className="nav nav-pills text-center">{navMenu()}</ul>
        </div>
      </div>
      <div className="row book-list">LIBRI</div>
    </div>
  </section>
}

export default Books






