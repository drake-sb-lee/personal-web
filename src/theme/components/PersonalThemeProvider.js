import React, {useContext} from 'react'
import {ThemeProvider} from 'styled-components'
import {GlobalContext} from '../../app/providers/GlobalProvider'
import * as themes from '../themes'

function PersonalThemeProvider({children}) {
    const {theme} = useContext(GlobalContext)
    return (
        <ThemeProvider theme={themes[theme]}>
            {children}
        </ThemeProvider>
    )
}

export default PersonalThemeProvider