import {useState, createContext} from 'react';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {

   const [selectedProduct, setSelectedProduct] = useState()
 
    return (
        <ProductContext.Provider value={{
            selectedProduct, setSelectedProduct,
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;