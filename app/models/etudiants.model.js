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

Etudiant.findByEmail = (email, result) => {
  sql.query("SELECT * FROM etudiant WHERE email = ?", [email], (err, res) => {
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



Etudiant.getAll = (result) => {
  let query = "SELECT * FROM etudiant";

 
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
  // Delete associated rows in the favorite table first
  const deleteFavorites = new Promise((resolve, reject) => {
    sql.query("DELETE FROM favorite WHERE etudiantId = ?", id, (err, res) => {
      if (err) {
        console.log("Error deleting favorites:", err);
        reject(err);
      } else {
        console.log("Deleted favorites for etudiant with id:", id);
        resolve();
      }
    });
  });
  const deleteRendezVous = new Promise((resolve, reject) => {
    sql.query("DELETE FROM rendez_vous WHERE etudiant_id = ?", id, (err, res) => {
      if (err) {
        console.log("Error deleting rendez_vous:", err);
        reject(err);
      } else {
        console.log("Deleted rendez_vous for etudiant with id:", id);
        resolve();
      }
    });
  });

  const deleteTransactions = new Promise((resolve, reject) => {
    sql.query("DELETE FROM transactions WHERE etudiantId = ?", id, (err, res) => {
      if (err) {
        console.log("Error deleting transactions:", err);
        reject(err);
      } else {
        console.log("Deleted transactions for etudiant with id:", id);
        resolve();
      }
    });
  });


  // After deleting favorites, delete the etudiant row
  deleteFavorites.then(() => {
            deleteRendezVous.then(() => {

              deleteRendezVous.then(() => {
                  sql.query("DELETE FROM etudiant WHERE id = ?", id, (err, res) => {
                    if (err) {
                      console.log("Error deleting etudiant:", err);
                      result(null, err);
                      return;
                    }

                    if (res.affectedRows == 0) {
                      // Not found etudiant with the id
                      result({ kind: "not_found" }, null);
                      return;
                    }

                    console.log("Deleted etudiant with id:", id);
                    result(null, res);
                  });
                }).catch((err) => {
                  // Handle any errors that occurred during the deletion process
                  console.log("Error deleting associated favorites:", err);
                  result(err, null);
                });
          }).catch((err) => {
            // Handle any errors that occurred during the deletion process
            console.log("Error deleting associated favorites:", err);
            result(err, null);
          });
  }).catch((err) => {
    // Handle any errors that occurred during the deletion process
    console.log("Error deleting associated favorites:", err);
    result(err, null);
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
