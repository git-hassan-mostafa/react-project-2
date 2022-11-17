import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Products = ({ props }) => {
  const { name, id, image, glass } = props
  return (
    <div className='product-block'>
      <img src={image} alt={name} />
      {
        <div className='product-info'>
          <div>
            <span className='product-title'>ID </span> <span> {id} </span> <br />

          </div>
          <div>
            <span className='product-title'>Name </span> <span> {name} </span> <br />

          </div>
          <div>
            <span className='product-title'>Glass </span> <span> {glass} </span> <br />

          </div>
          {/* <div>
            <span className='product-title'>Info </span> <span> {info} </span>

          </div> */}
          <Button sx={{
            marginTop: '10px',
            backgroundColor: '#2E4053',
            width:'fit-content',
            alignSelf:'center'
          }} variant="contained">
            <Link className='more-info-link' to={`/${id}`}>more details</Link>
          </Button>
        </div>
      }



    </div>
  )
}
export default Products
