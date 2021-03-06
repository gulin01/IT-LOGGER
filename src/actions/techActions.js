import {
    GET_TECHS,
    ADD_TECH,
    DELETE_TECH,
    SET_LOADING,
    TECHS_ERROR
} from './types';

// Get techs from server 
export const getTechs = () => async dispatch =>{
    
    //  cleaner way  
    try {
        setLoading();
        const res = await fetch('/techs');
        const data = await res.json();

        dispatch({
            type:GET_TECHS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:TECHS_ERROR,
            payload:error.response.statusText
        })
    } 
}

// ADD technician to server 
export const addTech = (tech) => async dispatch =>{
    
    //  cleaner way  
    try {
        setLoading();
        const res = await fetch('/techs',{
            method:'POST',
            body:JSON.stringify(tech),
            headers:{
                'Content-Type':'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type:ADD_TECH,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:TECHS_ERROR,
            payload:error.response.statusText
        })
    } 
}
// Set Loading to true
export const setLoading = () =>{
    return {
        type:SET_LOADING
    }
}

export const deleteTech = (id) => async dispatch =>{
    
    //  cleaner way  
    try {
        setLoading();
       await fetch(`/techs/${id}`,{
           method:'DELETE',
       });

        dispatch({
            type:DELETE_TECH,
            payload:id
        })
    } catch (error) {
        dispatch({
            type:TECHS_ERROR,
            payload:error.response.statusText
        })
    } 
}