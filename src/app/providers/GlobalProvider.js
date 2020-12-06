import React, {useState} from 'react'

const GlobalContext = React.createContext({
    theme: 'light'
});

function GlobalProvider({children}) {
    const [theme, setTheme] = useState('light')

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