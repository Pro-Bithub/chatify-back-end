const sql = require("./db.js");

// constructor 
const Etudiant = function(etudiant) {
  this.prenom = etudiant.prenom;
  this.nom = etudiant.nom;
  this.email = etudiant.email;
  this.date_naissance  = etudiant.date_naissance ;
  this.adresse  = etudiant.adresse ;
  this.telephone  = etudiant.telephone ;
  this.motdepasse = etudiant.motdepasse;
  
};




Etudiant.signup = (newetudiant, result) => {
  // Vérifier si l'e-mail existe déjà
  sql.query("SELECT * FROM etudiant WHERE email = ?", newetudiant.email, (err, res) => {
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

    // L'e-mail n'existe pas, insérer les données du etudiant
    sql.query("INSERT INTO etudiant SET ?", newetudiant, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      console.log("created etudiant: ", { id: res.insertId, ...newetudiant });
      result(null, { id: res.insertId, ...newetudiant });
    });
  });
};


Etudiant.create = (newetudiant, result) => {
  sql.query("INSERT INTO etudiant SET ?", newetudiant, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created etudiant: ", { id: res.insertId, ...newetudiant });
    result(null, { id: res.insertId, ...newetudiant });
  });
};


Etudiant.findOnebyidcat = (id, result) => {
  sql.query(`SELECT * FROM etudiant WHERE idcat = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found etudiant: ", res);
      result(null, res);
      return;
    }

    // not found etudiant with the id
    result({ kind: "not_found" }, null);
  });
};

Etudiant.findById = (id, result) => {
  sql.query(`SELECT * FROM etudiant WHERE id = ${id}`, (err, res) => {
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

    // not found etudiant with the id
    result({ kind: "not_found" }, null);
  });
};

Etudiant.getAll = (title, result) => {
  let query = "SELECT * FROM etudiant";

  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("etudiants: ", res);
    result(null, res);
  });
};



Etudiant.updateById = (id, etudiant, result) => {
  sql.query(
    "UPDATE etudiant SET title = ?, nom = ?, published = ? WHERE id = ?",
    [etudiant.title, etudiant.nom, etudiant.published, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found etudiant with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated etudiant: ", { id: id, ...etudiant });
      result(null, { id: id, ...etudiant });
    }
  );
};

Etudiant.remove = (id, result) => {
  sql.query("DELETE FROM etudiant WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found etudiant with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted etudiant with id: ", id);
    result(null, res);
  });
};

Etudiant.removeAll = result => {
  sql.query("DELETE FROM etudiant", (err, res) => {
    if (err) {
      console.log("error: ", err);

      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} tutorials`);
    result(null, res);
  });
};

module.exports = Etudiant;
