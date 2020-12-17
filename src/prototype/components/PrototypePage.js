import React, {useContext} from 'react'
import styled from 'styled-components'
import {GlobalContext} from '../../app/providers/GlobalProvider'

const StyledButton = styled.button`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.primary};
  height: 400px;
  width: 800px;
`
function PrototypePage() {
    const {theme, setTheme} = useContext(GlobalContext)

    const handleClick = () => {
        if (theme === 'light') setTheme('dark')
        else setTheme('light')
    }

    return (
        <div>
            Testing Themes
            <StyledButton onClick={handleClick}>
                {theme}
            </StyledButton>
        </div>
    )
}

export default PrototypePage