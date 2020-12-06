import React from 'react'
import {Link} from 'react-router-dom'

function HomePage() {
    return (
        <div>
            <Link to='/about'>About</Link>
            <Link to='/work'>Work</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/prototype'>Prototypes</Link>
        </div>
    )
}

export default HomePage