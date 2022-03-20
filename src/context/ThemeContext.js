import React, {createContext, useState} from 'react'

export const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {
    const [cohortSettings,setCohortSettings] = useState({
        Cohort1: {
            text: 'text-green-500',
            textBg: 'bg-green-200',
            bg: 'bg-green-50',
            shadow: 'shadow-green-200'
        },
        Cohort2: {
            text: 'text-red-500',
            textBg: 'bg-red-200',
            bg: 'bg-red-50',
            shadow: 'shadow-red-200'
        }
    })

    return (
    <ThemeContext.Provider value={{...cohortSettings}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider