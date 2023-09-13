import { createContext, useReducer } from "react";
import RatingReducer from "./RatingReducer";

const RatingContext = createContext();

 export const RatingProvider = ({children}) => {
   
    const initialState = {
        ratings :  [],
        edit : {
            rating : {},
            isEdit : false,
        }
    };

  
    const [state , dispatch] = useReducer(RatingReducer , initialState)




    return(
        <RatingContext.Provider 
        value={{
            ...state,
            // ratings : state.ratings,
            // edit : state.edit,
            dispatch,

        }}>
            {children}
        </RatingContext.Provider>
    )
}

export default RatingContext