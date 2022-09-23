import React from "react";
import { useContext } from "react";
import { useQueryYear } from "../hooks";

const YearContext = React.createContext()
export const useQueryYearContext = () => {
    const context = useContext(YearContext)
    if (context === undefined) {
        throw new Error('QueryYearContext must be used within a QueryYearContext Provider')
    }

    return context
}


const QueryYearContext = ({ children }) => {
    const { Year, setQueryYear } = useQueryYear()
    console.log(Year)
    const values = React.useMemo(() => {
        return {Year, setQueryYear}
    }, [Year, setQueryYear])

    return <YearContext.Provider value={values}>{children}</YearContext.Provider>
}

export default QueryYearContext