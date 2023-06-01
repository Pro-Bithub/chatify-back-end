module.exports = app => {
  const etudiants = require("../controllers/etudiants.controller.js");
  
  var router = require("express").Router();
  


  
  router.post("/signup", etudiants.signup);
  router.post("/login", etudiants.login);
  


  router.get("/", etudiants.findAll);
  

  
  // Retrieve a single Product with id
  router.get("/:id", etudiants.findOne);

  
  // Update a Product with id
  router.put("/:id", etudiants.update);
  
  // Delete a Product with id
  router.delete("/:id", etudiants.delete);
  
  // Delete all Products
  router.delete("/", etudiants.deleteAll);
  
  app.use('/api/etudiants', router);
  };