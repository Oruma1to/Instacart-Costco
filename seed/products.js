const db = require("../db")
const Product = require("../models/product")

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const products = [

    {
      name: "Kirkland Signature Mini Chocolate Chip Cookies",
      brand: "Kirkland",
      department: "Bakery & Desserts",
      category: "Cookies",
      imageURL: "https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_33cf258a-1b53-43fd-9cbb-052a5175edb7.jpeg",
      price: 4.89,
      size: "60ct",
      quantity: 19
    },

    {
      name: "Strawberries",
      brand: "Dole",
      department: "Produce",
      category: "Fruits",
      imageURL: "https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_de09de29-a9b9-4d30-89c0-9cf3c669d1df.jpeg",
      price: 4.89,
      size: "2 lbs",
      quantity: 19
    },

    {
      name: "Fruit Loops",
      brand: "Kelloggs",
      department: "Breakfast",
      category: "Cereal",
      imageURL: "https://images.kglobalservices.com/www.kelloggs.com.au/en_au/product/product_4508497/prod_img-3394699_kelloggs-froot-loops.png",
      price: 8.59,
      size: "43.6 oz",
      quantity: 9
    },

    {
      name: "Kirkland Signature Organic Grade AA Eggs",
      brand: "Kirkland",
      department: "Dairy & Eggs",
      category: "Eggs",
      imageURL: "https://i.imgur.com/15evpwG.jpg",
      price: 7.39,
      size: "24ct",
      quantity: 19
    },
    {
      name: "Kirkland Signature USDA Prime Beef Loin Top Sirloin Cap Steak Boneless",
      brand: "Kirkland",
      department: "Meat & Seafood",
      category: "Prime Beef",
      imageURL: "https://d2d8wwwkmhfcva.cloudfront.net/310x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_0d493cf4-a04a-4afd-8372-ef102f1936d0.jpeg",
      price: 56.36,
      size: "4 lbs",
      quantity: 19
    },
    {
      name: "Kirkland Signature Pork Loin Top Loin Chops",
      brand: "Kirkland",
      department: "Meat & Seafood",
      category: "Pork & Lamb",
      imageURL: "https://d2d8wwwkmhfcva.cloudfront.net/480x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_12082476-40fc-4b3c-9a16-74cb5fee62e7.jpeg",
      price: 27.45,
      size: "6 lbs",
      quantity: 19
    },
    {
      name: "Kirkland Signature USDA Choice Beef Chuck Pot Roast Boneless",
      brand: "Kirkland",
      department: "Meat & Seafood",
      category: "Beef",
      imageURL: "https://d2d8wwwkmhfcva.cloudfront.net/171x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_af835117-0ced-4945-a813-b5d31cc0a5b1.jpeg",
      price: 46.23,
      size: "1.9 lbs",
      quantity: 19
    },
    {
      name: "Blue Hill Bay Smoked Salmon",
      brand: "Blue Hill Bay",
      department: "Meat & Seafood",
      category: "Seafood",
      imageURL: "",
      price: 18.29,
      size: "16 oz",
      quantity: 19
    },
    {
      name: "Kirkland Signature Organice Whole Young Chicken",
      brand: "Kirkland",
      department: "Meat & Seafood",
      category: "Poultry",
      imageURL: "https://d2d8wwwkmhfcva.cloudfront.net/171x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_3250466a-f94e-4d32-8d99-54a603852269.jpeg",
      price: 14.17,
      size: "6 lbs",
      quantity: 3
    },
    {
      name: "Fresh Cut Fruit Bowl",
      brand: "Nature",
      department: "Fruit & Vegetable Trays",
      category: "Produce",
      imageURL: "https://d2d8wwwkmhfcva.cloudfront.net/271x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_550633da-8939-483d-911e-c20a67d24f01.jpeg",
      price: 13.49,
      size: "3 lbs",
      quantity: 19
    },
    {
      name: "Mini Peppers, Greenhouse Grown",
      brand: "Nature",
      department: "Fruits & Vegetable Trays",
      category: "Produce",
      imageURL: "https://d2d8wwwkmhfcva.cloudfront.net/271x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d331c905-63d1-4cf4-9ae4-82e5487fa945.jpeg",
      price: 7.39,
      size: "1.5 lbs",
      quantity: 19
    },
    {
      name: "Summer Fresh Tuscan Bean Salad",
      brand: "Summer Fresh",
      department: "Produce",
      category: "Salad Mix",
      imageURL: "https://d2d8wwwkmhfcva.cloudfront.net/271x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_66764c9d-6caa-47b9-a1c0-a1735bcdc630.jpeg",
      price: 10.49,
      size: "42.4 oz",
      quantity: 19
    },


  ]
  await Product.insertMany(products)
  console.log("Created Products!")
}

const run = async () => {
  await main()
  db.close()
}

run()