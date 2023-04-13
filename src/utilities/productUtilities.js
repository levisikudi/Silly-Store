import axios from "axios";


export const getProducts = async () =>{
    let serverResponse = await axios ({
        url: '/get_products'
    })

    return serverResponse.data
}