import React from "react";

const useQueryYear = () => {
    const [queryYear, setQueryYear] = React.useState(new Date().getFullYear())

    return {
        queryYear,
        setQueryYear
    }
} 

export default useQueryYear