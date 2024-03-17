import React, { useContext, useEffect, useState } from "react"
import useFetchProducts from "../hooks/useFetchProducts"

const ProductContext = React.createContext()

const ProductProvider = ({children}) => {
    const [productsData, setProductsData] = useFetchProducts("https://fakestoreapi.com/products")
    const [selectedFilter, setSelectedFilter] = useState([])
    const [cartProducts, setCartProducts] = useState([]);
    window.cart = cartProducts
    useEffect(() => {
        setCartProducts(JSON.parse(localStorage.getItem("cartProducts")))
    }, [])

    useEffect(() => {
        localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
    }, [cartProducts])

    return (
        <ProductContext.Provider value={{productsData, setProductsData, selectedFilter, setSelectedFilter, cartProducts, setCartProducts}}>
            {children}
        </ProductContext.Provider>
    )
}

const useProductContext = () => {
    const context = useContext(ProductContext)
    return context
}

export {ProductProvider, useProductContext};