import axios from "axios";


export const getProducts = async () =>{
    let serverResponse = await axios ({
        url: '/get_products'
    })

    return serverResponse.data
}

export const createItem = async (formData) =>{
    console.log(formData);

    let serverResponse = await axios({
        method: 'POST',
        url: '/create_product',
        data: formData
    })

    return serverResponse;
}