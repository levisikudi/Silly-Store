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

export const buyOne = async (quantity, id)=>{
    console.log(id)
    console.log(quantity);

    let serverResponse = await axios({
        method: 'PUT',
        url: `/update_one?productId=${id}`,
        data: {quantity} 
    })

    return serverResponse
}
