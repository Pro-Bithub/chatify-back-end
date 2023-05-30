const Tuteur = require("../models/tuteurs.model.js");


// Create and Save a new tuteur
exports.create = (req, res) => {
// Validate request
if (!req.body) {
res.status(400).send({
message: "Content can not be empty!"
});
}

// Create a tuteur
const tuteur = new Tuteur({
title: req.body.title,
description: req.body.description,
image: req.body.image,
idcat: req.body.idcat
});

// Save Tuteur in the database
Tuteur.create(tuteur, (err, data) => {
if (err)
res.status(500).send({
message:
err.message || "Some error occurred while creating the tuteur."
});
else res.send(data);
});
};

// Retrieve all tuteurs from the database (with condition).
exports.findAll = (req, res) => {
const title = req.query.title;

Tuteur.getAll(title, (err, data) => {
if (err)
res.status(500).send({
message:
err.message || "Some error occurred while retrieving Tuteurs."
});
else res.send(data);
});
};

// Find a single Tuteur by Id
exports.findOne = (req, res) => {
Tuteur.findById(req.params.id, (err, data) => {
if (err) {
if (err.kind === "not_found") {
res.status(404).send({
  message: `Not found Tuteur with id ${req.params.id}.`
});
} else {
res.status(500).send({
message: "Error retrieving Tuteur with id " + req.params.id
});
}
} else res.send(data);
});
};
exports.findOnebyidcat = (req, res) => {
  Tuteur.findOnebyidcat(req.params.id, (err, data) => {
  if (err) {
  if (err.kind === "not_found") {
  res.status(404).send({
    message: `Not found Tuteur with id ${req.params.id}.`
  });
  } else {
  res.status(500).send({
  message: "Error retrieving Tuteur with id " + req.params.id
  });
  }
  } else res.send(data);
  });
  };




// Update a Tuteur identified by the id in the request
exports.update = (req, res) => {
// Validate Request
if (!req.body) {
res.status(400).send({
message: "Content can not be empty!"
});
}

console.log(req.body);

Tuteur.updateById(
req.params.id,
new Tuteur(req.body),
(err, data) => {
if (err) {
if (err.kind === "not_found") {
res.status(404).send({
  message: `Not found Tuteur with id ${req.params.id}.`
});
} else {
res.status(500).send({
message: "Error updating Tuteur with id " + req.params.id
});
}
} else res.send(data);
}
);
};

// Delete a Tuteur with the specified id in the request
exports.delete = (req, res) => {
Tuteur.remove(req.params.id, (err, data) => {
if (err) {
if (err.kind === "not_found") {
res.status(404).send({
  message: `Not found Tuteur with id ${req.params.id}.`
});
} else {
res.status(500).send({
message: "Could not delete Tuteur with id " + req.params.id
});
}
} else res.send({ message: `Tuteur was deleted successfully!` });
});
};

// Delete all Tuteurs from the database.
exports.deleteAll = (req, res) => {
  Tutorial.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    else res.send({ message: `All Tutorials were deleted successfully!` });
  });
};
