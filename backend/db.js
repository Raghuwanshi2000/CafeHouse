const mongoose = require('mongoose')
const mongoDbClient = require("mongodb").MongoClient
const mongoURI = "mongodb://0.0.0.0:27017/gofoodmern" // Customer change url to your db you created in atlas
// mongodb://<username>:<password>@merncluster-shard-00-00.d1d4z.mongodb.net:27017,merncluster-shard-00-01.d1d4z.mongodb.net:27017,merncluster-shard-00-02.d1d4z.mongodb.net:27017/?ssl=true&replicaSet=atlas-eusy5p-shard-0&authSource=admin&retryWrites=true&w=majority
module.exports= function (callback) {
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        // mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
        if (err) console.log("---" + err)
        else {
            // var database =
            console.log("connected to mongo")
            const foodCollection = await mongoose.connection.db.collection("food_items");
            foodCollection.find({}).toArray(async function (err, data) {
                const categoryCollection = await mongoose.connection.db.collection("foodCategory");
                categoryCollection.find({}).toArray(async function (err, Catdata) {
                    callback(err, data, Catdata);
                })
            });
            // listCollections=[]
            // listCollections({name: 'food_items'}).toArray(async function (err, database) {
                // callback(err, data, Catdata);
            // });
            const food1Collection = await mongoose.connection.db.collection("food_items");
            food1Collection.find({}).toArray(async function (err, data) {
                const listCollection = await mongoose.connection.db.collection("foodCategory");
                listCollection.find({}).toArray(async function (err, Catdata) {
                    callback(err, data, Catdata);
                })
            });
        }
    })
};
// module.exports.;
// const mongoose=require ('mongoose');
// const mongoURI="mongodb://localhost:27017";
// const connectToMongo=()=>
// {
//     mongoose.connect(mongoURI,()=>{
//         console.log("Connection successfull");
//     })
// }
// module.exports=connectToMongo