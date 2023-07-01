let express  = require('express');
let app = express();
let cors = require('cors');
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
// let mongoURL = "mongodb://localhost:27017";
let mongoURL = "mongodb+srv://test:test@cluster0.o0pdq4c.mongodb.net/?retryWrites=true&w=majority"
let port = process.env.PORT || 9500
let bodyParser = require("body-parser")
let db = null;

// middleware (supporting library)
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) =>{
    res.send('<h1>Welcome hii!</h1>');
}) 

app.get('/getAllMatches', (req, res) =>{
    db.collection('XFF').find().toArray((err, result) => {
        if(err) throw err;
        res.send(result)
    })
}) 

app.get('/getMatchStats', (req, res) =>{
    // let id = req.params.id;
    let matchId = req.query.matchId
    
    let query = {}

    if (matchId) {
        query = {matchId: matchId}
    } 
    console.log(matchId);
    db.collection('XFF').find(query).toArray((err, result) => {
        if(err) throw err;
        res.send(result)
    })
}) 

app.get('/products/:categoryId', (req, res) =>{
    let query = {}
    let categoryId = req.params.categoryId;
    let brand = req.query.brand
    let price = req.query.price
    let size = req.query.size
    let color = req.query.color
    
    if (brand) {
        query = {category: categoryId, brand: brand}
    } else if (size && color) {
        query = {category: categoryId, size: size, color: color}
    } else if (size) {
        query = {category: categoryId, size: size}
    } else if (color) {
        query = {category: categoryId, color: color}
    } 

    console.log(categoryId, brand, size, color);
    db.collection('products').find(query).toArray((err, result) => {
        if(err) throw err;
        res.send(result)
    })
}) 

app.get('/product_detail/:brand', (req, res) => {
    let query = {}
    let product = req.params.brand
    if (product) {
        query = {brand: product}
    }
    console.log(product);
    db.collection('products').find(query).toArray((err, result) => {
        if(err) throw err;
        res.send(result)
    })
})







//connect with mongodb
MongoClient.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
    if (err) console.log('Error while connecting to Mongo');
    db = client.db('Blackcoffer');
    app.listen(port, () => {
        console.log('Server is running on port ' + port);
    })
})

//edu_project_myntra