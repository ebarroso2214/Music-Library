import { createContext, useContext } from "react";

export const SearchContext = createContext({
    term: '',
    handleSearch: () => {}
})