const db = require("../db")
const Product = require("../models/product")

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const products = [

    {
      name: "Kirkland Signature Mini Chocolate Chip Cookies",
      brand: "Kirkland",
      department:"Bakery & Desserts",
      category: "Cookies",
      imageURL: "https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_33cf258a-1b53-43fd-9cbb-052a5175edb7.jpeg",
      price: 4.89,
      size: "60ct",
      quantity:19
    },

    {
      name: "Strawberries",
      brand: "Dole",
      department:"Produce",
      category: "Fruits",
      imageURL: "https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_de09de29-a9b9-4d30-89c0-9cf3c669d1df.jpeg",
      price: 4.89,
      size: "2 lbs",
      quantity:19
    },

    {
      name: "Fruit Loops",
      brand: "Kelloggs",
      department:"Breakfast",
      category: "Cereal",
      imageURL: "https://images.kglobalservices.com/www.kelloggs.com.au/en_au/product/product_4508497/prod_img-3394699_kelloggs-froot-loops.png",
      price: 8.59,
      size: "43.6 oz",
      quantity:9
    },
    
    {
      name: "Kirkland Signature Organic Grade AA Eggs",
      brand: "Kirkland",
      department:"Dairy & Eggs",
      category: "Eggs",
      imageURL: "https://i.imgur.com/15evpwG.jpg",
      price: 7.39,
      size: "24ct",
      quantity:19
    },
  ]
  await Product.insertMany(products)
  console.log("Created Products!")
}

const run = async() => {
  await main()
  db.close()
}

run()