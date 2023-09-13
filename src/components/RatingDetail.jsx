import React, { useContext } from 'react'
import RatingContext from "../context/RatingContext"

const RatingDetail = () => {
  
const {ratings} = useContext(RatingContext)

 const avgRating = ratings.reduce((p , c) => {
  return p + c.rate / ratings.length;

 }, 0);

  return (
    <div className=' my-2 d-flex align-item-center justify-content-between'>
      <p>Reviews : {ratings.length}</p>
      <p>Avg. Rating : {avgRating.toFixed(2)}</p>
    </div>
  )
}

export default RatingDetail
