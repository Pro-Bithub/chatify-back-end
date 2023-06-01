CREATE TABLE tuteur (
  id INT PRIMARY KEY AUTO_INCREMENT,
  prenom VARCHAR(99) ,
  nom VARCHAR(99) NOT NULL,
  email VARCHAR(99) NOT NULL,
  bilographie TEXT,
  typedetuteur VARCHAR(99),
  languesparlees VARCHAR(99),
  motdepasse VARCHAR(99) NOT NULL
);
ALTER TABLE tuteur MODIFY COLUMN email VARCHAR(99) UNIQUE;
ALTER TABLE tuteur ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE tuteur ADD pricePerHour DECIMAL(10,2);


CREATE TABLE etudiant (
  id INT PRIMARY KEY AUTO_INCREMENT,
  prenom VARCHAR(99) ,
  nom VARCHAR(99) NOT NULL,
  email VARCHAR(99) UNIQUE NOT NULL,
  date_naissance DATE,
  adresse VARCHAR(99),
  telephone VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  motdepasse VARCHAR(99) NOT NULL
);

CREATE TABLE cour (
  id INT PRIMARY KEY AUTO_INCREMENT,
  titre VARCHAR(255) NOT NULL,
  places_disponibles INT,
  langue VARCHAR(50),
  niveau VARCHAR(50),
  duree VARCHAR(50),
  date DATE,
  description TEXT,
  prix DECIMAL(10, 2),
  horaire TIME
);
ALTER TABLE cour ADD COLUMN placesDisponibles INT;

-- Ajouter la colonne idtutor dans la table cour
ALTER TABLE cour
ADD idtutor INT;

-- Ajouter la contrainte de clé étrangère
ALTER TABLE cour
ADD CONSTRAINT fk_cour_tutor
FOREIGN KEY (idtutor)
REFERENCES tuteur(id);


## Project setup
```
npm install
```

### Run
```
node server.js
```
