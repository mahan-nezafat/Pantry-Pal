import React, { useEffect, useReducer } from 'react';
// import Header from '../components/header/Header';
import Main from '../components/main/Main';

const Home = () => {
    const initialState = {
        data: [],
        bulkData: [],
        searchQuery: "",
        isSubmit: false,
        ids: [],
        isShow: false,
        selectedFoodId: null,
        selectedFoodInformation: {},
        isSelected: false

      
    }

    const apiKey = "f88e395dfddb4a21837e281aa658717c";
    // "8c9b44dff7454d2bb7def613b0bade75";
    // "76c7a80de4fc4832927537ed53f92d14";
    // "856ff9a8e5554f3198e5a473b5d101a8";
    // "4defd47d816c4e5692caafff6528e6a2";
   
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const { results } = state.data;


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

            case "Show":
                return {
                    ...state,
                    isShow: action.payload
                }

            case "SelectedFoodId":
                return {
                    ...state,
                    selectedFoodId: action.payload,
                    isSelected: state.selectedFoodInformation ? true : false

                }

            case "SelectedFoodInformation":
                return {
                    ...state,
                    selectedFoodInformation: action.payload,
                }
            
            case "Close": 
                return {
                    ...state,
                    isSelected: action.payload,
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
                   
                dispatch({type: "Fetched", payload: data1});
            
            console.log(data1)
        } catch (error) {
            console.log(error);
        }
       
    }
   
    fetchData();
    dispatch({type: "Reset", payload: false});
            
        return () => {
        
            controller.abort();
        }
    },[state]);


    useEffect(() => {
        if(typeof results !== "undefined") {
            Object.values(results).map(result => {
            return dispatch({type: "SetIds", payload: result.id})
            })
        }
    },[results])

    useEffect(() => {
        if(!state.isShow) return
        async function fetchInfo() {
            const response2 = await fetch(`https://api.spoonacular.com/recipes/informationBulk?apiKey=${apiKey}&ids=${state.ids}`);
            const data2 = await response2.json();
            dispatch({type: "FetchedBulkInfo", payload: data2});
            
        }
        fetchInfo();
    },[state.isShow, state.ids])

    useEffect(() => {
        if(!state.selectedFoodId) return;
       async function getSingleRecipe() {
            const response = await fetch(`https://api.spoonacular.com/recipes/${state.selectedFoodId}/information?apiKey=${apiKey}`);
            const data = await response.json();

            dispatch({type: "SelectedFoodInformation", payload: data});
            console.log("fetched")
        }
        getSingleRecipe();
    },[state.selectedFoodId]);

    console.log(state)


    return ( 
        <>  
            <Main
            
            bulkData={state.bulkData}
            dispatch={dispatch}
            searchQuery={state.searchQuery}
            results={results} 
            selectedFoodInformation={state.selectedFoodInformation}
            isSelected={state.isSelected}
            />
        </>
     );
}
 
export default Home;