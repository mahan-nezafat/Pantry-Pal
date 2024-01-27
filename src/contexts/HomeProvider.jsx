import React, { createContext, useContext, useEffect, useReducer  } from 'react';

const apiKey = ''
const HomeContext = createContext();

const HomeProvider = ({ children }) => {

    
        const initialState = {
            data: [],
            bulkData: [],
            searchQuery: "",
            isSubmit: false,
            isLoading: false,
            selectedFoodId: null,
            selectedFoodInformation: {},
            isSelected: false,
            foodTitle: "",
            youtubeId: ""
        }
    
        
       
        const [state, dispatch] = useReducer(reducer, initialState);
        const { data,
            bulkData,
            searchQuery,
            isSubmit,
            ids,
            isShow,
            selectedFoodId,
            selectedFoodInformation,
            isSelected,
            foodTitle,
            youtubeId,
            isLoading } = state;

        const { results } =   data;
    
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
                        isSubmit: action.payload,
                        isLoading: action.payload
                    
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
                    
                case "Title":
                    return {
                        ...state,
                        foodTitle: action.payload
        
                    }
                case "Youtube":
                    if(!action.payload) { 
                        return {
                            ...state,
                            youtubeId: ""
                        }
                    } 
                    return {
                        ...state,
                        youtubeId: action.payload
        
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
                    const response1 = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchQuery}&number=100`);
                    const data1 = await response1.json();
                       
                    dispatch({type: "Fetched", payload: data1});
                    Object.values(data1.results).map(result => {
                                return dispatch({type: "SetIds", payload: result.id})
                                })
                            
                            } catch (error) {
                                console.log(error);
                            }
                            
                            
                            
                        }
                        
                        fetchData();
                        
                        setTimeout(() => {
                            dispatch({type: "Submit", payload: false});

                        }, 3000);
            return () => {
                            
                controller.abort();
            }
   
        },[isSubmit, searchQuery]);
    

        useEffect(() => {
            if(!selectedFoodId) return;
           async function getSingleRecipe() {
                const response = await fetch(`https://api.spoonacular.com/recipes/${selectedFoodId}/information?apiKey=${apiKey}`);
                const data = await response.json();
    
                dispatch({type: "SelectedFoodInformation", payload: data});
            }
            getSingleRecipe();
        },[selectedFoodId]);

        useEffect(() => {
            if(!isSelected) return
            async function getVideo() {
                try {
                    const response = await fetch(`https://api.spoonacular.com/food/videos/search?apiKey=${apiKey}&query=${foodTitle}`)
                    const data = await response.json();
                    const videos = data.videos[0];
                    if(typeof videos === "undefined") {
                       return dispatch({type: "Youtube", payload: false})
                    }
                    const youtubeId = Object.values(videos)[2];
                    dispatch({type: "Youtube", payload: youtubeId})

                } catch (error) {
                    console.log(error)
                }
            }
            getVideo()
        }, [foodTitle, isSelected])
        // console.log(state)                    

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
                results,
                youtubeId,
                isLoading }}
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