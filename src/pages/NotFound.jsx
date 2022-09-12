import React from 'react'
import '@styles/NotFound.scss';

const NotFound = () => {
  return (
    <div>
      <h1 className="title-404">404</h1>
      <p className="text-404">Oops! Page not found.</p>
      <a className="button-404" href="./">go back to the home page, its better.</a>
    </div>
  )
}

export default NotFound