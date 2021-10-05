import React from 'react'

const Menu = (props) => {
  // console.log(props.isOpen)
   if (props.isOpen)
  return <div className="overlay-menu">
    <h4>
      Close menu
      <button onClick={()=>props.setOpen(false)} className="btn-link" style={{ cursor: 'pointer' }}>
        <i className="fa fa-close pull-right" />
      </button>
    </h4>
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  </div>
  else return null;
}

export default Menu

// onClick= {props.setOpen(!props.isOpen)}