import React from "react";

const useQueryYear = () => {
    const [Year, setQueryYear] = React.useState(new Date().getFullYear())
    return {
        Year,
        setQueryYear
    }
} 

export default useQueryYear