module.exports = app => {
  const tuteurs = require("../controllers/tuteurs.controller.js");
  
  var router = require("express").Router();
  

  router.post("/", tuteurs.create);
  
  router.post("/signup", tuteurs.signup);

  router.post("/login", tuteurs.login);
  router.post("/modify", tuteurs.modify);

  router.post("/save-transaction", tuteurs.saveTransaction);

  router.get("/", tuteurs.findAll);
  
  router.get("/rendezvous/:etudiantId", tuteurs.rendezvous);
  router.get("/appointments/:tutorId", tuteurs.appointments);

  router.get("/appointments-accept/:id", tuteurs.accepterRendezVous);
  router.get("/appointments-refuse/:id", tuteurs.refuserRendezVous);
  router.get("/get/transactions", tuteurs.gettransactions);

// Mark tutor as favorite
router.get("/mark-as-favorite", tuteurs.markAsFavorite);
  // Unmark tutor as favorite
router.delete("/unmark-as-favorite", tuteurs.unmarkAsFavorite);




  // Retrieve a single Product with id
  router.get("/:id", tuteurs.findOne);
  router.get("/favorites/:etudiantId", tuteurs.getFavoritesByEtudiantId);

  router.get("/myfavorites/:etudiantId", tuteurs.getMyFavoritesByEtudiantId);


  router.get("/byidcat/:id", tuteurs.findOnebyidcat);
  
  // Update a Product with id
  router.put("/:id", tuteurs.update);
  
  // Delete a Product with id
  router.delete("/:id", tuteurs.delete);
  
  // Delete all Products
  router.delete("/", tuteurs.deleteAll);
  
  app.use('/api/tuteurs', router);
  };