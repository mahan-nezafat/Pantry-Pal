import React, { createContext, useContext, useEffect, useReducer  } from 'react';


const HomeContext = createContext();

const HomeProvider = ({ children }) => {

    
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
        //  "8c9b44dff7454d2bb7def613b0bade75";
        // "76c7a80de4fc4832927537ed53f92d14";
        // "856ff9a8e5554f3198e5a473b5d101a8";
        // "4defd47d816c4e5692caafff6528e6a2";
       
        const [state, dispatch] = useReducer(reducer, initialState);
        const { data,
            bulkData,
            searchQuery,
            isSubmit,
            ids,
            isShow,
            selectedFoodId,
            selectedFoodInformation,
            isSelected } = state;
        const { results } =   data;
    
        console.log(state)
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
                        
                    }
    
                case "SelectedFoodInformation":
                    return {
                        ...state,
                        selectedFoodInformation: action.payload,
                        isSelected: true
                    }
                
                case "Close": 
                    return {
                        ...state,
                        isSelected: action.payload,
                    }
    
                case "Reset":
                    return {
                        state: initialState
                    }
            
                default:
                    throw Error("payload not founded")
            }
        }
    
    
        useEffect(() => {
            if(!isSubmit) return
            const controller = new AbortController();
            
            async function fetchData() {
              try {
                    const response1 = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchQuery}`);
                    const data1 = await response1.json();
                       
                    dispatch({type: "Fetched", payload: data1});
                    Object.values(data1.results).map(result => {
                                return dispatch({type: "SetIds", payload: result.id})
                                })
                            
                // console.log(data1)
            } catch (error) {
                console.log(error);
            }
           
        }
       
        fetchData();
        dispatch({type: "Submit", payload: false});
                
            return () => {
            
                controller.abort();
            }
        },[isSubmit, searchQuery]);
    
    
        // useEffect(() => {
        //     if(typeof results !== "undefined") {
        //         Object.values(results).map(result => {
        //         return dispatch({type: "SetIds", payload: result.id})
        //         })
        //     }
        // },[results])
    
        useEffect(() => {
            if(!isShow) return
            async function fetchInfo() {
                const response2 = await fetch(`https://api.spoonacular.com/recipes/informationBulk?apiKey=${apiKey}&ids=${ids}`);
                const data2 = await response2.json();
                dispatch({type: "FetchedBulkInfo", payload: data2});
                
            }
            fetchInfo();
        },[isShow, ids])
    
        useEffect(() => {
            if(!selectedFoodId) return;
           async function getSingleRecipe() {
                const response = await fetch(`https://api.spoonacular.com/recipes/${selectedFoodId}/information?apiKey=${apiKey}`);
                const data = await response.json();
    
                dispatch({type: "SelectedFoodInformation", payload: data});
                console.log("fetched")
            }
            getSingleRecipe();
        },[selectedFoodId]);

        
    return (
        <HomeContext.Provider
            value={{ data,
                bulkData,
                searchQuery,
                isSubmit,
                ids,
                isShow,
                selectedFoodId,
                selectedFoodInformation,
                isSelected,
                dispatch,
                results }}
        >
            {children}
        </HomeContext.Provider>
    );
}

function useHome() {
    const context = useContext(HomeContext);
    if(context === undefined) throw new Error("HomeContext was used outside of the HomeProvider");
    return context
}
 
export  { HomeProvider, useHome};