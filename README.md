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



## Project setup
```
npm install
```

### Run
```
node server.js
```
