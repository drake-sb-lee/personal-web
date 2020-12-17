import React, {useState} from 'react'

const GlobalContext = React.createContext({
    theme: 'dark'
});

function GlobalProvider({children}) {
    const [theme, setTheme] = useState('dark')

    return (
        <GlobalContext.Provider value={{theme, setTheme}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider
export {
    GlobalContext
}