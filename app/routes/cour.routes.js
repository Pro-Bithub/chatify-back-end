module.exports = app => {
  const cours = require("../controllers/cours.controller.js");
  
  var router = require("express").Router();
  

  router.post("/", cours.create);


  router.get("/", cours.findAll);
  

  
  // Retrieve a single Product with id
  router.get("/:id", cours.findOne);
  router.get("/byidtutor/:id", cours.findOnebyidtutor);
  
  // Update a Product with id
  router.put("/:id", cours.update);
  
  // Delete a Product with id
  router.delete("/:id", cours.delete);
  
  // Delete all Products
  router.delete("/", cours.deleteAll);
  
  app.use('/api/cours', router);
  };