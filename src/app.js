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
        ids: []

      
    }

    const apiKey = "4defd47d816c4e5692caafff6528e6a2";
    // '856ff9a8e5554f3198e5a473b5d101a8';
   
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
            
            case "SetIds": 
                return {
                    ...state,
                    ids: [...state.ids, action.payload]
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
        const controller = new AbortController();
        
        async function fetchData() {
          try {
            const response1 = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${state.searchQuery}`);
            const data1 = await response1.json();
            const response2 = await fetch(`https://api.spoonacular.com/recipes/informationBulk?apiKey=${apiKey}&ids=${state.ids}`);
            const data2 = await response2.json();
            if(!state) {
                dispatch({type: "Fetched", payload: data1});
                dispatch({type: "FetchedBulkInfo", payload: data2});
            }
        } catch (error) {
            console.log(error);
        }
    }
    fetchData();
    dispatch({type: "Reset", payload: false});
        
    return () => {
    
        controller.abort();
    }
    },[state.searchQuery, state.ids, state.isSubmit]);


    useEffect(() => {
        if(typeof results !== "undefined") {
            Object.values(results).map(result => {
            return dispatch({type: "SetIds", payload: result.id})
            })
        }
    },[results])

    console.log(state)


    return ( 
        <>
            <Header />
            <Main bulkData={state.bulkData} dispatch={dispatch} searchQuery={state.searchQuery} results={results} />
        </>
     );
}
 
export default App;