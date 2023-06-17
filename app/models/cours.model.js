const sql = require("./db.js");

// constructor
const Cour = function(cour) {
  this.id = cour.id;
  this.titre = cour.titre;
  this.placesDisponibles = cour.placesDisponibles;
  this.langue = cour.langue;
  this.niveau = cour.niveau;
  this.duree = cour.duree;
  this.date = cour.date;
  this.description = cour.description;
  this.prix = cour.prix;
  this.horaire = cour.horaire;
  this.idtutor = cour.idtutor;
  
};






Cour.create = (newcour, result) => {
  sql.query("INSERT INTO cour SET ?", newcour, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created cour: ", { id: res.insertId, ...newcour });
    result(null, { id: res.insertId, ...newcour });
  });
};

Cour.findByEmail = (email, result) => {
  sql.query("SELECT * FROM cour WHERE email = ?", [email], (err, res) => {
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




Cour.findOnebyidtutor = (id, result) => {
  sql.query(`SELECT * FROM cour WHERE idtutor = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found cour: ", res);
      result(null, res);
      return;
    }

    // not found cour with the id
    result({ kind: "not_found" }, null);
  });
};

Cour.findById = (id, result) => {
  sql.query(`SELECT * FROM cour WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found cour: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found cour with the id
    result({ kind: "not_found" }, null);
  });
};

Cour.getAll = (result) => {
  let query = "SELECT cour.*, tuteur.prenom  , tuteur.nom FROM cour JOIN tuteur ON cour.idtutor = tuteur.id  ";
  


 
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("cours: ", res);
    result(null, res);
  });
};



Cour.updateById = (id, cour, result) => {

  sql.query(
    "UPDATE cour SET titre = ?, places_disponibles = ?, langue = ?, niveau = ? , duree = ?  , date = ?  , description = ?  , prix = ?, horaire = ? WHERE id = ?",
    [cour.titre, cour.placesDisponibles, cour.langue, cour.niveau, cour.duree, cour.date, cour.description, cour.prix, cour.horaire, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found cour with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated cour: ", { id: id, ...cour });
      result(null, { id: id, ...cour });
    }
  );
};

Cour.remove = (id, result) => {
  sql.query("DELETE FROM cour WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found cour with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted cour with id: ", id);
    result(null, res);
  });
};

Cour.removeAll = result => {
  sql.query("DELETE FROM cour", (err, res) => {
    if (err) {
      console.log("error: ", err);

      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} tutorials`);
    result(null, res);
  });
};

module.exports = Cour;
