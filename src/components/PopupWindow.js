import React from 'react'

const PopupWindow = ({movie, onClose}) => {

    if (!movie) {
        return null
    }
    
    
  return (
      <div className='popupContainer'>
          <div className='popupContent'>
          <p>Overview: {movie.overview}</p>
          <p>Average vote: {movie.vote_average}</p>
          <button onClick={onClose}> close </button>
          </div>
    </div>
  )
}

export { PopupWindow }
