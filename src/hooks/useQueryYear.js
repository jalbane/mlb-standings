import React from "react";

const useQueryYear = () => {
    const [Year, setQueryYear] = React.useState(2022)
    return {
        Year,
        setQueryYear
    }
} 

export default useQueryYear