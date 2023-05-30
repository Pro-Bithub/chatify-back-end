module.exports = app => {
  const tuteurs = require("../controllers/tuteurs.controller.js");
  
  var router = require("express").Router();
  
  // Create a new Product
  router.post("/", tuteurs.create);
  
  // Retrieve all Products
  router.get("/", tuteurs.findAll);
  

  
  // Retrieve a single Product with id
  router.get("/:id", tuteurs.findOne);
  router.get("/byidcat/:id", tuteurs.findOnebyidcat);
  
  // Update a Product with id
  router.put("/:id", tuteurs.update);
  
  // Delete a Product with id
  router.delete("/:id", tuteurs.delete);
  
  // Delete all Products
  router.delete("/", tuteurs.deleteAll);
  
  app.use('/api/tuteurs', router);
  };