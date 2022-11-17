import React from 'react'
import { useGlobalContext } from './Context'
import Products from './Products'
import Skeleton from '@mui/material/Skeleton'
import { useRef } from 'react'
import { useEffect } from 'react'
import { TextField } from '@mui/material'

const Home = () => {
  const { link, setLink, product, loading } = useGlobalContext()
  return (
    <div>
      <TextField sx={{
        marginTop:'20px'
      }} onChange={(e) => setLink(e.target.value)} id="outlined-basic" label="search" variant="outlined" />
      <div className="product-flex">
        { 
          !loading && product.length < 1 && link.length > 1 ?
            <h1 className='no-item'> no item matches your search</h1> :
            loading && product.length < 1 && link.length <= 1 || (loading) ?
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                <div key={i}>
                  <Skeleton sx={{
                    borderRadius: '10px',
                    padding: '5px'
                  }} animation={'wave'} variant='rectangular' width={220} height={250}  ></Skeleton>
                  <Skeleton animation='wave' variant='text' width={150} height={40}></Skeleton>
                  <Skeleton animation='wave' variant='text' width={180} height={40}></Skeleton>
                </div>

              )) :
              product.map(item => {
                const { name, id, image, glass, info } = item
                return (
                  <Products key={id} props={{ name, id, image, glass, info }} />
                )
              })
        }
      </div>

    </div>
  )
}

export default Home
