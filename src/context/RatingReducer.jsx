



const RatingReducer = (state , action)  => {

    switch (action.type) {
    
        case "SAVE" : 
        return {
            ...state,
            ratings : [action.payload, ...state.ratings , ]
        }




        case "DELETE":
            return{
                ...state,
                ratings :  state.ratings.filter(item => item.id !== action.payload)
            }
            
        case "EDIT" :
            return {
                ...state,
                edit : {rating : action.payload , isEdit : true},
            };


        case "UPDATE" :
            return {
                ...state,
                ratings : state.ratings.map(item => item.id === action.payload.id ? {...item , text : action.payload.text , rate : action.payload.rate} : item),
                edit  : {rating : {} , isEdit : false},
            }
         


        default:
            return state
    }




};


export default RatingReducer