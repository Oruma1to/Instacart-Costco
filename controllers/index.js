const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/user")
const Product = require("../models/product")
const db = require("../db")
require("dotenv").config()

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const SALT_ROUNDS = 11;
const TOKEN_KEY = process.env.TOKEN_MASTER;

const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getProduct = async (req, res) => {
  try {
    const { id } = req.params
    const product = await Product.findById(id)
    if (product) {
      return res.json(product)
    }
    res.status(404).json({ message: "Product not found!" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body)
    await product.save()
    res.status(201).json(product)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

const updateProduct = async (req, res) => {
  const { id } = req.params
  await Product.findByIdAndUpdate(id, req.body, { new: true }, (error, product) => {
    if (error) {
      return res.status(500).json({ error: error.message })
    }
    if (!product) {
      return res.status(404).json({ message: "Product not found!" })
    }
    res.status(200).json(product)
  })
}

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Product.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send(" Product deleted ")
    }
    throw new Error("Product not found")
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

///Users

const signUp = async (req, res) => {
  try {
    console.log(req.body)
    const { username, email, password, admin_key } = req.body
    const password_digest = await bcrypt.hash(password, SALT_ROUNDS)
    const user = await new User({
      username,
      email,
      password_digest,
      admin_key
    })
    await user.save();

    const payload = {
      id: user._id,
      username: user.username,
      email: user.email
    }

    const token = jwt.sign(payload, TOKEN_KEY)
    return res.status(201).json({ user, token })
  } catch (error) {
    console.log("Error in signUp")
    return res.status(400).json({ error: error.message })
  }
}

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email: email });
    if (await bcrypt.compare(password, user.password_digest)) {
      const payload = {
        id: user._id,
        username: user.username,
        email: user.email
      };
      const token = jwt.sign(payload, TOKEN_KEY);
      return res.status(201).json({ user, token });
    } else {
      res.status(401).send("Invalid Credentials");
    }
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }

}

const verifyUser = async (req, res) => {
  try {
    const user = await User.findById(res.locals.user.id)
    res.json(user)
  } catch (error) {
    res.status(401).send("Not an Authorized User")
  }
}


const getUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
// Testing new arrivals

const newArrivals = async (req, res) => {
  try {
    // const products = await Product.find()
    // const products = await Product.find({}, {}, { sort: { 'createdAt': -1 } });
    const products = await Product.find().sort({ _id: -1 }).limit(6)
    res.json(products)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const searchWord = async (req, res) => {

 try {
  let { term } = req.params
  console.log(term)
  // { $or: [{ quantity: { $lt: 20 } }, { price: 10 }] } 
  const product = await Product.find(
   {
    $or: [
     { name: { $regex: term, $options: 'i' } },
     { department: { $regex: term, $options: 'i' } },
     { category: { $regex: term, $options: 'i' } }
    ]
   }

  )
  console.log("product", product)
  if (product) {
   return res.json(product)
  }
  res.status(404).json({ message: "Product not found!" })
 } catch (error) {
  res.status(500).json({ error: error.message })
 }
}




module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  signUp,
  signIn,
  verifyUser,
  getUsers,
  newArrivals,
  searchWord
}

