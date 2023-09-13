

export const deleteRating = (id) => {
     return id
  
};


 
 export const saveRating = (rate , text) => {

    const newRating ={
        id : crypto.randomUUID(),
        text,
        rate,
    };


  return newRating
   
   };



   export const editRating = (rating) => {
    return rating

   }




   export const updateRating = (id , text, rate)  => {

    const  updatedRating =  {

        id ,
        text,
        rate,
    };
    return updatedRating;

   };