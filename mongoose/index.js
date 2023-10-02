const mongoose = require("mongoose");

// const uri = "mongodb://127.0.0.1/shop";
const uri = "mongodb+srv://vinodchandra979:110799@cluster0.hmyphjt.mongodb.net/shop?retryWrites=true&w=majority";

mongoose.connect(uri);

const productSchema = new mongoose.Schema({
    name: String,
    company : String,
    price : Number,
    colors : [String],
    image : String,
    category: String,
    isFeatured : Boolean,
});

const Product = new mongoose.model("Product", productSchema);

const data1 = {
    name : "Designer Handbag2",
    company : "64c23350e32f4a51b19b923a",
    price : 3466,
    colors : ["#00000", "#cc6600", "#663300"],
    image : "/images/product-handbag.png",
    category: "64c2342de32f4a51b19b9250",
    isFeatured : true,
};

const main = async ()=> {
    try{
        // await Product.insertMany(data1);

        // const data = await Product.find({ price: { $gt : 3466 } }); // Use $gt for greater than
        // console.log(data);

        // 3 update Query

        // const updateQuery = await Product.findOneAndUpdate(
        //     {name : "Designer Handbag2", price : 3466},
        //     {$set : {"price":  4466}} ,
        // );

        await Product.findOneAndDelete(
           {
            name : "Designer Handbag2",
            price : 3466,
           }
        )

        const data = await Product.find({ price: { $eq : 3466 } }); // Use $gt for greater than
        console.log(data);

    } catch (error){
        console.log(error);
    } finally {
        mongoose.connection.close();
    }
};

main();
