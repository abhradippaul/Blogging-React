import { createContext, useContext } from "react";

export const UserContext = createContext({
    status : false,
    setStatus : () => {},
    user : {},
    setUser : () => {}
})

export const UserContextProvider = UserContext.Provider

export const useUserContext = () => {
    return useContext(UserContext)
}