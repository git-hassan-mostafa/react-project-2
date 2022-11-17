import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from './Context'
import { Button } from '@mui/material'
const About = () => {
    const { search } = useGlobalContext()
    return (
        <div className='about'>
            <div className="container">
                <p className='text'>
                    Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Ipsa deleniti asperiores
                    eligendi aliquid voluptates corporis
                    sapiente inventore iusto quas cum
                    accusantium doloremque ut illum quo fugit,
                    nihil impedit pariatur. Optio quaerat
                    officia id veritatis consequuntur est,
                    incidunt excepturi veniam adipisci rem
                    placeat, temporibus molestiae
                    molestias. Repellat, ipsa, quia modi
                    non aperiam, inventore reiciendis
                    rem suscipit quasi harum necessitatibus! Molestias
                    eveniet architecto earum molestiae repudiandae
                    inventore delectus optio ipsa fugit rem quis unde
                    expedita libero velit, rerum esse praesentium iste,
                    a dolor. Odit ab aliquam ea sed molestias cum ex
                    veniam enim minima id. Animi mollitia quas minus
                    quibusdam itaque quis.

                </p>
                <div>

                    <Button sx={{
                        margin: '20px',
                        backgroundColor:'#2E4053'
                    }} onClick={search} variant="contained">
                        <Link className='back-home-link' to='/' >back home</Link>

                    </Button>
                    {/* <button onClick={search} className='back-home'>
                    </button> */}
                </div>


            </div>


        </div>
    )
}

export default About
