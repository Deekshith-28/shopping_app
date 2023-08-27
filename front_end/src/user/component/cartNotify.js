import React, { createContext, useContext } from 'react'

const Cartcontext = createContext(null);

const Usecart = () => {
    return useContext(Cartcontext);
}

export { Usecart, Cartcontext }






