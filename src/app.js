import React, { useEffect, useReducer } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import './index.css';

const App = () => {
    const initialState = {
        data: [],
        bulkData: [],
        searchQuery: "",
        isSubmit: false,

      
    }

    const apiKey = '856ff9a8e5554f3198e5a473b5d101a8';
   
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const { results } = state.data;
    // const { extendedIngredients } = state.bulkData.map(item => console.log(item))


    function reducer(state, action) {
        switch (action.type) {

            case "Fetched":
                
                return {
                   ...state, 
                   data: action.payload
                }

            case "FetchedBulkInfo":
                return    {
                    ...state,
                    bulkData: action.payload
                }
                
            case "Search":

                return {
                    ...state,
                    searchQuery: action.payload
                }
            case "Submit":
                return {
                    ...state,
                    isSubmit: action.payload
                }
            case "Reset":
                return {
                    ...state,
                    isSubmit: action.payload
                }
        
            default:
                throw Error("payload not founded")
        }
    }


    useEffect(() => {
        if(!state.isSubmit) return
        async function fetchData() {
            const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${state.searchQuery}`);
            const data = await response.json();
            dispatch({type: "Fetched", payload: data})
            dispatch({type: "Reset", payload: false})
        }
        fetchData();
        
    },[state.searchQuery,state.isSubmit]);

    useEffect(() => {
        const ids = []
        if(!state.isSubmit) return
        if(typeof results !== "undefined") {
            Object.values(results).map(result => {
               return ids.push(result.id);
            })
        }
        async function fetchIngredients() {
            
                const response = await fetch(`https://api.spoonacular.com/recipes/informationBulk?apiKey=856ff9a8e5554f3198e5a473b5d101a8&ids=${ids}`);
                const data = await response.json();
                dispatch({type: "FetchedBulkInfo", payload: data});
                dispatch({type: "Reset", payload: false});
            
        }
        fetchIngredients();
        
    },[results, state])
    
    console.log(state.bulkData);
    
    // console.log(results);
    // console.log(id);



    return ( 
        <>
            <Header />
            <Main dispatch={dispatch} searchQuery={state.searchQuery} results={results} />
        </>
     );
}
 
export default App;