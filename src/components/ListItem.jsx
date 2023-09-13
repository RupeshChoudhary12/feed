
import React, { useContext }  from 'react'
import { deleteRating, editRating } from '../context/RatingAction'
import RatingContext from '../context/RatingContext'

const ListItem = ({rating}) => {

  const {dispatch}  = useContext(RatingContext)
  

  const handleDelete = (id) => {
    const data = deleteRating(id);

    dispatch({
      type : "DELETE",
      payload : data,
    });

  };


  const handleUpdate  = (rating) => {
 const data = editRating(rating);
 dispatch({
  type : "EDIT",
  payload : data,
 })

  };



  return (
    <li className="list-group-item">
        <h4>Rating : {rating.rate}</h4>
        <h4>{rating.text}</h4>
   
  
    
    <button className="btn btn-danger btn-sm float-end" onClick={()=>handleDelete(rating.id
      )}>Delete</button>

<button className="btn btn-warning btn-sm float-end" onClick={()=>handleUpdate(rating
      )}>Update</button>
  </li>
  )
}

export default ListItem
