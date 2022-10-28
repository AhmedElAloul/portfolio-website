// modules required for routing
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// define the product model
let Product = require("../models/products");

/* GET products List page. READ */
router.get("/", (req, res, next) => {
  // find all products in the products collection
  Product.find((err, products) => {
    if (err) {
      return console.error(err);
    } else {
      res.render("products/index", {
        title: "Products",
        products: products,
      });
    }
  });
});

//  GET the Product Details page in order to add a new Product
router.get("/add", (req, res, next) => {
  /*****************
   * ADD CODE HERE *
   *****************/

  res.render("products/add", {
    title: "Add Products",
  }).status(200)

});

// POST process the Product Details page and create a new Product - CREATE
router.post("/add", async (req, res, next) => {
  /*****************
   * ADD CODE HERE *
   *****************/
  const productName = req.body.productName
  const productPrice = req.body.productPrice
  const productDesc = req.body.productDesc

  const product = await Product.create({
    Productname: productName,
    Price: productPrice,
    Description: productDesc
  })

  res.status(201).json(product)

});


// GET - process the delete
router.get("/delete", async (req, res, next) => {
  /*****************
   * ADD CODE HERE *
   *****************/

  const deleted = await Product.deleteMany()

  if (deleted) {
    res.status(201).json({ message: "Products has benn deleted" })
  }

});


// GET the Product Details page in order to edit an existing Product
router.get("/:id", async (req, res, next) => {
  /*****************
   * ADD CODE HERE *
   *****************/
  const productId = req.params.id
  const products = await Product.findById(productId)

  res.render("products/details", {
    title: "Product Details",
    products: products
  })

});

// POST - process the information passed from the details form and update the document
router.post("/:id", async (req, res, next) => {
  /*****************
   * ADD CODE HERE *
   *****************/

  const updatedProduct = {
    Productname: req.body.productName,
    Description: req.body.Description,
    Price: req.body.price
  }

  const update = await Product.findByIdAndUpdate(req.params.id, updatedProduct, { new: true })

  res.status(200).json(update)

});

module.exports = router;
