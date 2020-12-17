import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const StyledRootContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Rubik", sans-serif;
  font-weight: 700;
  font-size: 36px
`
const StyledTitleContainer = styled.div`
  color: white;
`

function HomePage() {
    return (
        <StyledRootContainer>
            <StyledTitleContainer>
                Drake Lee
            </StyledTitleContainer>
            {/*<Link to='/about'>About</Link>*/}
            {/*<Link to='/work'>Work</Link>*/}
            {/*<Link to='/contact'>Contact</Link>*/}
            {/*<Link to='/prototype'>Prototypes</Link>*/}
        </StyledRootContainer>
    )
}

export default HomePage