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
    const { queryYear, setQueryYear } = useQueryYear()

    const values = React.useMemo(() => {
        return [queryYear, setQueryYear]
    }, [queryYear, setQueryYear])

    return <YearContext.Provider value={values}>{children}</YearContext.Provider>
}

export default QueryYearContext