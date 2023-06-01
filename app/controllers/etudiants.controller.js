const Etudiant = require("../models/etudiants.model.js");
const bcrypt = require('bcrypt');



exports.signup = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.motdepasse, 10); // Encrypt the password with bcrypt

    const etudiant = new Etudiant({
      nom: req.body.nom,
      email: req.body.email,
      motdepasse: hashedPassword
    });

  // Save etudiant in the database
  Etudiant.signup(etudiant, (err, data) => {
    if (err)
    res.status(500).send({
    message:
    err.message || "Some error occurred while creating the etudiant."
    });
    else res.send(data);
    });
   

  } catch (error) {
    console.error('Error creating etudiant:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, motdepasse } = req.body;

    // Vérifier si l'email existe dans la base de données
    Etudiant.findByEmail(email, async (err, etudiant) => {
      if (err) {
        res.status(500).json({ error: 'An error occurred' });
        return;
      }

      if (!etudiant) {
        res.status(404).json({ error: 'Etudiant not found' });
        return;
      }

      // Vérifier si le mot de passe correspond
      const passwordMatch = await bcrypt.compare(motdepasse, etudiant.motdepasse);

      if (!passwordMatch) {
        res.status(401).json({ error: 'Invalid password' });
        return;
      }

   /*    // Créer un token d'authentification (vous pouvez utiliser une bibliothèque comme jsonwebtoken)
      const token = createAuthToken(etudiant.id, etudiant.email); */

      // Renvoyer le token et les informations de l'étudiant
      res.send(etudiant);

    });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
};



// Retrieve all etudiants from the database (with condition).
exports.findAll = (req, res) => {
  Etudiant.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Cours.",
      });
    else res.send(data);
  });
};

// Find a single etudiant by Id
exports.findOne = (req, res) => {
  Etudiant.findById(req.params.id, (err, data) => {
if (err) {
if (err.kind === "not_found") {
res.status(404).send({
  message: `Not found etudiant with id ${req.params.id}.`
});
} else {
res.status(500).send({
message: "Error retrieving etudiant with id " + req.params.id
});
}
} else res.send(data);
});
};




// Update a etudiant identified by the id in the request
exports.update = (req, res) => {
// Validate Request
if (!req.body) {
res.status(400).send({
message: "Content can not be empty!"
});
}

console.log(req.body);

Etudiant.updateById(
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
  Etudiant.remove(req.params.id, (err, data) => {
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

// Delete all etudiants from the database.
exports.deleteAll = (req, res) => {
  Etudiant.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    else res.send({ message: `All Tutorials were deleted successfully!` });
  });
};
