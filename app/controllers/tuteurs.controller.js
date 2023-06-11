const Tuteur = require("../models/tuteurs.model.js");

const bcrypt = require("bcrypt");

// Create and Save a new tuteur
exports.signup = async (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  try {
    const hashedPassword = await bcrypt.hash(req.body.motdepasse, 10); // Encrypt the password with bcrypt

    // Create a tuteur
    const tuteur = new Tuteur({
      nom: req.body.nom,
      email: req.body.email,
      typedetuteur: "Tuteur communautaire",
      motdepasse: hashedPassword,
    });
    // Save etudiant in the database
    Tuteur.signup(tuteur, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the etudiant.",
        });
      else res.send(data);
    });
  } catch (error) {
    console.error("Error creating etudiant:", error);
    res.status(500).json({ error: "An error occurred" });
  }
};

// Create and Save a new tuteur
exports.modify = async (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  try {
    const { ancienemail, motdepasse, nouveaumotdepasse } = req.body;

    // Vérifier si l'email existe dans la base de données
    Tuteur.findByEmail(ancienemail, async (err, tuteur) => {
      if (err) {
        res.status(500).json({ error: "An error occurred" });
        return;
      }
      console.log("updated tuteur: ", tuteur);
      if (!tuteur) {
        res.status(404).json({ error: "tuteur not found" });
        return;
      }

      // Vérifier si le mot de passe correspond
      const passwordMatch = await bcrypt.compare(motdepasse, tuteur.motdepasse);

      if (!passwordMatch) {
        res.status(401).json({ error: "Invalid password" });
        return;
      }
      const Password = tuteur.motdepasse;
      if (nouveaumotdepasse != null && nouveaumotdepasse != "")
        Password = await bcrypt.hash(nouveaumotdepasse, 10);

      // Create a tuteur
      const ntuteur = new Tuteur({
        id: tuteur.id,
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        bilographie: req.body.bilographie,
        typedetuteur: req.body.typedetuteur,
        languesparlees: req.body.languesparlees,
        motdepasse: Password,
        pricePerHour: req.body.pricePerHour,
      });

      // modify Tuteur in the database
      Tuteur.update(ntuteur, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Tuteur.",
          });
        else res.send(data);
      });
    });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "An error occurred" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, motdepasse } = req.body;

    // Vérifier si l'email existe dans la base de données
    Tuteur.findByEmail(email, async (err, tuteur) => {
      if (err) {
        res.status(500).json({ error: "An error occurred" });
        return;
      }

      if (!tuteur) {
        res.status(404).json({ error: "tuteur not found" });
        return;
      }

      // Vérifier si le mot de passe correspond
      const passwordMatch = await bcrypt.compare(motdepasse, tuteur.motdepasse);

      if (!passwordMatch) {
        res.status(401).json({ error: "Invalid password" });
        return;
      }

      /*    // Créer un token d'authentification (vous pouvez utiliser une bibliothèque comme jsonwebtoken)
        const token = createAuthToken(tuteur.id, tuteur.email); */

      // Renvoyer le token et les informations de l'étudiant
      res.send(tuteur);
    });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "An error occurred" });
  }
};

// Create and Save a new tuteur
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a tuteur
  const tuteur = new Tuteur({
    prenom: req.body.prenom,
    nom: req.body.nom,
    email: req.body.email,
    bilographie: req.body.bilographie,
    typedetuteur: req.body.typedetuteur,
    languesparlees: req.body.languesparlees,
    motdepasse: motdepasse,
  });

  // Save Tuteur in the database
  Tuteur.create(tuteur, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the tuteur.",
      });
    else res.send(data);
  });
};


exports.gettransactions = (req, res) => {
  Tuteur.gettransactions((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Tuteurs.",
      });
    else res.send(data);
  });
};

// Retrieve all tuteurs from the database (with condition).
exports.findAll = (req, res) => {
  Tuteur.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Tuteurs.",
      });
    else res.send(data);
  });
};


// Save a transaction
exports.saveTransaction = (req, res) => {
  const { etudiantId, idcours, tutorId, prix, date, iscours } = req.body;


  // Save the transaction in the database
  Tuteur.saveTransaction(etudiantId, idcours, tutorId, prix, date, iscours,(err, data)  => {
    if (err) {
      res.status(500).send({
        message: 'Failed to save transaction.',
      });
    } else {
      res.send({
        message: 'Transaction saved successfully.',
        data,
      });
    }
  });
};


// Find a single Tuteur by Id
exports.rendezvous = (req, res) => {
  Tuteur.rendezvous(req.params.etudiantId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found rendezvous with id ${req.params.etudiantId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving rendezvous with etudiantId " + req.params.etudiantId,
        });
      }
    } else res.send(data);
  });
};
exports.appointments = (req, res) => {
  Tuteur.appointments(req.params.tutorId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found rendezvous with id ${req.params.tutorId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving rendezvous with tutorId " + req.params.tutorId,
        });
      }
    } else res.send(data);
  });
};
exports.accepterRendezVous = (req, res) => {
  Tuteur.accepterRendezVous(req.params.id,"Confirmé", (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found accepterRendezVous with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving accepterRendezVous with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};


exports.refuserRendezVous = (req, res) => {
  Tuteur.accepterRendezVous(req.params.id,"Annulé", (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found accepterRendezVous with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving accepterRendezVous with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};





// Mark a tutor as favorite by tutorId and etudiantId
exports.markAsFavorite = (req, res) => {
  const { tutorId, etudiantId } = req.query;

  // Logic to mark the tutor as a favorite by updating the tutor record in the database
  // For example:
  Tuteur.markAsFavorite(
    tutorId,
    etudiantId,
    (err, data) => {
      if (err) {
        res.status(500).send({
          message: "Error marking tutor as favorite.",
        });
      } else {
        res.send({
          message: "Tutor marked as favorite successfully.",
          data,
        });
      }
    }
  );

};

exports.unmarkAsFavorite = (req, res) => {
  const { tutorId, etudiantId } = req.query;

  // Logic to unmark the tutor as a favorite by updating the tutor record in the database
  // For example:
  Tuteur.unmarkAsFavorite(
    tutorId,
    etudiantId,
    (err, data) => {
      if (err) {
        res.status(500).send({
          message: "Error unmarking tutor as favorite.",
        });
      } else {
        res.send({
          message: "Tutor unmarked as favorite successfully.",
          data,
        });
      }
    }
  );
};



// Find a single Tuteur by Id
exports.getFavoritesByEtudiantId = (req, res) => {
  Tuteur.getFavoritesByEtudiantId(req.params.etudiantId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Tuteur with etudiantId ${req.params.etudiantId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Tuteur with etudiantId " + req.params.etudiantId,
        });
      }
    } else res.send(data);
  });
};

exports.getMyFavoritesByEtudiantId = (req, res) => {
  Tuteur.getMyFavoritesByEtudiantId(req.params.etudiantId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Tuteur with etudiantId ${req.params.etudiantId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Tuteur with etudiantId " + req.params.etudiantId,
        });
      }
    } else res.send(data);
  });
};


// Find a single Tuteur by Id
exports.findOne = (req, res) => {
  Tuteur.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Tuteur with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Tuteur with id " + req.params.id,
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
          message: `Not found Tuteur with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Tuteur with id " + req.params.id,
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
      message: "Content can not be empty!",
    });
  }

  console.log(req.body);

  Tuteur.updateById(req.params.id, new Tuteur(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Tuteur with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating Tuteur with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

// Delete a Tuteur with the specified id in the request
exports.delete = (req, res) => {
  Tuteur.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Tuteur with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Tuteur with id " + req.params.id,
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
          err.message || "Some error occurred while removing all tutorials.",
      });
    else res.send({ message: `All Tutorials were deleted successfully!` });
  });
};
