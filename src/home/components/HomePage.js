import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const StyledRootContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledTitleContainer = styled.div`
  color: ${props => props.theme.primary};
  font-family: "Rubik", sans-serif;
  font-weight: 700;
  font-size: 36px;
  text-align: center;
`

const StyledLink = styled(Link)`
  color: ${props => props.theme.sub};
  font-weight: 400;
  font-size: 18px;
  text-decoration: none;
  margin: 0px 12px;
`

const Divider = ({className}) => {
    return (
        <span className={className}>
            |
        </span>
    )
}

const StyledDivider = styled(Divider)`
  font-weight: 100;
  font-size: 12px;
`

function HomePage() {
    return (
        <StyledRootContainer>
            <StyledTitleContainer>
                Drake Lee
                <div>
                    <StyledLink to='/about'>About</StyledLink>
                    <StyledDivider/>
                    <StyledLink to='/work'>Work</StyledLink>
                    <StyledDivider/>
                    <StyledLink to='/contact'>Contact</StyledLink>
                    <StyledDivider/>
                    <StyledLink to='/prototype'>Prototypes</StyledLink>
                </div>
            </StyledTitleContainer>
        </StyledRootContainer>
    )
}

export default HomePage