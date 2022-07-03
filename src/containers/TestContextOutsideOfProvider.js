import React from "react";
import { useQueryYearContext } from "../contexts/queryYearContext";

const TestContextOutsideOfProvider = () => {
    const {queryYear, setQueryYear} = useQueryYearContext()
    return (
        <div>
            {queryYear}
            This should throw an error for trying to use the context outside of the provider, see App.js component tree.
        </div>
    )
}

export default TestContextOutsideOfProvider