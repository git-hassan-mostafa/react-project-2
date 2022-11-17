import usePagination from '@mui/material/usePagination/usePagination'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useGlobalContext } from './Context'
import { Button, Skeleton } from '@mui/material'

const MoreInfo = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const [info, setInfo] = useState({})
    useEffect(() => {
        setLoading(true)
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => {
                setLoading(false)
                const { idDrink,
                    strDrink,
                    dateModified,
                    strCategory,
                    strDrinkThumb,
                    strGlass,
                    strIngredient1,
                    strIngredient2,
                    strIngredient3 } = res.data.drinks[0]

                const ingredient = {
                    strDrink,
                    idDrink,
                    strGlass,
                    dateModified,
                    strCategory,
                    strDrinkThumb,
                    strIngredient1,
                    strIngredient2,
                    strIngredient3
                }
                setInfo(ingredient)

            })
    }, [id])
    return (
        <div className='more-info-flex'>
            {
                loading ?
                    <div>
                        <Skeleton sx={{
                            borderRadius: '10px',
                            marginBottom: '10px'
                        }} animation='wave' variant='rectangular' width={250} height={250} />
                        <Skeleton sx={{
                            borderRadius: '10px',
                            marginBottom: '10px'
                        }} animation={'wave'} variant='rectangular' width={200} height={30} />
                        <Skeleton sx={{
                            borderRadius: '10px',
                            marginBottom: '10px'
                        }} animation={'wave'} variant='rectangular' width={150} height={30} />
                        <Skeleton sx={{
                            borderRadius: '10px',
                        }} animation={'wave'} variant='rectangular' width={130} height={30} />
                    </div> :
                    <div>
                        <div className='info-list'>
                            <img width={250} src={info.strDrinkThumb} alt="" />
                            <div>
                                <h2> {info.strDrink} </h2>
                                <div className="info-titles">
                                    <div>
                                        <span className='info-title'>ID</span> <span>{info.idDrink}</span>
                                    </div>
                                    <div>
                                        <span className='info-title'>glass</span> <span>{info.strGlass}</span>
                                    </div>
                                    <div>
                                        <span className='info-title'>category</span> <span>{info.strCategory}</span>
                                    </div>
                                    <div>
                                        <span className='info-title'>date modified</span> <span>{info.dateModified}</span>
                                    </div>
                                    <div>
                                        <span className='info-title'>ingredients</span> <span>{info.strIngredient1} , {info.strIngredient2} , {info.strIngredient3}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <Button sx={{
                                marginTop:'30px',
                                width: 'fit-content',
                                backgroundColor: '#2E4053'
                            }} variant='contained' >
                                <Link className='info-link' to={'/'} >Back Home</Link>
                            </Button>
                        </div>
                    </div>







            }

        </div>
    )
}

export default MoreInfo
