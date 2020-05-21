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
      category: "Fruit",
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
      imageURL: "https://d2d8wwwkmhfcva.cloudfront.net/271x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_2b738098-d959-464c-9e02-5f537a7d34de.jpeg",
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
      department: "Produce",
      category: "Fruit & Vegetable Trays",
      imageURL: "https://d2d8wwwkmhfcva.cloudfront.net/271x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_550633da-8939-483d-911e-c20a67d24f01.jpeg",
      price: 13.49,
      size: "3 lbs",
      quantity: 19
    },
    {
      name: "Mini Peppers, Greenhouse Grown",
      brand: "Nature",
      department: "Produce",
      category: "Vegetable",
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
    {
      name: "Kirkland Signature Roasted Chicken & Swiss Roller Tray",
      brand: "Kirkland",
      department: "Deli",
      category: "Meat & Cheese Trays",
      imageURL: "https://d2d8wwwkmhfcva.cloudfront.net/271x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_77aee842-3e02-4dd4-a5b8-7eb381aa754a.jpeg",
      price: 12.19,
      size: "12 ct",
      quantity: 19
    },
    {
      name: "Amylu Organic Paleo Italian Meatball",
      brand: "Amylu",
      department: "Deli",
      category: "Prepared Meals",
      imageURL: "https://d2d8wwwkmhfcva.cloudfront.net/271x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d2f5f142-782d-416b-907c-c062474633cb.jpeg",
      price: 17.09,
      size: "32 oz",
      quantity: 19
    },
    {
      name: "Azuma Gourmet Seaweed Salad",
      brand: "Azuma Gourmet",
      department: "Deli",
      category: "Prepared Soups & Salad",
      imageURL: "https://d2d8wwwkmhfcva.cloudfront.net/271x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_58c59392-71da-464b-b4d8-f36720e7159a.jpeg",
      price: 13.89,
      size: "28 oz",
      quantity: 19
    },
    {
      name: "Sabra Roasted Pine Nut",
      brand: "Sabra",
      department: "Deli",
      category: "Dips & Spreads",
      imageURL: "https://d2d8wwwkmhfcva.cloudfront.net/271x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_591f41e6-0d13-4464-9e48-506604bf6a0f.jpg",
      price: 7.39,
      size: "32 oz",
      quantity: 19
    },
    {
      name: "Martin's Potato Bread",
      brand: "Martin's",
      department: "Bakery & Desserts",
      category: "Bread",
      imageURL: "https://d2d8wwwkmhfcva.cloudfront.net/271x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_56614c40-9737-4578-8e36-d9ac56c76d63.jpg",
      price: 7.69,
      size: "2x18 oz",
      quantity: 20
    },
    {
      name: "Jj Cassone Sandwich Rolls",
      brand: "Jj",
      department: "Bakery & Desserts",
      category: "Bread",
      imageURL: "https://d2d8wwwkmhfcva.cloudfront.net/271x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_830dabb6-7b5b-4d16-a84a-3991cfd1a56c.jpeg",
      price: 3.69,
      size: "12 ct",
      quantity: 12
    },
    {
      name: "Hostess Cupcakes & Twinkies",
      brand: "Hostess",
      department: "Bakery & Desserts",
      category: "Pies & Cakes",
      imageURL: "https://d2d8wwwkmhfcva.cloudfront.net/271x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_87395609-c0c8-4ea0-a2e5-f4c4190453db.jpeg",
      price: 8.59,
      size: "32 ct",
      quantity: 10
    }
  ]
  await Product.insertMany(products)
  console.log("Created Products!")
}

const run = async () => {
  await main()
  db.close()
}

run()