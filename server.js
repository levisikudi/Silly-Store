const express = require('express')
const path = require('path')
const logger = require('morgan')
const { create } = require('./models/product')
const Product = require('./models/product')

// cross origin access 
const cors = require('cors')

const app = express()

//access
app.use(cors({
    origin: "*"
}))

// configs
require('dotenv').config();
require('./config/database.js');


// logs different requests to our server
app.use(logger('dev'))

// parse stringified json objects
app.use(express.json())

// serve our build folder
app.use(express.static(path.join(__dirname, 'build')))



//  ROUTES //

app.get('/', (req, res) =>{
    res.send("The Server is serving")
})


// /get_products - responds with all products in your collection
app.get('/get_products', async (req, res) =>{
     // get data from backend
     let response = await Product.find({});
     console.log(response);
      //send to front end
     res.json(response)
})


// /get_specific_product/:product_id - responds with one specific product from your collection
app.get('/get_specific_product/:productId', async (req, res) =>{
    let id = req.params.productId

    let response = await Product.findById(id)
    res.send(response)
})

app.get('/search_product_by_name/:name', async (req, res) =>{
    let response = await Product.find({ name: req.params.name })
    res.send(response)

})


// /create_product - uses information from req.body to make a new product in your collection
app.post('/create_product', async (req, res) =>{
    console.log(req.body);

    // destructure elements from clientside request
    const {name, description, quantity, price, imageURL} = req.body

    let returnedValue = await Product.create({
        name,
        description,
        quantity,
        price,
        imageURL
    })
    console.log(returnedValue);
    returnedValue ? console.log("Success"): console.log("Fail");;
    // take the body and destructure
   res.send("Upload Complete")
})



// /delete_product/ - The product ID should be included in the URL as a query. Example: /delete_product/?productId=63cd55e8b260470b1c1f2cc0
app.delete('/delete_product/:productId', async (req, res) =>{
    let id = req.params.productId
    let response = await Product.deleteOne({_id:`${id}`})
    res.send({data: `deleted ${response.deletedCount} items.`})
})


// /update_product - uses information from req.body to update the specific product
app.put('/update_product/:productId', async (req, res) =>{
    let id = {_id:`${req.params.productId}`}
    let myData = req.body
    console.log(req.body);
    let response = await Product.findByIdAndUpdate(id, myData, {new:true})
    res.send(req.body)
})

app.put('/update_one', async (req, res) =>{
    let response = await Product.findOneAndUpdate({ _id: req.query.productId }, req.body, { new: true });
    res.send(response);
})

// Catch-all route
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });


app.listen(4000, () => {
    console.log(`Server is Listening on 4000..`)
})