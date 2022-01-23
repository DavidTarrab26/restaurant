import { createContext, useState } from "react";

export const Context = createContext(null)

const AppProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])

    const agregarAlCarrito = (producto) =>{
        setCarrito([producto, ...carrito])
        console.log(carrito)
    }
    const remove = (id) =>{
        setCarrito(carrito.filter((ped) => ped.id != id))
    }
    return ( 
        <Context.Provider value={{carrito, setCarrito, agregarAlCarrito, remove}}>
            {children}
        </Context.Provider>
     );
}
 
export default AppProvider;