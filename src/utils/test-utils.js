import React from 'react'
import {render, queries} from '@testing-library/react'
import {BrowserRouter} from 'react-router-dom'
import * as customQueries from './custom-queries'

// Add new providers here for test
const AllProviders = ({children}) => {
    return (
        <BrowserRouter>
            {children}
        </BrowserRouter>
    )
}

const customRender = (ui, options) => {
    render(ui, {queries: {...queries, ...customQueries}, wrapper: AllProviders, ...options})
}

export * from '@testing-library/react'

export {customRender as render}