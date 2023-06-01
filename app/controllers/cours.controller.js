const Cour = require("../models/cours.model.js");

// Create and Save a new Cour
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a cour
  const cour = new Cour({
    titre: req.body.titre,
    placesDisponibles: req.body.placesDisponibles,
    langue: req.body.langue,
    niveau: req.body.niveau,
    duree: req.body.duree,
    date: req.body.date,
    description: req.body.description,
    prix: req.body.prix,
    horaire: req.body.horaire,
    idtutor: req.body.idtutor,
  });

  // Save Cour in the database
  Cour.create(cour, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Cour.",
      });
    else res.send(data);
  });
};

// Retrieve all cours from the database (with condition).
exports.findAll = (req, res) => {
  Cour.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Cours.",
      });
    else res.send(data);
  });
};

// Find a single Cour by Id
exports.findOne = (req, res) => {
  Cour.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Cour with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Cour with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};
exports.findOnebyidtutor = (req, res) => {
  Cour.findOnebyidtutor(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Cour with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Cour with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

// Update a Cour identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  console.log(req.body);

  Cour.updateById(req.params.id, new Cour(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Cour with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating Cour with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

// Delete a Cour with the specified id in the request
exports.delete = (req, res) => {
  Cour.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Cour with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Cour with id " + req.params.id,
        });
      }
    } else res.send({ message: `Cour was deleted successfully!` });
  });
};

// Delete all Cours from the database.
exports.deleteAll = (req, res) => {
  Tutorial.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials.",
      });
    else res.send({ message: `All Tutorials were deleted successfully!` });
  });
};
