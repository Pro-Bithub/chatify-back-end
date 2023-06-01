const sql = require("./db.js");

// constructor
const Tuteur = function(tuteur) {
  this.id = tuteur.id;
  this.prenom = tuteur.prenom;
  this.nom = tuteur.nom;
  this.email = tuteur.email;
  this.bilographie = tuteur.bilographie;
  this.typedetuteur = tuteur.typedetuteur;
  this.languesparlees = tuteur.languesparlees;
  this.motdepasse = tuteur.motdepasse;
  this.pricePerHour = tuteur.pricePerHour;
};




Tuteur.signup = (newTuteur, result) => {
  // Vérifier si l'e-mail existe déjà
  sql.query("SELECT * FROM tuteur WHERE email = ?", newTuteur.email, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length > 0) {
      // L'e-mail existe déjà
      result({ message: "L'e-mail existe déjà." }, null);
      return;
    }

    // L'e-mail n'existe pas, insérer les données du tuteur
    sql.query("INSERT INTO tuteur SET ?", newTuteur, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      console.log("created tuteur: ", { id: res.insertId, ...newTuteur });
      result(null, { id: res.insertId, ...newTuteur });
    });
  });
};

Tuteur.update = (tuteur, result) => {
  sql.query(
    "UPDATE tuteur SET nom = ?, prenom = ?, email = ?, bilographie = ?, typedetuteur = ?, languesparlees = ?, motdepasse = ?, pricePerHour = ? WHERE id = ?",
    [tuteur.nom, tuteur.prenom, tuteur.email, tuteur.bilographie, tuteur.typedetuteur, tuteur.languesparlees, tuteur.motdepasse, tuteur.pricePerHour, tuteur.id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      console.log("updated tuteur: ", { id: tuteur.id, ...tuteur });
      result(null, { id: tuteur.id, ...tuteur });
    }
  );
};



Tuteur.create = (newtuteur, result) => {
  sql.query("INSERT INTO tuteur SET ?", newtuteur, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created tuteur: ", { id: res.insertId, ...newtuteur });
    result(null, { id: res.insertId, ...newtuteur });
  });
};

Tuteur.findByEmail = (email, result) => {
  sql.query("SELECT * FROM tuteur WHERE email = ?", [email], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found etudiant: ", res[0]);
      result(null, res[0]);
      return;
    }

    // Aucun étudiant trouvé avec l'email spécifié
    result(null, null);
  });
};




Tuteur.findOnebyidcat = (id, result) => {
  sql.query(`SELECT * FROM tuteur WHERE idcat = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found tuteur: ", res);
      result(null, res);
      return;
    }

    // not found tuteur with the id
    result({ kind: "not_found" }, null);
  });
};

Tuteur.findById = (id, result) => {
  sql.query(`SELECT * FROM tuteur WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found tuteur: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found tuteur with the id
    result({ kind: "not_found" }, null);
  });
};

Tuteur.getAll = (result) => {
  let query = "SELECT * FROM tuteur";

 
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("tuteurs: ", res);
    result(null, res);
  });
};



Tuteur.updateById = (id, tuteur, result) => {
  sql.query(
    "UPDATE tuteur SET title = ?, nom = ?, published = ? WHERE id = ?",
    [tuteur.title, tuteur.nom, tuteur.published, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found tuteur with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated tuteur: ", { id: id, ...tuteur });
      result(null, { id: id, ...tuteur });
    }
  );
};

Tuteur.remove = (id, result) => {
  sql.query("DELETE FROM tuteur WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found tuteur with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted tuteur with id: ", id);
    result(null, res);
  });
};

Tuteur.removeAll = result => {
  sql.query("DELETE FROM tuteur", (err, res) => {
    if (err) {
      console.log("error: ", err);

      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} tutorials`);
    result(null, res);
  });
};

module.exports = Tuteur;
