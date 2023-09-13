import React, { useContext, useEffect, useState } from 'react'
import RatingContext from '../context/RatingContext'
import { saveRating, updateRating } from '../context/RatingAction';

const Form = () => {

 const {dispatch , edit} = useContext(RatingContext)

 const [rate , setRate] = useState(1);
 const [text , setText] = useState("");

 const handleSubmit = (e) => {
  e.preventDefault()

    if(edit.isEdit){

      const data = updateRating(edit.rating.id , text , rate, );
      dispatch({
        type : "UPDATE",
        payload : data,
      })

    }else {
      const data = saveRating(rate , text);

      dispatch({
        type : "SAVE",
        payload : data,
      });
    }
  setText("");
 };



useEffect (() => {
    
  setText(edit.rating.text)
  setRate(edit.rating.rate)
  
},[edit]);


  return (
    <form className='mt-5' onSubmit={handleSubmit}>
        <select className ="form-control mb-2" onChange={(e) => setRate(e.target.value)}
              value={rate}
        >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
       
        <textarea
        placeholder="Enter Your Feedback"
        className="form-control mb-2 rounded-0"
        type="text"
        required
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
        <button className="btn btn-dark w-100">Save</button>
      
    </form>
  );
};

export default Form
