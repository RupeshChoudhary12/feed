import { useContext } from 'react'
import ListItem from './ListItem'
import RatingContext from '../context/RatingContext'
import RatingDetail from './RatingDetail';

const ListGruop = () => {


  const {ratings} = useContext(RatingContext);

if(!ratings || ratings.length  === 0){
  return(
    <h1 className='text-center mt-5'>No Ratings Yet</h1>
  )
}


  return (
<>
<RatingDetail/>
<ul className="list-group mt-4">
    
    {ratings.map((rating) => (
        <ListItem key={rating.id} rating={rating} />
      ))}

    
   
   </ul>
</>

  );
};

export default ListGruop
