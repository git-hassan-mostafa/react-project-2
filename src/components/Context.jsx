import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

const appContext = createContext()
const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [link, setLink] = useState('')
    const [product, setProduct] = useState([])
        const fetchingData=()=>{
            setLoading(true)
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${link}`)
            .then(res => {
                
                if (res.data.drinks) {
                    const drink = res.data.drinks;
                    const newProducts=drink.map(item => {
                        const {
                            idDrink,
                            strDrink,
                            strDrinkThumb,
                            strGlass,
                        } = item
                        return {
                            id: idDrink,
                            name: strDrink,
                            image: strDrinkThumb,
                            glass: strGlass
                        }
                    })
                    setProduct(newProducts) 
                }
                else {
                    setProduct([])
                }
                setLoading(false)
            })
        }
        useEffect(()=>{
            fetchingData()
        },[link])


    return (
        <appContext.Provider value={{ link, product,setLink,loading }}>
            {children}
        </appContext.Provider>
    )
}
export const useGlobalContext = () => {
    return useContext(appContext)
}
export default AppProvider
