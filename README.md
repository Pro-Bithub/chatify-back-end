CREATE TABLE categories (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  image VARCHAR(255) NOT NULL,
  idcat INT
);

CREATE TABLE clients (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nom VARCHAR(255) NOT NULL,
  prenom VARCHAR(255) NOT NULL,
  telephone VARCHAR(255) NOT NULL,
  adresse VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);
CREATE TABLE souscategories (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  image VARCHAR(255) NOT NULL,
  idcat INT,
  FOREIGN KEY (idcat) REFERENCES categories(id)
);
CREATE TABLE produit (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  image VARCHAR(255) NOT NULL,
  idcat INT,
  FOREIGN KEY (idcat) REFERENCES souscategories(id)
);


CREATE TABLE signalements (
  id INT PRIMARY KEY AUTO_INCREMENT,
  datePanne DATE,
  numSerie VARCHAR(255),
  typePanne VARCHAR(255),
  repare BOOLEAN,
  nomProduit VARCHAR(255),
  observations TEXT,
  idclient INT,
  FOREIGN KEY (idclient) REFERENCES clients (id)
);

INSERT INTO categories (id, name, image, idcat) VALUES
  (1, 'Terminaux Mobiles', 'terminaux_mobiles.png', 10),
  (2, 'Imprimantes Thermiques', 'Imprimantes_thermiques.png', 20),
  (3, 'Scanners code à barre', 'scanners_code_a_barre.png', 30),
  (4, 'Tablettes Durcies', 'tablettes_durcies.png', 40),
  (5, 'Solution Badges', 'solution_badges.png', 50),
  (6, 'Solution bracelets', 'solution_bracelets.png', 60),
  (7, 'RFID', 'RFID.png', 70),
  (8, 'Kiosques interactifs', 'kiosques_interactifs.png', 80),
  (9, 'Consommables code à barre : Etiquettes et rubans', 'etiquettes_et_rubans.png', 90),
  (10, 'Accessoires', 'accessoires.png', 100),
  (11, 'Equipement Zebra fin de série', 'equipement_zebra_fin_de_serie.png', 110);

INSERT INTO souscategories (id, name, image, idcat) VALUES
  (1, 'Terminaux tactiles avec clavier', 'terminaux_tactiles_avec_clavie.png', 1),
  (2, 'Terminaux tactiles', 'terminaux_tactiles.png', 1),
  (3, 'Wearables', 'wearables.png', 1),
  (4, 'Logiciels', 'logiciels.png', 1),
  (5, 'Imprimantes thermiques Industrielles', 'imprimantes_thermiques_Industrielles.png', 2),
  (6, 'Imprimantes thermiques de bureau', 'imprimantes_thermiques_de_bureau.png', 2),
  (7, 'Imprimantes thermiques mobiles', 'imprimantes_thermiques_mobiles.png', 2),
  (8, 'Scanners code barre sans fil', 'scanners_code_barre_sans_fil.png', 3),
  (9, 'Scanners code barre filaires', 'scanners_code_barre_filaires.png', 3),
  (10, 'Scanners code barre de comptoir', 'scanners_code_barre_de_comptoir.png', 3),
  (11, 'Logiciels', 'logiciels.png', 3),
  (12, 'Tablettes windows', 'tablettes_windows.png', 4),
  (13, 'Tablettes Android', 'tablettes_android.png', 4),
  (14, 'Imprimantes à badges', 'imprimantes_a_badges.png', 5),
  (15, 'Consommables', 'Consommables.png', 5),
  (16, 'Logiciels', 'Logiciels.png', 5),
  (17, 'Z-Band Wristbands', 'z_Band_Wristbands.png', 6),
  (18, 'Imprimante de bracelets Zebra ZD510-HC', 'imprimante_de_bracelets_Zebra_ZD510-HC.png', 6),
  (19, 'Imprimantes RFID', 'imprimantes_RFID.png', 7),
  (20, 'Lecteurs fixes RFID', 'lecteurs_fixes_RFID.png', 7),
  (21, 'Terminaux RFID', 'terminaux_RFID.png', 7),
  (22, 'Antennes', 'antennes.png', 7),
  (23, 'Consommables RFID', 'consommables_RFID.png', 7),
  (24, 'kiosque interactif CC600 Zebra', 'kiosque_interactif_CC600_Zebra.png', 8),
  (25, 'kiosque interactif CC6000 Zebra', 'kiosqueinteractif_CC6000_Zebra.png', 8),
  (26, 'Rubans Transfert Thermique', 'rubans_Transfert_Thermique.png', 9),
  (27, 'Etiquettes Autocollantes', 'Etiquettes_autocollantes.png', 9),
  (28, 'Accessoires pour imprimantes', 'accessoires_pour_imprimantes.png', 10),
  (29, 'Accessoires pour les scanners', 'Accessoires_pour_les_scanners.png', 10),
  (30, 'Accessoires pour Les Termineaux Mobile', 'Accessoires_pour_Les_Termineaux Mobile.png', 10),
   (31, 'Imprimantes Zebra fin de série', 'Imprimantes_Zebra_fin_de_série.png', 11),
    (32, 'Terminaux Zebra discontinuées', 'Terminaux_Zebra_discontinuées.png', 11);

INSERT INTO produit (id, title, description, image, idcat) 
VALUES (1, 'Terminal Mobile MC2200 Zebra', 'Transformez votre MC2200 ou MC2700 en appareil de type pistolet sans perdre en ergonomie ni en performance de lecture. Il vous suffit d’encliqueter la poignée de déclenchement amovible, sans l’aide d’outils. Et parce que les éléments électroniques sont situés dans la poignée de déclenchement, la vitesse de lecture n’est pas impactée, contrairement à bien d’autres modèles de poignées.', 'Terminal_Mobile_MC2200_Zebra.png', 1);

INSERT INTO produit (id, title, description, image, idcat) 
VALUES (2, 'Terminal Mobile MC3300X Zebra', 'Le Terminal Mobile MC3300X se décline en terminaux portables Android à clavier, légers et polyvalents, conçus pour l’entrepôt, le magasin ou l’usine.
Cet terminal PDA se distingue de la concurrence en offrant quatre formats différents, trois claviers, et des options de capture de données de tout premier plan, qui peuvent être adaptées aux besoins applicatifs des clients.
Avec terminal portable MC3300x la productivité et l’efficacité de vos équipes atteignent des niveaux sans précédent. Le terminal mobile durci MC3300x prend en charge le Wi-Fi 6 et bien plus encore. Microsoft Teams est désormais compatibles avec l’application Walkie Talkie.', 'Terminal_Mobile_MC3300X_Zebra.png', 1);

INSERT INTO produit (id, title, description, image, idcat) 
VALUES (3, 'Terminal Mobile MC9300 Zebra', 'Le Terminal Mobile MC3300X se décline en terminaux portables Android à clavier, légers et polyvalents, conçus pour l’entrepôt, le magasin ou l’usine.
Cet terminal PDA se distingue de la concurrence en offrant quatre formats différents, trois claviers, et des options de capture de données de tout premier plan, qui peuvent être adaptées aux besoins applicatifs des clients.
Avec terminal portable MC3300x la productivité et l’efficacité de vos équipes atteignent des niveaux sans précédent. Le terminal mobile durci MC3300x prend en charge le Wi-Fi 6 et bien plus encore. Microsoft Teams est désormais compatibles avec l’application Walkie Talkie.', 'Terminal_Mobile_MC9300_Zebra.png', 1);



  INSERT INTO clients (id, nom, prenom, telephone, adresse, username, password) VALUES (1, 'Doe', 'John', '1234567890', '123 Street, City', 'johndoe', 'password123');
    INSERT INTO clients (id, nom, prenom, telephone, adresse, username, password) VALUES (2, 'admin', 'admin', '1234567890', '123 Street, City', 'admin', 'admin');
    INSERT INTO signalements (id, datePanne, numSerie, typePanne, repare, nomProduit, observations, idclient)
VALUES
  (1, '2022-01-01', 'ABC123', 'Tête', 'OUI', 'Produit 1', 'Observations du signalement 1', 1),
  (2, '2022-02-01', 'DEF456', 'Mandrin', 'NON', 'Produit 2', 'Observations du signalement 2', 1),
  (3, '2022-03-01', 'GHI789', 'Autre', 'NON', 'Produit 3', 'Observations du signalement 3', 1),
  (4, '2022-01-01', 'ABC123', 'Tête', 'OUI', 'Produit 1', 'Observations du signalement 1', 1),
  (5, '2022-02-01', 'DEF456', 'Mandrin', 'NON', 'Produit 2', 'Observations du signalement 2', 1),
  (6, '2022-03-01', 'GHI789', 'Autre', 'NON', 'Produit 3', 'Observations du signalement 3', 1),
  (7, '2022-01-01', 'ABC123', 'Tête', 'OUI', 'Produit 1', 'Observations du signalement 1', 1),
  (8, '2022-02-01', 'DEF456', 'Mandrin', 'NON', 'Produit 2', 'Observations du signalement 2', 1),
  (9, '2022-03-01', 'GHI789', 'Autre', 'NON', 'Produit 3', 'Observations du signalement 3', 1),
  (10, '2022-01-01', 'ABC123', 'Tête', 'OUI', 'Produit 1', 'Observations du signalement 1', 1),
  (11, '2022-02-01', 'DEF456', 'Mandrin', 'NON', 'Produit 2', 'Observations du signalement 2', 1),
  (12, '2022-03-01', 'GHI789', 'Autre', 'NON', 'Produit 3', 'Observations du signalement 3', 1);
  
###########################################################################################################

ALTER TABLE produit
ADD COLUMN caracteristiques VARCHAR(500) NOT NULL AFTER description;
ALTER TABLE produit
MODIFY COLUMN description VARCHAR(500) NOT NULL;


UPDATE produit
SET caracteristiques = 'Gamme: Terminal Mobile Zebra
Modèle: Zebra MC2200
Système d’exploitation: Android 11; upgradeable to Android 14
Microprocesseur: Qualcomm Snapdragon™ 660 octa-core, 1.8 GHz
Affichage: 4 po WVGA (800 x 480), rétroéclairage par LED, affi- chage couleur, traitement optique de l’écran tactile
Écran tactile: Écran tactile capacitif, multipoint, verre Corning® Gorilla® Glass
Alimentation: Capacité standard 3 500 mAh/12,60 Wh Capacité étendue 4900 mAh/17,64 Wh
Clavier: Clavier numérique 34 touches avec touches de fonction, prise en charge de clavier virtue
Voix et audio: Haut-parleur et microphone internes, prise en charge des écouteurs Bluetooth sans fil, haut-parleur haute qualité
Boutons: Lecture physique, volume +/-, alimentation
Mémoire: 2 Go de RAM/16 Go de mémoire Flash 3 Go de RAM/32 Go de mémoire Flash
Sécurité: Le produit est validé par la norme FIPS 140-2. Cette fonction de sécurité peut être activée sur certaines configurations par le biais d’une demande d’UGS personnalisée.
Scanner Code à barre: Moteur de lecture SE4100 1D/2D à portée standard
Caméra: Caméra arrière de 13 MP en option, détection de phase, auto-focus, avec témoin lumineux de flash
NFC: ISO14443 types A et B : Cartes FeliCa et ISO 15693. Mode P2P et prise en charge de l’émulation de cartes par hôte (HCE)
Résistance aux chutes: Chutes multiples de 1,52 m/5 pi sur du béton de 14°F à 122°F/-10°C à 50°C selon la norme MIL-STD 810G
Indice d’étanchéité: IP65 conforme aux normes IEC relatives à l’étanchéité'
WHERE id = 1;

UPDATE produit
SET caracteristiques = 'Gamme: Terminal tactiles avec clavier
Modéle: Zebra MC3300X
Système d’exploitation: Android 10 avec mode restreint Zebra pour le contrôle de l’accès à GMS et autres services ; prise en charge des futures versions d’Android prévue
Microprocesseur: Qualcomm SnapdragonTM 660 huit cœurs, 2,2 GHz
Affichage: 4 pouces (800 x 480) WVGA, couleur
Écran tactile: Écran tactile en verre Gorilla Glass Corning avec inter- valle d’air ; modes de saisie digital, avec un gant et avec un stylet (stylet conductif vendu séparément
Alimentation: Tous les modèles sont livrés avec une batterie PowerPrecision+ Li-Ion rechargeable de 3,6 V, et 7 000 mAh ; charge complète en moins de cinq (5) heures ; prise en charge du remplacement par l’utili- sateur avec persistance temporaire de la connexion au réseau local sans fil/Bluetooth Rétrocompatibilité avec les batteries du terminal MC3300, 2 740 mAh (1X) et 5 200 mAh (2X
Clavier: Numérique (29 touches), fonctions/numérique (38 touches), alphanumérique (47 touches
Voix et audio: Haut-parleur et microphone intégrés
Boutons: Deux touches de lecture programmables sur les côtés
Mémoire: Flash de 4 Go/32 Go
Sécurité: WEP (40 ou 104 bits) ; WPA/WPA2 Personal (TKIP et AES) ; WPA31 Personal (SAE) ; WPA/WPA2 Enterprise (TKIP et AES) ; WPA31 Enterprise (AES) — EAP-TTLS (PAP, MSCHAP, MSCHAPv2), EAP-TLS, PEAPv0- MSCHAPv2, PEAPv1-EAP-GTC, LEAP et EAP-PWD ; WPA31 Enterprise mode 192 bits (GCMP-256) — EAP- TLS ; Enhanced Open (OWE)
Scanner Code à barre: MC3300x plat (lecture à 0°) : SE965 1D, SE4720/SE4770 2D, SE4850 ERI MC3300x à tête pivotante : SE965 1D laser MC3300x pistolet : SE965 1D, SE4720/SE4770 2D, SE4850 ERI MC3300x droit (lecture à 45 °) : SE4770 2D
Caméra: couleur, 13 MP, flash à DEL (en option sur les configu- rations droites et pivotantes uniquement)
NFC: Couplage par contact, ISO 14443 types A et B, cartes Felica et ISO 15693, mode P2P et prise en charge de l’émulation de cartes par hôte
Résistance aux chutes: Chutes multiples de 6 pi/1,80 m sur une surface en béton, sur toute la plage de températures de fonc- tionnement, conformément à la norme MIL-STD-810G
Indice d’étanchéité: IP64'
WHERE id = 2;

UPDATE produit
SET caracteristiques = 'Gamme: TERMINAL MOBILE TACTILE ULTRA-DURCI AVEC TOUCHES
Modèle: Zebra MC9300
système d\'exploitation: Android 11 ; avec prévision de la mise à jour vers Android 14
Microprocesseur: Qualcomm Snapdragon™ 660 octa-core, 2.2 GHz
Affichage: 4,3 po WVGA (800 x 480) couleur
Écran tactile: Tactile capacitif double mode, doigt nu, doigt ganté ou stylet (stylet conducteur vendu séparément) ; protecteur d’écran (vendu séparément) ; verre Corning Gorilla Glass avec chambre (modèle standard) ou traitement optique (modèle chambre froide)
Alimentation: Batterie Li-Ion rechargeable : 3,6 V, 7 000 mAh, (Capacité de la batterie de la chambre froide : 5 000 mAh) Offre des deux batteries : PowerPrecision+ avec technologie de batterie améliorée pour des temps de cycle plus longs, visibilité en temps réel sur les indicateurs d’état de la batterie pour une meilleure gestion, chargement rapide (jusqu’à 2,4 A), batterie de secours échangeable à chaud avec rémanence temporaire
Clavier: Rétroéclairé, remplaçable sur site, alphanumérique 58 touches, alphanumérique 53 touches standard, émulation de terminaux 53 touches (5250 et VT), 43 touches, numérique/fonctions 34 touches, numérique/calcul 29 touches
Voix et audio: Haut-parleur, microphone, fonction talkie-walkie (haut-parleur interne et prise en charge des écouteurs Bluetooth sans fil).
Mémoire: 4 Go de RAM/32 Go de mémoire Flash pSLC
Sécurité: WEP (40 ou 104 bits) ; WPA/WPA2 Personnel (TKIP et AES) ; WPA/WPA2 Entreprise (TKIP et AES) ; EAP-TTLS (PAP, MSCHAP, MSCHAPv2) ; EAP-TLS ; PEAPv0- MSCHAPv2 ; PEAPv1-EAP-GTC et LEAP ; EAP-PWD FIPS 140-2 niveau 1 : données en mouvement et données au repos
Scanner Code à barre: SE965 : Scanner laser à portée standard 1D SE4750 : Imageur omnidirectionnel à portée standard 1D/2D SE4770 : Imageur omnidirectionnel à portée standard 1D/2D SE4750 DPM : Imageur DPM (Direct Part Mark) SE4850 : Imageur 1D/2D à portée étendue
Caméra: Avant : 5 MP, mise au point fixe, ouverture de 2,0 Arrière : 13 MP, mise au point automatique, ouverture de 2,2, flash à DEL pour une lumière blanche équilibrée, mode torche, lecture de codes-barres
NFC: Couplage par contact, ISO 14443 types A et B, cartes Felica et ISO 15693, mode P2P et prise en charge de l’émulation de cartes par hôte
Résistance aux chutes: Standard : chute de 3,1 m (10 pi) à température ambiante conformément à la norme MIL-STD-810G, chute de 2,4 m (8 pi) sur le béton conformément à la norme MIL-STD-810G
Indice d’étanchéité: IP67 et IP65, conformément aux normes IEC relatives à l’étanchéité
Cellulaire: Oui
WIFI: Oui'
WHERE id = 3;


UPDATE produit
SET description = 'Technocode Tunisie vous présente Terminal Portable Zebra, le PDA abordables dotés de toutes les fonctionnalités dont votre entreprise a besoin. Le Terminal Portable Zebra MC2200 augmente votre productivité et la précision de vos tâches. On outre, ce terminal mobile robuste est à la fois rentable et ne manque pas de fonctionnalités. Le Zebra MC2200 est un polyvalent qui pourrait répondre aux besoins de pratiquement tous les cas d’utilisation de votre entreprise.

Brique et pistolet : deux appareils en un
Transformez votre MC2200 ou MC2700 en appareil de type pistolet sans perdre en ergonomie ni en performance de lecture. Il vous suffit d’encliqueter la poignée de déclenchement amovible, sans l’aide d’outils. Et parce que les éléments électroniques sont situés dans la poignée de déclenchement, la vitesse de lecture n’est pas impactée, contrairement à bien d’autres modèles de poignées.

Conçu pour durer des années
Les terminal code à barre MC2200 résistent à tout : eau, poussière, chutes sur béton, neige, pluie, chaleur, froid glacial. Et deux de leurs composants les plus vulnérables, l’écran et la fenêtre de lecture du scanner, sont renforcés par le verre Gorilla Glass.

Plateforme Android de Zebra la plus puissante à ce jour
En matière de plateforme, ces équipements représentent l’excellence, en offrant un processeur de pointe et la version Android la plus avancée. Le processeur offre une performance digne d’un ordinateur de bureau sur les applications les plus exigeantes, mais en consommant moins pour maximiser l’autonomie de la batterie.

Capture de données professionnelle de Zebra
Dès la première tentative, capturez pratiquement tous les codes- barres quel que soit leur état, qu’ils soient endommagés, salis ou mal imprimés. Grâce à la capture omnidirectionnelle du code-barres, vous ne perdez pas de temps à aligner le lecteur et le code-barres.

Autonomie sur toute la période de travail
La batterie standard assure près de deux périodes de travail complètes dans tous les environnements, à savoir 16,5 heures à température ambiante et 14 heures à -4°F/-20°C. La batterie à capacité étendue offre une autonomie prolongée, plus de 23 heures à température ambiante, et plus de 19 heures à -4°F/-20°C. Et lorsque vous avez besoin de changer de batterie, le mode Warm Swap vous permet de le faire sans avoir à éteindre l’appareil ou à fermer les applications.

Les bons accessoires pour faciliter la gestion des équipements
Les terminaux s’accompagnent d’une suite complète d’accessoires qui comprend des chargeurs de batteries et d’appareils à baies multiples pour faciliter la gestion des entrepôts à moindre coût.'
WHERE id = 1;


UPDATE produit
SET description = 'Le Terminal Mobile MC3300X se décline en terminaux portables Android à clavier, légers et polyvalents, conçus pour l’entrepôt, le magasin ou l’usine.

Cet terminal PDA se distingue de la concurrence en offrant quatre formats différents, trois claviers, et des options de capture de données de tout premier plan, qui peuvent être adaptées aux besoins applicatifs des clients.

Avec terminal portable MC3300x la productivité et l’efficacité de vos équipes atteignent des niveaux sans précédent. Le terminal mobile durci MC3300x prend en charge le Wi-Fi 6 et bien plus encore. Microsoft Teams est désormais compatibles avec l’application Walkie Talkie.'
WHERE id = 2;

UPDATE produit
SET description = 'Technocode vous présente Terminal Mobile MC9300 Zebra, Zebra MC9300 est un pda robuste avec des outils des collecte de données avaceés pour la collecte des données et scan des code à barre.

En outre, le MC9300 de Zebra est un terminal mobile ultra-durci qui reprend, dans une toute nouvelle version, les qualités du terminal mobile Android professionnel le plus vendu et le plus apprécié au monde.

Le terminal MC9300 offre à vous offre toute la simplicité d’Android, système d’exploitation qu’ils connaissent déjà, un grand écran tactile avancé et bien d’autres avantages. Il gère facilement toutes vos applications, grâce à une puissance de traitement et une mémoire supérieures et à de nouvelles capacités de capture des données (caméras avant et arrière, portées de lecture extraordinaires et lecture de qualité des marquages directs de pièces).

Le PDA terminal MC9300 est prêt à dépasser quasiment tous les appareils de sa catégorie dans tous les environnements, y compris en chambre froide. Sa gestion est facilitée par les outils de la suite Mobility DNA, à l’instar de la sécurité du système d’exploitation et de la batterie, et ses connexions sans fil sont plus fiables que jamais. Et comme il exécute vos applications d’émulation de terminal dès la prise en main, la migration vers Android ne saurait être plus simple. Augmentez la productivité et l’efficacité opérationnelle de vos équipes, grâce au collecteur de données MC9300 ultra-durci, une exclusivité Zebra.'
WHERE id = 3;

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (4, 'Terminal_Mobile_TC26_Zebra', 'Le Terminal Mobile TC26 Zebra un PDA tactile fiable et économique dédié aux professionnels en mobilité. Ce terminal mobile dispose de la dernière version d\'Android pour un fonctionnement fluide de vos applications .En outre, le PDA mobile TC26 de Zebra affiche des caractéristiques universelles aux appareils de téléphonie grand public : Android 10, écran tactile lumineux de 5 pouces, appareil photo 13 MP, autonomie de 10h et pratiquement toutes les connexions sans fil ,doté de connexions WiFi, Bluetooth, GPS, le PDA Zebra TC26 couvre tous les modes de transmission de données.

La technologie de capture code barre (imprimé et électronique) instantanée. Quelque soit la nature du code à barre, vous pourrez décrypter toutes les symbologies. Résistant et endurant, il assure un fonctionnement optimal dans toutes les conditions même après une chute ou un choc accidentel.

Grand écran de 5 pouces haute définition
Conception professionnelle
Toutes les connexions sans fil nécessaires
Aspect familier d’Android
Créez une solution mains libres transportable en entrepôt
Gamme étendue d’accessoires professionnels
Batterie amovible, pour une ou plusieurs périodes de travail
Puissance de traitement de toutes vos applications','Connexions réseau: réseau étendu sans fil, réseau local sans fil, réseau personnel sans fil, USB 2.0 haut débit (hôte et client)
Notifications: Tonalité audible, témoins à DEL multicolores, vibration
Clavier: Clavier virtuel
Audio: Haut-parleur - 1 watt Fonction vocale (haut-parleur/récepteur et micro- phones internes)
Touches: Lecture sur les deux côtés, volume +/-, alimentation, talkie-walkie
Mémoire: 4 Go RAM/64 Go Flash ; 3 Go RAM/32 Go Flash
Scanner code a barre: Imageur 1D/2D
Caméra : Caméra arrière de 13 MP ; caméra avant de 5 MP en option
Communications vocales: Push-to-Talk (PTT) Express en option - Application logicielle de la suite Mobility DNA pour la communica- tion instantanée par talkie-walkie en intérieur. Workforce Connect Push-to-Talk (PTT) Pro2 en option : application logicielle de la suite Mobility DNA facile à déployer, rentable et sur abonnement, pour la communication par talkie-walkie en intérieur et en extérieur. Workforce Connect Voice 3 en option : application permettant de transformer les terminaux TC21/ TC26 en combinés d’autocommutateur complets, avec interface personnalisée facilitant les fonctions téléphoniques les plus complexes et éliminant le besoin d’acquérir et de gérer des appareils vocaux supplémentaires.
Gamme: Terminal mobile
Modèle: zebra TC26
Système d\'exploitation: Android 11 ; avec prévision de la mise à jour vers Android 14
CPU: MICROPROCESSEUR Qualcomm Snapdragon™ 660 huit cœurs, 1,8 GHz
ÉTANCHÉITÉ: IP67
RÉSISTANCE AUX CHUTES: Chutes d’une hauteur de 4 pi/1,20 m sur une surface en béton sur la plage de températures de fonctionnement, conformément à la norme MIL-STD-810G
RÉSISTANCE AUX CHOCS: 300 chocs à 1,6 pi/0,50 m
Ecran: 5 in. couleur HD (1280 x 720) ; rétroéclairage à DEL ; verre Corning® Gorilla® Glass
Écran tactile: Écran tactile capacitif multipoint
Alimentation: Batterie Li-Ion amovible, réparable et rechargeable Batterie standard : ≥ 3 300 mAh/12,54 Wh Batterie étendue : 5 260 mAh/20,25 Wh
SIM: 1 logement de nano SIM ; eSIM en option', 'Terminal_Mobile_TC26_Zebra.png', 2);


INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (5, 'Terminal Mobile TC52 Zebra', 'Technocode Tunisie propose le terminal mobile Zebra TC52. Plus qu’un PDA terminal durci, le Zebra TC52 est un PDA professionnel dernière génération complet, conçue pour l\'entreprise. Doté d’un écran tactile 5 pouces, d’une technologie de lecture code barre de pointe et d’une autonomie de batterie de 14 heures, le terminal mobile Zebra TC52 dispose de toutes les fonctions professionnelles nécessaires aux opérateurs pour maximiser leur productivité.

Simple, familier et flexible, il s’utilise, même humide, avec ou sans gants et avec un stylet. Et grâce à son excellente lisibilité à l’extérieur, il reste facile à lire, même en plein soleil.



Capture simple des codes-barres, étiquettes et documents
Autonomie fiable sur toute la période de travail
Aspect familier de l’interface Android
Bluetooth 5.0 offre une vitesse doublée, une portée quadruplée et une consommation moindre
Accessoires professionnels pour une productivité maximale
Amélioration de la portée et de la vitesse des connexions Wi-Fi, sans consommation supplémentaire
WorryFree WiFi : le sans-fil rapide et ultra-fiable
Terminaux durcis, conçus pour les environnements les plus difficiles','Affichage: 5,0 po Haute définition (1 280 x 720), exceptionnel- lement lumineux, lisible en extérieur ; traitement optique de l’écran tactile
Alimentation: Batterie Li-Ion rechargeable PowerPrecision+, 4 300 mAh/15,48 Wh en standard, tension de charge de 4,2 V par cellule, tension nominale de 3,6 V par cellule, parfaite visibilité sur les indicateurs d’état pour une gestion optimisée, charge rapide par USB (500 mA)
Mémoire: 4 Go RAM/32 Go Flash
Sécurité: WEP (40 ou 104 bits) ; WPA/WPA2 Personel (TKIP et AES) ; WPA/WPA2 Entreprise (TKIP et AES) – EAP-TT- LS (PAP, MSCHAP, MSCHAPv2) ; EAP-TLS ; PEAPv0- MSCHAPv2 ; PEAPv1-EAP-GTC ; LEAP.EAP-PWD
Scanner Code à barre: Imageur SE4710 (1D et 2D) à portée exceptionnelle : Portée de lecture – Code-barres Code 39 : 20 mil : de 1,8 po à 32 po/4,5 cm à 81,3 cm 3 mil : de 3,1 po à 5,6 po/7,9 cm à 14,2 cm Prise en charge Digimar
Touches: Six touches programmables, pour une flexibilité maxi- male : Touche arrière, deux touches réservées à la lecture, touche PTT dédiée et touches de volume
Caméra: Avant : 5 MP ; ouverture f/2.0 Arrière : 13 MP avec autofocus ; ouverture f/2.2 ; le témoin flash à DEL génère une lumière blanche équilibrée ; mode lampe torche pris en charge
NFC: artes ISO 14443 types A et B ; FeliCa et ISO 15693 ; mode P2P et émulation de carte par hôte. TC57 uniquement : émulation de carte par hôte et UICC
Résistance aux chutes: Chutes répétées d’une hauteur de 1,20 m (4 pi) sur le béton recouvert de carreaux de céramique, de -10 °C à 50°C (14 °F à 122 °F) Chutes répétées d’une hauteur de 1,80 m sur le béton, avec l’accessoire durci conforme à la norme MIL STD 810 G
Indice d’étanchéité: IP67 et IP65, conformément aux normes IEC relatives à l’étanchéité
Gamme: Terminal Mobile tactile durci
Modèle: Zebra TC52
Système opérateur: Android 9 Pie, mise à jour possible par le biais d’Android R 1
CPU: Qualcomm Snapdragon™ 660 huit cœurs, 2,2 GHz
Connexions réseau: C52/TC57 : Réseau local sans fil, réseau personnel sans fil (Bluetooth), USB 2.0, Haut débit (hôte et client) TC57 uniquement : Réseau étendu sans fil', 'Terminal_Mobile_TC52_Zebra.png', 2);




INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (6, 'Terminal Mobile TC57 Zebra', 'Le PDA tactile TC57 de Zebra est le summum de l\'informatique tactile de classe entreprise. Le TC57 s\'appuie sur le très réussi TC56, ajoutant une nouvelle plate-forme et de nouvelles capacités pour offrir le nec plus ultra de l\'informatique tactile de classe entreprise. Le PDA terminal TC57 est alimenté par Android, ce qui élimine pratiquement le temps de formation et les courbes d\'adoption. La technologie de dépistage avancée TC57 et l\'imagerie intelligente PRZM permettent une capture ultra-rapide des codes-barres 1D et 2D imprimés et électroniques , quelle que soit leur condition. Le terminal mobile TC57 permet aux utilisateurs de créer facilement des touches programmables dédiées uniques de chaque côté de l\'écran pour accéder aux fonctionnalités et applications de l\'appareil les plus fréquemment utilisées avec une simplicité tactile, à partir du scanner, de l\'appareil photo et des applications métier et de la messagerie texte. Pour WLAN uniquement, voir TC52 .

Capture simple des codes-barres, étiquettes et documents
Autonomie fiable sur toute la période de travail
Aspect familier de l’interface Android
Bluetooth 5.0 offre une vitesse doublée, une portée quadruplée et une consommation moindre
Accessoires professionnels pour une productivité maximale
Amélioration de la portée et de la vitesse des connexions Wi-Fi, sans consommation supplémentaire
WorryFree WiFi : le sans-fil rapide et ultra-fiable
Terminaux durcis, conçus pour les environnements les plus difficiles','Gamme: Terminal Mobile tactile durci
Modèle: Zebra TC57
Système opérateur: TC52 : Android 9 Pie, mise à jour possible par le biais d’Android R 1 TC57 : Android 8 Oreo, mise à jour possible par le biais d’Android R 1 À la fois avec le mode restreint de Zebra pour le contrôle de l’accès à GMS et à d’autres appareils.
CPU: Qualcomm Snapdragon™ 660 huit cœurs, 2,2 GHz
Connexions réseau: TC52/TC57 : Réseau local sans fil, réseau personnel sans fil (Bluetooth), USB 2.0, Haut débit (hôte et client) TC57 uniquement : Réseau étendu sans fil
Affichage: 5,0 po Haute définition (1 280 x 720), exceptionnel- lement lumineux, lisible en extérieur ; traitement optique de l’écran tactile
Alimentation: Batterie Li-Ion rechargeable PowerPrecision+, 4 300 mAh/15,48 Wh en standard, tension de charge de 4,2 V par cellule, tension nominale de 3,6 V par cellule, parfaite visibilité sur les indicateurs d’état pour une gestion optimisée, charge rapide par USB (500 mA)
Mémoire: 4 Go RAM/32 Go Flash
Sécurité: WEP (40 ou 104 bits) ; WPA/WPA2 Personel (TKIP et AES) ; WPA/WPA2 Entreprise (TKIP et AES) – EAP-TT- LS (PAP, MSCHAP, MSCHAPv2) ; EAP-TLS ; PEAPv0- MSCHAPv2 ; PEAPv1-EAP-GTC ; LEAP.EAP-PWD
Scanner Code à barre: Imageur SE4710 (1D et 2D) à portée exceptionnelle : Portée de lecture – Code-barres Code 39 : 20 mil : de 1,8 po à 32 po/4,5 cm à 81,3 cm 3 mil : de 3,1 po à 5,6 po/7,9 cm à 14,2 cm Prise en charge Digimar
Touches: Six touches programmables, pour une flexibilité maxi- male : Touche arrière, deux touches réservées à la lecture, touche PTT dédiée et touches de volume
Caméra: Avant : 5 MP ; ouverture f/2.0 Arrière : 13 MP avec autofocus ; ouverture f/2.2 ; le témoin flash à DEL génère une lumière blanche équilibrée ; mode lampe torche pris en charge
NFC: Cartes ISO 14443 types A et B ; FeliCa et ISO 15693 ; mode P2P et émulation de carte par hôte. TC57 uniquement : émulation de carte par hôte et UICC
Résistance aux chutes: Chutes répétées d’une hauteur de 1,20 m (4 pi) sur le béton recouvert de carreaux de céramique, de -10 °C à 50°C (14 °F à 122 °F) Chutes répétées d’une hauteur de 1,80 m sur le béton, avec l’accessoire durci conforme à la norme MIL STD 810 G
Indice d’étanchéité: IP67 et IP65, conformément aux normes IEC relatives à l’étanchéité', 'Terminal_Mobile_TC57_Zebra.png', 2);



**********************************************************************************************************************
INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (7, 'Terminal portable Android WS50 Zebra', 'le plus petit terminal mobile portable Android tout-en-un de classe entreprise au monde. Il est robuste, modulaire et accessible à tous, de la fabrication et de l\'entreposage à la vente au détail et à l\'hôtellerie. Le terminal portable WS50 est un cœur informatique polyvalent avec une conception modulaire qui permet au travailleur de choisir le support qui convient à son travail : poignet, dos de la main ou à deux doigts. Il est petit mais robuste, doté de puissantes fonctionnalités de capture de voix et de données de classe affaires qui stimulent la productivité et la précision dans chaque tâche.



Connectez votre personnel avec des applications push-to-talk (PTT) et de gestion des tâches
Tous les modèles sont compatibles PTT, ce qui permet aux responsables et aux employés de collaborer instantanément pour une résolution plus rapide des problèmes et une productivité accrue du personnel. Découvrez PTT .



Vrai portable « sans hôte » en une seule pièce
Avec le WS50 tout-en-un, les travailleurs n\'ont besoin de porter qu\'un seul appareil pour capturer et accéder aux données au lieu d\'un ordinateur mobile hôte et d\'un scanner annulaire, offrant une véritable solution portable convergée. Et la prise en charge push-to-talk (PTT) élimine le besoin d\'appareils vocaux séparés.



Caméra haute résolution pour la lecture légère de codes-barres et la capture de photos
Un appareil photo de 13 MP dans le modèle monté au poignet prend en charge la lecture occasionnelle de codes-barres et peut capturer des photos détaillées pour documenter la preuve de l\'état et plus encore.



Scanner avancé de classe entreprise pour une lecture intense des codes-barres
Les modèles WS50 convergés à deux doigts et à montage sur le dos de la main incluent un imageur puissant, offrant des performances de capture de données supérieures. Scannez pratiquement n\'importe quel code-barres dans n\'importe quelle condition, aussi vite que vous pouvez appuyer sur la gâchette.


nctions audio intégrées
Donnez aux utilisateurs la puissance des communications vocales instantanées avec le haut-parleur et le microphone intégrés. Vous pouvez également connecter un casque Bluetooth sans fil.



Écran tactile avancé
L\'écran couleur AMOLED de deux pouces offre des performances exceptionnelles. Il est extraordinairement lumineux - aucun rétroéclairage n\'est nécessaire. Un meilleur contraste et de meilleurs angles de vision offrent une lisibilité supérieure.

La puissance d\'Android
Ce système d\'exploitation mobile de qualité industrielle fournit une plate-forme évolutive conçue pour accueillir facilement de nouvelles fonctionnalités.



Toutes les connexions sans fil dont vous avez besoin
Wi-Fi, Bluetooth et NFC sont tous standard dans le WS50, permettant des connexions Wi-Fi robustes "n\'échoueront pas" et des connexions faciles en un clic aux périphériques Bluetooth.



Puissance perpétuelle à plein temps
Grâce aux batteries amovibles et remplaçables à chaud, les appareils peuvent rester en service chaque minute de chaque quart de travail. Une batterie de 800 mAh alimente le modèle de montage au poignet, tandis qu\'une batterie de 1300 mAh alimente les modèles de style anneau et de dos de main.','Gamme: Terminal portable Android
Modèle: WS50 Zebra
Système d’exploitation: Android 11 AOSP
Microprocesseur: Snapdragon Wear™ 4100 Platform/SDW429w, quad-core, 2.0 GHZ
Affichage: Écran couleur AMOLED 460 x 460 de 2 pouces; optiquement lié à l\'écran tactile
Écran tactile: Écran tactile capacitif ; bout du doigt et gant Support; Verre Corning® Gorilla®
Alimentation: Standard (poignet) : 3,08 wattheures ; 800 mAh Haute capacité (convergée) : 5 wattheures ; 1300 mAh PowerPrecision ; Hot Swap (2 minutes, mémoire persistant)
Voix et audio: Haut-parleur (90dBA); micro interne ; PTT prêt ; Prise en charge du casque Bluetooth
Boutons: Poignet : 4 boutons (programmables) Convergé : déclencheur ; 2 boutons (programmables)
Mémoire: 1 GB RAM/8 GB Flash
Sécurité: WEP (40 or 104 bit); WPA/WPA2 Personal (TKIP and AES); WPA3 Personal (SAE); WPA/WPA2 Enterprise (TKIP and AES);—EAP-TTLS (PAP, MSCHAP, MSCHAPv2), EAP-TLS, PEAPv0-MSCHAPv2, PEAPv1-EAP-GTC, EAP-PWD
Scanner Code à barre: Convergé uniquement : imageur omnidirectionnel à portée standard 1D/2D
Caméra: 13 MP with Flash (poigner uniquement)
Résistance aux chutes: Poignet : chute de 4 pi/1,2 m sur béton selon MIL-STD 810G à travers la température de fonctionnement Convergé : chute de 6 pi/1,8 m pour carreler sur du béton selon MIL-STD 810G à travers la température de fonctionnement
Indice d’étanchéité: IP65', 'Terminal_portable_Android_WS50_Zebra.png', 3);



INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (8, 'Scanner portable Bluetooth RS5100', 'Les scanners portables peuvent fournir la numérisation mains libres dont votre personnel a besoin pour maximiser la productivité. Mais les travailleurs d\'aujourd\'hui ont attentes élevées pour les appareils portables - un design moderne, un encombrement minimal, si intuitif qu\'aucune formation n\'est requise, plus simplicité de lecture pointer-déclencher sur chaque code-barres. Votre entreprise a besoin d\'une conception aussi à l\'aise dans les zones en contact avec les clients comme entrepôt, options portables pour une flexibilité maximale des cas d\'utilisation, une conception robuste pour assurer un long cycle de vie',' ', 'Scanner_portable_Bluetooth_RS5100.png', 3);


INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (9, 'Scanner portable Bluetooth Zebra RS6100', 'Les scanners portables peuvent fournir la numérisation mains libres dont votre personnel a besoin pour maximiser la productivité. Mais les travailleurs d\'aujourd\'hui ont attentes élevées pour les appareils portables - un design moderne, un encombrement minimal, si intuitif qu\'aucune formation n\'est requise, plus simplicité de lecture pointer-déclencher sur chaque code-barres. Votre entreprise a besoin d\'une conception aussi à l\'aise dans les zones en contact avec les clients comme entrepôt, options portables pour une flexibilité maximale des cas d\'utilisation, une conception robuste pour assurer un long cycle de vie',' ', 'Scanner_portable_Bluetooth_Zebra_RS6100.png', 3);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (10, 'Enterprise Home Screen', 'Enterprise Home Screen pour Android offre un moyen simple pour les administrateurs de contrôler l\'accès aux applications et aux paramètres d\'un terminal mobile Zebra sans avoir besoin d\'écrire du code personnalisé.

À l\'aide d\'une interface tactile simple, EHS limite facilement l\'utilisation à une ou plusieurs applications spécifiées, empêche les modifications apportées aux paramètres de l\'appareil et verrouille le système de fichiers. Il peut être configuré en quelques secondes, et les paramètres peuvent être déployés via MDM. Les paramètres EHS sont stockés dans un fichier XML simple et facile à lire et à modifier à la main, si nécessaire.

Grâce à Enterprise Home Screen, vous pouvez limiter l\'utilisation des équipements de l\'entreprise à des fins professionnelles uniquement. En quelques étapes simples, vous pouvez créer des équipements à usage unique qui n\'exécuteront qu\'une application ou déterminer les applications et fonctionnalités à la disposition des utilisateurs ou groupes d\'utilisateurs, puis désigner les utilisateurs des terminaux Android Zebra, tout cela sans l\'aide d\'un développeur.',' ', 'Enterprise_Home_Screen.png', 4);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (11, 'DATAWEDGE', 'Intégrez facilement les données capturées avec les terminaux Android Zebra dans vos applications, sans programmation fastidieuse et coûteuse.

Vous pouvez désormais intégrer rapidement, facilement, et sans code, les données capturées avec vos terminaux mobiles Android Zebra dans vos applications d’entreprise à l’aide de DataWedge pour Android, disponible prêt à l’emploi sur tous les Terminaux mobiles Android Zebra. Les informations provenant de toutes les données capturées par les équipements mobiles Android de Zebra et les périphériques connectés sont correctement formatées et transmises aux applications appropriées, sans aucune programmation ni modification des applications existantes.

Résultat ? Vous pouvez lancer des applications extrêmement rentables qui automatisent la capture de données, éliminent les erreurs, augmentent la productivité des opérateurs et optimisent la valeur de vos terminaux mobiles Android Zebra plus rapidement que jamais. Exploitez dès maintenant la puissance de capture des données de vos équipements Android de Zebra grâce à DataWedge pour Android.',' ', 'DATAWEDGE.png', 4);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (12, 'Zebra WorkForce Connect', 'Un outil de communication et de collaboration intelligente qui permet aux travailleurs d\'en faire plus.

Éliminez les écarts de communication entre vos employés, la communication et les informations circulent librement entre les équipes, le tout sur une seule plateforme sur un seul appareil.

Une plateforme unifiée complète qui permet communication voix et données, gestion à distance et localisation, dans un seul outil puissant qui permet à tous vos employés de rester connectés et de gérer toutes leurs tâches avec efficacité et confiance via un seul appareil.

Une solution qui Consolide les flux de travail critiques dans une seule plateforme, totalement connectée, avec Zebra Workforce Connect, la solution la plus complète pour vos équipes terrain. Libérez les potentiels de communication en ajoutant des fonctionnalités voix et messagerie puissantes à vos terminaux mobiles Zebra ou équipements tiers pour mieux connecter vos équipes terrain.



Surmonter tous les tracas, avec Workforce Connect


Gestion professionnelle

 Analyses et reporting ; Rapports sur l’utilisation des équipements, avec informations exploitables sur l’activité et la performance du personnel
Communication chiffrée sécurisée ; Sécurité des communications professionnelles (voix et SMS)
Authentification unique (SSO) ; Configuration automatique personnalisée à chaque connexion
Modèle d’utilisation partagée ; Règles personnalisées ou fonctionnelles pour faciliter l’utilisation partagée d’un même appareil
Communications intelligente

Mode texte et talkie-walkie ; Messages vocaux et SMS individuels ou en groupe
Voix et PBX ; Réception et émission d’appels PBX à partir d’un terminal mobile
Sécurité du personnel ; Détection de chute, envoi d’alertes et appels d’urgence
Assistant virtuel à commande vocale ; Exécution de tâches simples par commande vocale
Collaboration intelligente

Alertes IoT ; Notifications d’alarme de porte, de demande de service et autres par connexion IoT de l’appareil
Création de groupes dynamiques ; Gestion des groupes d’utilisateurs (ajout, suppression)
Gestion et affectation de tâches ; Affichage, exécution et affectation de tâches individuelles ou en groupe
Localisation de personnes et d’actifs ; Localisation de personnes et d’équipements par traçage GPS




qu\'est-ce que vous allez bénéficier
Élevez vos travailleurs de première ligne

Faites progresser votre ligne de front avec des informations fluides et davantage d\'opportunités de réflexion critique et de résolution de problèmes. Workforce Connect couvre l\'ensemble des besoins de première ligne, de la communication à la collaboration, de l\'information à la sécurité, le tout sur une seule plateforme connectée.



Unifiez et transformez vos opérations

Bénéficiez d\'une visibilité à l\'échelle de l\'entreprise grâce à une solution unifiée conçue à la fois pour éliminer les inefficacités et rationaliser les communications. Plus de retards, de déconnexions et de workflows décousus. Les réponses sont maintenant à portée de main des travailleurs de première ligne.



Une approche flexible soutenue par Zebra

Ayez l\'esprit tranquille en sachant que vous disposez de la gamme la plus complète de capacités logicielles et de matériel robuste conçu pour n\'importe quelle industrie. Choisissez le forfait qui convient à votre entreprise. Peu importe la taille, Workforce Connect a une option pour vous.



Zebra Workforce connect se compose de 3 produits distincts
Voip : communication vocale en duplex intégral via Wi-Fi, transformant votre PDA zebra en un téléphone mobile complet .

PTT express : communication push totalk semi-duplex simple via wifi.

PTT Pro : version de licence professionnelle de PTT express, communiquer via une connexion Lan ou Wlan. Ccommuniquer par text et par voix avec plusieurs connexions à la fois, créer un groupe de discussion pour un accès rapide.



Workforce Connect vous apporte la sérénité en vous donnant l’assurance de travailler avec l’écosystème logiciel et matériel le plus complet..',' ', 'Zebra_WorkForce_Connect.png', 4);


INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (13, 'Imprimante thermique industrielle ZT231', 'L\'imprimante thermique industrielle ZT231 offre des vitesses d\'impression impressionnantes, une qualité d\'impression haute résolution, un grand écran tactile couleur, une conception durable et bien plus encore, le tout dans un encombrement réduit. De plus, l\'imprimante thermique industrielle ZT231 offre des fonctionnalités optionnelles telles que la RFID, la connectivité sans fil et les fonctionnalités de gestion des supports. Les clients bénéficient d\'une intelligence intégrée pour faciliter leur travail et d\'une sécurité inégalée pour que rien ne s\'y oppose.

Parfaitement adapté à l\'industrie modérée
Avec un cadre en métal durable, l\'imprimante code a barre ZT231 est idéal pour les environnements industriels légers. Imprimez du texte net et des codes-barres avec une résolution de 300 dpi en option. De plus, des options de communication complètes se connectent et communiquent avec le ZT231.

Gestion simple et sécurisée de l\'imprimante
Avec le logiciel Print DNA, cet imprimante d\'étiquettes autocollantes est facile à gérer, surveiller et dépanner les moteurs d\'impression en réseau sur site ou à distance et il dispose de l\'application PrintSecure qui protège l\'imprimante ZT231 contre les attaques dangereuses de l\'imprimante IoT.

Conception compacte et peu encombrante
La ZT231 est la plus petite imprimante industrielle de Zebra avec une conception compacte et peu encombrante et une porte pliante qui réduit la hauteur nécessaire pour ouvrir l\'imprimante et maximise l\'espace de travail.

Opération d\'impression complexe facilitée grâce aux fonctions intelligentes
Réduisez le temps d\'entraînement avec l\'écran tactile couleur de 4,3 pouces facile à utiliser du ZT231. Visualisez l\'état en un coup d\'œil, accédez à des assistants et à des vidéos explicatives utiles et apportez des modifications d\'une simple pression du doigt ou d\'une main gantée. Les capteurs réglables offrent une plus grande flexibilité de support et la grande capacité du rouleau de ruban vous permettent de changer de support moins fréquemment.',' Gamme : Imprimante thermique industrielle
Modèle: Zebra ZT231
Largeur d\'impression: 104mm
Vitesse d’impression maximale: 305 mm/12 po par seconde (203 dpi) 203 mm/8 po par seconde (300 dpi)
Résolution d’impression: 203 dpi/8 points par mm 300 dpi/12 points par mm (en option)
Méthode de communication: USB 2.0 , Port série RS-232 , Ethernet 10/100 , USB hôte , 802.11ac Wi-Fi (en option) ,Ethernet 10/100 (en option) , Interface de l’applicateur (en option)
Construction: Châssis entièrement métallique robuste et boîtier en métal', 'Imprimante_thermique_industrielle_ZT231.png', 5);


INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (14, 'Imprimante thermique Industrielle Zebra ZT411', 'Technocode Tunisie propose la gamme d’Imprimante étiquettes industrielle ZT411 de Zebra .Tout d’abord, Remplaçantes de la ZM400, la nouvelle imprimante codes à barres industrielle Zebra ZT411 est plus robuste, plus rapide et efficace. La ZT411 est conçue pour être déployée dans des environnements très exigeants : fabrication, industrie, transport et logistique qui requièrent des volumes d’impression très importants.



Deux ports hôtes USB pour plus de flexibilité
Les deux ports hôtes USB vous permettent de connecter directement une large gamme de Types de périphériques USB. Utilisez une clé USB pour répliquer le firmware, les fichiers et configurations, ou facilement imprimer et transférer des formats.



Conçu pour évoluer avec vos besoins
Vous pouvez personnaliser votre imprimante ZT411 avec une gamme d\'options de gestion des supports qui peut être installé en quelques minutes. Deux fentes multimédia ouvertes accueillent options de communication supplémentaires.



Le grand écran tactile couleur facilite l\'utilisation
Il est facile de configurer et d\'utiliser le ZT411 grâce à son interface intuitive basée sur des icônes. L\'écran tactile couleur de 4,3 pouces vous permet de naviguer rapidement dans les paramètres de l\'imprimante avec le système de menu d\'icônes convivial pour changer de langue, les paramètres de l\'imprimante, les options de connectivité et plus encore.



Configurez votre chemin avec plusieurs options de connectivité
Le ZT411 est livré en standard avec Ethernet, série, USB, double hôte USB et Bluetooth 4.1. Ajoutez la carte sans fil double bande en option avec Wi-Fi 802.11ac et Bluetooth pour des connexions sans fil extrêmement rapides et fiables.



Conçu pour gérer une large gamme de supports et d\'applications
Vous pouvez compter sur la ZT411 pour imprimer une variété de formats d\'étiquettes différents sur différents types de supports. L\'imprimante est proposée en 4 pouces. et 6 pouces, avec 203 dpi, 300 dpi et 600 dpi* (600 dpi disponible sur 4 pouces ZT411 uniquement). Ajoutez la technologie RFID installable en usine ou sur site .



Chargement facile du support et du ruban
Le chemin des etiquettes et ruban à chargement latéral rend le chargement plus simple, plus rapide et plus intuitif. Le chemin du support à code couleur vous guide sur la façon d\'enfiler le support et ruban à travers l\'imprimante, tandis que des chemins éclairés le rendent facile à voir, même dans des environnements mal éclairés.',' Gamme: Imprimante transfert thermique industrielle
Modèle: Zebra ZT411
Largeur d\'impression maximale: 104mm
Volume d’impression: Supérieur à 3000 étiquettes/jour', 'Imprimante_thermique_Industrielle_Zebra_ZT411.png', 5);


INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (15, 'Imprimante thermique Industrielle Zebra ZT421', 'Technocode Tunisie propose l\'imprimante thermique Industrielle Zebra ZT421. Rapide et fiable, l’imprimante transfert thermique industrielle ZT421 de Zebra dispose d’un écran tactile couleur de 4,3 pouces permettant de visualiser l’état de l’imprimante et de modifier rapidement les paramètres. Cette imprimante thermique présente une largeur d\'impression supérieure avec une largeur d\'impression maximale de 168 mm.

Robuste et fiable pour durer des années, même dans vos environnements les plus exigeants
Facile à utiliser et à entretenir au quotidien
Facile à gérer, avec des options de gestion à distance robustes et simples
Polyvalent pour répondre à de multiples besoins d’application
Conçu pour évoluer avec votre entreprise pour une excellente protection des investissements
Construction :l’Imprimante étiquettes industrielle ZT421 au Châssis métallique et couvercle métallique à deux volets pour compartiment à consommables avec grande fenêtre transparente.',' Gamme: Imprimante transfert thermique industrielle
Modèle: Zebra ZT421
Largeur d\'impression maximale: 168 mm
Interface utilisateur : Écran LCD couleur, icônes d\'état', 'Imprimante_thermique_Industrielle_Zebra_ZT421.png', 5);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (16, 'Imprimante thermique directe Bureautique Zebra ZD411D', 'Revoyez vos attentes à la hausse grâce à une imprimante de bureau compacte, fonctionnelle, souple et sécurisée conçue pour durer. Déclinée en modèles Thermique direct, Transfert thermique et Santé, elle prend en charge une vaste gamme d’applications d’étiquettes et vignettes pour cas d’utilisation 58mm .

Dotée de Print DNA, la suite logicielle exclusive de Zebra, l\'imprimante thermiaue directe ZD411D est facile à configurer, à utiliser et à entretenir, sur site ou à distance. Contrairement à d’autres, les imprimantes Zebra garantissent la sécurité avec l’outil PrintSecure de Print DNA, qui protège contre les temps d’arrêt et cyberattaques. 

Avec les icônes de l’interface utilisateur intuitive, vous connaissez rapidement l’état de l’imprimante. Grâce à sa nouvelle architecture et ses nouvelles options installables sur site, notamment de traitement de consommables et de communication sans fil, cette imprimante puissante est conçue pour évoluer avec vous longtemps. Sélectionnez l’accessoire de batterie portable pour imprimer n’importe où.','Gamme: Imprimante thermique directe de bureau
Modéle: Zebra ZD411D
Largeur d\'impression: 58mm
communication: Standard : USB 2.0, hôte USB, BTLE5 En option : série installable sur site, Ethernet ; sans fil 802.11ac + BT installable en usine ou sur site', 'Imprimante_thermique_directe_Bureautique_Zebra_ZD411D.png', 6);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (17, 'Imprimante transfert thermique Bureautique Zebra ZD230T', 'L\'Imprimante transfert thermique Bureautique Zebra ZD230T produit des étiquettes rapidement, à 4 pouces par seconde, pour maintenir vos flux de travail en mouvement. L\'augmentation de la mémoire vous permet de stocker plus de polices et de graphiques. L\'imprimante zebra ZD230T comprend Print DNA Basic, un ensemble de base d\'applications logicielles et de capacités pour offrir une expérience d\'impression rentable et fiable.

Les fonctions d\'impression dont vous avez vraiment besoin
Cette imprimante 104mm produit des étiquettes rapidement, à raison de 6 pouces par seconde, pour un workflow fluide et efficace. Sa mémoire accrue permet de stocker davantage de polices de caractères et de graphismes. Un témoin à DEL et un bouton d’alimentation et de pause facilitent l’emploi et l’identification de l’état de l’imprimante. Idéale pour les applications de divers domaines (transports, logistique, industrie légère, commerce, distribution et secteur de la santé) l’imprimante gère un large éventail de billets, vignettes, passes, étiquettes et reçus.

Commencez à imprimer rapidement
Facile à installer, l\'imprimante zebra ZD230T est prête à imprimer dès sa mise en service. Grâce à elle, vous pouvez remplacer facilement vos imprimantes existantes, qui utilisent les langages de commande ZPL, EPL ou non-Zebra. Les options de connexion USB, Ethernet, Wi-Fi et Bluetooth® assurent une interconnectivité universelle. La ZD230 peut recevoir un rouleau de ruban de 300 mètres, pour espacer les changements de consommables. Et le capot bivalve OpenACCESS™ de Zebra rend ces changements encore plus pratiques et rapides. L’imprimante est par ailleurs certifiée ENERGY STAR®, un atout qui réduit vos frais d’exploitation.','Gamme: Imprimante thermique directe de bureau
Modéle: Zebra ZD411D
Largeur d\'impression: 58mm
communication: Standard : USB 2.0, hôte USB, BTLE5 En option : série installable sur site, Ethernet ; sans fil 802.11ac + BT installable en usine ou sur site', 'Imprimante_transfert_thermique_Bureautique_Zebra_ZD230T.png', 6);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (18, 'Imprimante Thermique directe de bureau Zebra ZD421D', 'Augmentez votre productivité au sommet, grâce à une imprimante thermique de bureau avancée qui offre les fonctionnalités, la souplesse, la fiabilité et la sécurité dont vous rêvez, aujourd’hui comme demain. Dotée de logiciel le plus avancé et matériel robuste, la suite logicielle exclusive de Zebra, l\'imprimante zebra ZD421 thermique directe est super facile à configurer, à utiliser, à gérer et à entretenir.

Contrairement aux autres marques, les imprimantes d’étiquettes Zebra ZD421D garantissent la tranquillité d’esprit et la sécurité grâce à PrintSecure, composant de la suite Print DNA, qui évite les temps d’arrêt et les cyberattaques coûteuses. en même temps, il dispose de fonctions de sécurité solides pour protéger votre réseau et vos données.

Dignes successeurs de la gamme GK très populaire de Zebra, les imprimantes code a barre Zebra ZD421 proposent les fonctionnalités et la sécurité qui leur permettent de se démarquer de la concurrence. La zd421 thermique directe s’accompagnent d’une interface utilisateur plus intuitive, des indicateurs Led pour surveiller l\'état de votre imprimante en temps réel, boutons cachés pour configurer votre réglage en quelques clics d’une nouvelle architecture plus robuste et d’un kit sans fil installable sur site. Technocode est votre fidèle fournisseur d\'imprimantes d\'étiquettes en tunisie avec les prix les plus accessibles et minutieusement étudiés. Pour plus de détails n\'hésitez pas à nous contacter.','Gamme: Imprimante bureautique
Modèle: Zebra ZD421D thermique Directe
Vitesse d\'impression : 152 mm /seconde (203 dpi). 102 mm/seconde (300 dpi).
Largeur d\'impression : 104mm', 'Imprimante_Thermique_directe_de_bureau_Zebra_ZD421D.png', 6);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (19, 'Imprimantes mobiles de la gamme ZQ300', 'Le personnel sur le terrain passe du temps à rédiger manuellement les reçus. Ce temps, il pourrait le consacrer à des visites clientèle plus nombreuses, pour un meilleur service à vos clients.

Le tout à un prix qui ne grèvera pas votre budget. Voici la gamme d\'imprimante thermique mobile Zebra ZQ300, des petites imprimantes mobiles ultra-polyvalentes. Elles sont disponibles en deux modèles pour assurer la compatibilité avec les consommables du monde entier ZQ310 (58 mm) et ZQ320 (80 mm) . Légères et compactes, elles se manipulent d’une seule main, et leur boîtier résistant aux éraflures leur permet de toujours paraître neuves. Les éléments n’ont pas de prise sur les ZQ300.

Vous pouvez compter sur une haute qualité d’impression, même en cas de chaleur extrême, de froid glacial, de pluie et de neige. Uniques et brevetées, les batteries et les technologies de gestion de l’alimentation prolongent l’autonomie sur toute la période de travail. L’application Bluetooth Remote Management, une exclusivité de Zebra, vous permet de gérer à distance tout votre parc et de bénéficier d’une durée de fonctionnement optimale. Et, les services Zebra OneCare proposés en option vous aident à optimiser la disponibilité et la productivité de vos imprimantes mobile ZQ300, grâce à une assistance fabricant hors pair.','Gamme: Imprimante Mobile
Modèle: Zebra ZQ310 / ZQ320
Technologie d\'impression: thermique directe
Largeur d\'impression maximale ZQ310: 58mm
Largeur d\'impression maximale ZQ320: 80mm
étanchéité: IP54
Capacité de la batterie: Li-Ion 2280 mAh, 7.2V, PowerPrecision+', 'Imprimantes_mobiles_de_la_gamme_ZQ300.png', 7);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (20, "Imprimantes mobiles de la gamme ZQ500 Zebra", "Technocode Tunisie propose la gamme des imprimantes mobiles Zebra ZQ500 .

Ces imprimantes Bluetooth compactes et légères résistent sans problème aux environnements extrêmes, aux chutes et aux chocs. Les imprimantes mobiles tout-terrain Zebra ZQ511™ et ZQ521™ sont les plus robustes du marché. Elles fonctionnent dans la plus grande plage de températures de l’industrie et résistent aux chutes de 2 mètres sur le béton. Et grâce à leur étanchéité d’indice IP54, elle ne craignent pas les pulvérisations d’eau. Dotées de l’environnement Link-OS® de Zebra, ces imprimantes portables de premier plan sont faciles à intégrer, gérer et entretenir. Avec leurs grands boutons et leur interface conviviale, la gamme ZQ500 s’utilisent très facilement, même avec des gants.

Durabilité et fiabilité exceptionnelles pour les environnements les plus difficiles
Alimentation par batterie haute capacité
Connexions sans fil plus rapides, plus faciles et hautement fiables
Gestion à distance complète, y compris Bluetooth® Management, pour une disponibilité maximale","Vitesse d'impression : Up to 5in./127mm per second
étanchéité: IP54
Capacité de la batterie: Batterie lithium-ion intelligente PowerPrecision Plus amovible 3 250 mAh (7,4 V) (batterie longue durée 4 900 mAh en option)
Gamme: Imprimante Mobile
Modèle: Zebra ZQ511 / ZQ521
Largeur d'impression : ZQ511 : 72mm // ZQ521 : 104mm","Imprimantes_mobiles_de_la_gamme_ZQ500_Zebra.png", 7);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (21, "Imprimantes mobiles de la gamme ZQ600 Zebra", "Technocode Tunisie  propose l’imprimante mobile Zebra Gamme ZQ630 .

Boostez votre productivité, avec l’imprimante mobile Zebra ZQ630 , son impression rapide et de haute qualité et ses fonctions de pointe.

Écran couleur, navigation simple, réveil instantané sur Wi-Fi ou Bluetooth, technologie et capacité de batterie de premier plan et maintenant la RFID, en une imprimante mobile légère et durable. Réduisez les erreurs et le temps d’impression des étiquettes et reçues , en imprimant et en codant au point d’application.

Assurez la connexion permanente de vos équipes, grâce à la toute dernière technologie sans fil, et des périodes de travail sans interruption, avec des batteries de capacité maximale et des métriques intelligentes. actes et légères sont extrêmement durables et peuvent facilement résister aux environnements difficiles, aux chutes et aux chocs. Cette imprimante thermique mobile est la mieux adaptée aux endroits où la mobilité est nécessaire.

Vous pouvez désormais minimiser les périodes d’indisponibilité et assurer le fonctionnement en continu de vos imprimantes, grâce à leur batterie hors pair, leur capacité accrue et leur fonction de réveil instantané. Le grand écran couleur affiche les icônes d’état pour une information sûre et factuelle. Vos équipes profitent de connexions sans fil fiables, avec la connectivité rapide 802.11 ac et Bluetooth 4.1.","Gamme: Imprimante Mobile
Modèles: Zebra ZQ610 / ZQ620 / ZQ630
Largeur d'impression : 48mm / 72 mm / 104 mm
Vitesse d'impression : 115 mm / second
CAPACITÉ DE LA BATTERIE: ZQ610/ / ZQ620 : 3250 mAh , ZQ630 : 6800 mAh batterie Li-Ion PowerPrecision+ amovible et rechargeable
Longueur d’impression: Minimum : 0,5 po/12,7 mm Maximum : 32 po/813 mm
Alimentation: ZQ610/ZQ610 Plus : batterie lithium-ion PowerPrecision+ de 3 250 mAh (nominal) et 23,4 Wh, amovible et rechargeable ZQ630/ZQ630 Plus : batterie lithium-ion PowerPrecision+ de 6 800 mAh (nominal) et 49.4 Wh, amovible et rechargeable
Caractéristiques des communications câblées: Radio ZebraNet® 802.11ac avec prise en charge suivante : • Cryptage TKIP et AES • WPA et WPA2 • 802.1x (avec WPA ou WPA2) • EAP-FAST, EAP-TTLS, EAP-TLS, PEAP, LEAP • 802.11d et 802.11i • Double radio Bluetooth 4.2 simultané • Certification Wi-Fi • Itinérance rapide par cache Pairwise Master Key (PMK), Opportunistic Key Caching (OKC), reprise de session rapide EAP ou 802.11r Radio Bluetooth 4.2 (Classic et BLE) • Modes de sécurité 1-4 • Imprimantes certifiées « Made for iPod/iPhone/iPad » • Édition de liens entre touches Prise en charge d’Ethernet 10/100 (par le support de recharge) Caractéristiques des communications câblées • Interface USB 2.0 pleine vitesse (12 Mbps) • Connecteur micro-AB avec serre-câble en option • Interface série : port RS-232C 14 broches pour communication à la borne ou autre hôte, jusqu’à 115,2 Kbps
Radio Bluetooth 4.2 (Classic et BLE): • Modes de sécurité 1-4 • Imprimantes certifiées « Made for iPod/iPhone/iPad » • Édition de liens entre touches","Imprimantes_mobiles_de_la_gamme_ZQ600_Zebra.png", 7);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (22, "Lecteur de code-barres Zebra LI4278", "Technocode Tunisie propose le Lecteur code à barre Zebra LI4278 .profitez d’une mobilité extrême avec une connexion sans fil Bluetooth ; libère les travailleurs des cordons, permettant aux caissiers de numériser facilement les articles à l’intérieur et à l’extérieur de l’emballage de la caisse.

Le scanner code barre 1D LI4278 offre la liberté du sans-fil avec la compatibilité Bluetooth.Concue pour utilisation tout au long la journé. La gestion supérieure de l’alimentation de la batterie offre le plus grand nombre de numérisations par charge de batterie pour prendre en charge les applications gourmandes en numérisation. Un autre avantage majeur est le retour sur investissement, avec la qualité supérieure de Zebra pour une longue durée de vie, ce scanner est toujours considéré comme l’un des plus abordables de sa catégorie.

Liberté sans fil
La technologie Bluetooth® libère vos employés des contraintes des équipements filaires, permettant ainsi au personnel de caisse de lire facilement des articles à l’intérieur et à l’extérieur des points de caisse.



Conçu pour une utilisation intensive auquotidien
Une carte de circuit unique (brevet en instance) améliore la fiabilité en supprimant les interconnexions. La gestion supérieure de l’autonomie de la batterie offre un nombre inégalé de lectures par charge, facilitant ainsi les applications de lecture intensive.



Excellentes performances de lecture 1D
Bénéficiez d’une vitesse de lecture supérieure et d’une vaste plage de capture de donnée.



Saisie de tous les codes à barres 1D, sur toutes les surfaces — y compris les écrans des téléphones mobiles
Saisissez les codes à barres imprimés sur des étiquettes de papier classiques ou affichés sur l’écran d’un téléphone mobile, d’une tablette ou d’un ordinateur.



Tolérances supérieures au mouvement et dans les angles
Saisissez les codes à barres plus rapidement et sans pause entre les lectures.



Ligne de visée lumineuse et nette
Facilite la visée dans les environnements très lumineux ou faiblement éclairés","Gamme : LI4278
Capacité de décodage: 1D
Technologie de numérisation: Linéaire
Batterie: Batterie rechargeable, remplaçable, durable et écologique
Lectures par charge : Jusqu’à 57 000
Heures de fonctionnement: Par charge complète : 72 heures
Température de fonctionnement: 0° C à 50° C (32° F à 122° F)
Spéc. de résistance aux chutes: Plus de 100 chutes de 1,5 m à température ambiante ; résiste à des chutes de 1,8 m sur du béton
Étanchéité climatique: Boîtier équipé d’un joint d’étanchéité, résistant à la poussière et nettoyable par pulvérisation","Lecteur_de_code-barres_Zebra_LI4278.png", 8);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (23, "Lecteur de code-barres ultra-durcie Zebra LI3678", "De nos jours, la productivité dépend largement de la qualité de l’équipement que nous utilisons. En d’autres termes ; des outils fiables offrent de meilleurs résultats. Par conséquent Nous prenons cela en considération et nous vous proposons la gamme des scanners sans fil 1D Zebra LI3678 Ultra-durci. Le scanner durci Zebra LI3678 est un Scanner industriel Bluetooth pour codes 1D ,Capable de transmettre les données jusqu’à 100m.

Performance supérieure de lecture des codes à barres 1D
Ces scanners linéaires avancés lisent les codes à barres 1D affichés sur écran ou imprimés sur étiquette, plus vite qu'aucun autre scanner 1D du marché actuel, même s'ils sont endommagés, salis, mal imprimés ou sous film plastique.



Conception ultra-robuste
Capables de supporter un grand nombre de chocs et de chutes et assortis du plus fort indice d'étanchéité de leur catégorie, les scanners LI3608/LI3678 sont nos scanners les plus robustes.



Connectivité sans fil pour une liberté supérieure
La connectivité Bluetooth 4.0 (faible consommation) permet une communication sans fil ultra-rapide et un rendement énergétique maximal. Le mode Wi-Fi Friendly de Zebra élimine les interférences qu'entraînent souvent les équipements Bluetooth dans votre environnement Wi-Fi.



Cadre de visée le plus net de la catégorie
les imageurs LI3678 sont dotés du cadre de visée le plus net et le plus clair de leur catégorie, idéal pour la capture précise des codes à barres dans les listes de préparation.","Gamme : SCANNER ULTRA-DURCI 1D LI3678-SR
Capacité de décodage: 1D
Technologie de numérisation: Imageur linéaire
Tolérance aux chutes: Résistance aux chutes répétées de 3,0 m (10 pi) sur dalle en béton, à température ambiante
Etanchéité: Scanner : IP65 et IP68 Support : IP65
Batterie: PowerPrecision+, 3100 mAh, Li-Ion, rechargeable (pour les modèles sans fil)","Lecteur_de_code-barres_ultra-durcie_Zebra_LI3678.png", 8);


INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (24, "Lecteur de code-barre Zebra DS2278", " Technocode Tunisie proposele lecteur de code-barre Zebra DS2278 .D’abord, Le lecteur Zebra DS2278 est extrêmement simple d’utilisation et d’intégration, aucune opération complexe n’est nécessaire.En outre, les Imageurs sans fil Zebra DS2278 se caractérisent par une Portée de lecture optimale.

De plus, cet douchettes 1D/2D est capable de numériser depuis une position relativement éloignée, d’où un passage en caisse accéléré et un temps d’apprentissage minime.Il est l’outil idéal des professionnels des secteurs du commerce et de la distribution. Spécifiquement pour qui souhaitent déchiffrer un large éventail de codes et à moindre coût.Décodage instantané avec l’imagerie intelligente PRZMLes algorithmes de décodage logiciel PRZM de Zebra sont les seulsà offrir des performances supérieures sur des codes-barres de mauvaise qualité et complexes.

Simplicité du mode de lecture viser-déclencher Avec la lecture omnidirectionnelle des codes-barres, les utilisateurs n'ont plus à aligner l’imageur sur le code comme c’était le cas auparavant avec les scanners 1D.Témoin de décodage direct, pour un gain de productivité . La ligne laser sur le code-barres clignote pour signaler que la capturea abouti. Ainsi, les utilisateurs savent instantanément si le codes-barres été capturé correctement .

 Préconfiguré, pour une utilisation immédiate dès la prise en main .Dans la mesure où les paramètres par défaut sont optimisés pour la majorité des applications de lecture, vous pouvez utiliser les imageurs de la gamme DS2200 sans configuration préalable .","Modèle: IMAGEURS PORTABLES 1D/2D DS2278
Type de scanner: Imageur matriciel
Capacité du scanner: 1D, 2D, PDF417
Interfaces hôtes prises en charge: USB, RS232, décodeur d’interface, TGCS (IBM) 46XX sur RS485
Tolérance au mouvement (mode portable): Jusqu’à 5 po/13 cm par seconde pour un code UPC 13 mil
Vitesse de capture tactile (mode mains libres): Jusqu’à 30 po/76,2 cm par seconde pour un code UPC 13 mil
Champ de visée de l’imageur: 32,8 ° horizontal x 24,8 ° vertical
Température de fonctionnement: Imageurs DS2208/DS2278 : de 32 ° à 122 ° F/de 0 ° à 50 ° C Station de présentation : De 32 ° à 104 ° F/de 0 ° à 40 ° C
Type et capacité de la batterie: Batterie lithium-ion 2 400 mAh
Nombre de lectures par charge de la batterie: 110 000 lectures à raison de 60 lectures par minute ou 50 000 lectures à raison de 10 lectures par minute
Durée de fonctionnement par charge complète: 84 heures
Durée de charge: 1 heure via Micro USB 4 heures via le berceau de présentation
Tolérance aux chutes: Conçu pour résister à de multiples chutes à 5,0 pi/1,5 m sur du béton
Etanchéité : IP42","Lecteur_de_code-barre_Zebra_DS2278.png", 8);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (25, "Lecteur de code-barres Zebra LS1203", " Technocode Tunisie propose une gamme complète d’équipements en matière de traçabilité et de mobilité (lecteurs codes à barres, imprimantes codes à barres, PDA et terminaux mobiles, tablettes professionnelles, etc. En fait, Le Lecteur code à barre LS1203 combine lecture laser de haute qualité, ergonomie conviviale et durabilité, et ce, à un prix très abordable.Spécialement conçu pour répondre aux besoins des PME, ce scanner bénéficie de performances et de fonctions destinées à réduire les erreurs de saisies et à améliorer la productivité quotidienne.Excellent rapport qualité/prix pour une utilisation quotidienne Le scanner portable Zebra LS1203 offre une numérisation laser de haute qualité, une ergonomie conviviale et une durabilité à un prix abordable.Conçu pour répondre aux besoins des petites entreprises, la douchette filaire LS1203 offre les performances et les fonctionnalités nécessaires pour réduire considérablement les erreurs de saisie de données et augmenter la productivité.Facile et confortable à utiliser, ce scanner économique de grande valeur offre la fiabilité et la protection de l'investissement qui ont fait de Zebra le leader mondial de la lecture portable de codes-barres.","Gamme : SCANNER CODE À BARRES UNIVERSEL LS1203
Capacité de décodage: 1D
Technologie de numérisation: Laser
Tolérance aux chutes: Résiste aux chutes multiples de 1,50 m sur le béton
Etanchéité: IP41","Lecteur_de_code-barres_Zebra_LS1203.png", 9);


INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (26, "Lecteur de code-barres Zebra LS2208", " Technocode Tunisie propose le Scanner Code Barre Zebra LS2208 . Le lecteur code a barre Zebra LS2208 abordable à technologie laser, associe une lecture rapide et fiable à une forme ergonomique et légère. La vaste plage d’utilisations de ce lecteur de codes-barres le rend idéal pour les environnements de la vente, de l’enseignement, de la santé, ou de l’administration. De plus ,la douchette code a barre LS2208 se caractérise par sa précision à longue portée et capacité à numériser des codes à haute densité.

La gamme de pointe se combine avec la prise en charge des codes-barres haute densité
Les travailleurs peuvent capturer les codes-barres UPC de 13 mil de tous les jours sur des articles distants de plus 63,5 cm et les codes-barres haute densité courants sur les petits articles de vente au détail, le tout dans un seul appareil.

Construction durable
Avec sa construction à carte unique brevetée, son élément de balayage breveté en polymère liquide sans friction, sa fenêtre de sortie en verre trempé résistant aux rayures et ses spécifications strictes en matière de chute et de culbutage, le LS2208 offre un fonctionnement fiable toute la journée, tous les jours.

Une ergonomie sur laquelle les travailleurs peuvent compter
la conception équilibrée ergonomique et légère éprouvée offre un confort maximal, même dans les environnements les plus intensifs en numérisation. Le résultat? Réduction de la fatigue de l'utilisateur et augmentation de la productivité des travailleurs","Gamme : LS2208
Capacité de décodage: 1D
Technologie de numérisation: Laser
Tolérance aux chutes: L'unité fonctionne normalement après des chutes répétées de 5 pi/1,5 m sur du béton
étanchéité: IP30","Lecteur_de_code-barres_Zebra_LS2208.png", 9);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (27, "Lecteur de code-barres ultra-durcie Zebra LI3608", " Technocode Tunisie propose le lecteur de code-barres ultra-durcie Zebra LI3608. Le lecteur code barre Zebra LI3608 est un scanner à main 1D filaire , ultra-durci pour la lecture de codes-barres en entrepôt ou à l’usine. Il est idéal pour scanner rapidement et efficacement des codes imprimés sur des étiquettes en papier ou des formats électroniques. Ce lecteur résiste aux chutes de 2,4 m sur sol bétonné et continue de fonctionner après avoir subi 5000 chocs. Cette douchettes code a barre filaire présente un indice d’étanchéité IP67 qui lui assure une protection totale contre l’eau et la poussière.

PERFORMANCE SUPÉRIEURE
Haute performance de lecture 1D; Le LI3608 vous permet de lire les codes-barres aussi rapidement et avec une portée de fonctionnement supérieure , rien de plus facile que de capturer les codes-barres éloignés. Les codes-barres sont-ils sous plastique d’emballage ? Endommagé ? Sale ? Mal imprimés ? Aucun problème, ce scanner intelligent les lit tous.

ARCHITECTURE ULTRA-DURCIE
L’usine de fabrication est l’un des environnements les plus exigeants, et le coût des temps d’arrêt non planifiés sur la ligne de production est astronomique. C’est pourquoi Zebra a créé une nouvelle catégorie de produits : les scanners ultra-durcis. Ce scanner étanche à la poussière et à l’eau présente le plus haut niveau de résistance aux chutes, impacts et corps étrangers et offre un atout unique : les indices d’étanchéité IP65 et IP68.

MANIABILITÉ INÉGALÉE
Dotés des meilleurs outils de l’industrie, ces scanners ne sauraient être plus faciles à gérer. Vous pouvez configurer et actualiser vos scanners à distance, formater les données pour transmission instantanée dans vos applications professionnelles, surveiller les statistiques de batterie de vos modèles sans fil et bien plus encore.","Gamme : SCANNER ULTRA-DURCI 1D LI3608-SR
Capacité de décodage: 1D
Technologie de numérisation: Imageur linaire
Interfaces hôtes prises en charge: USB, RS232, Keyboard Wedge Ethernet industriel : EtherNet/IP, Profinet, Modbus TCP et TCP/IP std
Témoins: Témoin de décodage direct, LED, bip sonore, vibration
Batterie: PowerPrecision+, 3100 mAh, Li-Ion, rechargeable (pour les modèles sans fil)
Nombre de lecture par charge complète: Plus de 70 000
Temp. de fonctionnement: Câblé : de -30° C à 50° C Sans fil : de -20° C à 50° C
Résistance aux chutes: Résiste aux chutes répétées de 2,40 m sur le béton
Étanchéité: Scanner : IP65 et IP67 ; support FLB : IP65","Lecteur_de_code-barres_ultra-durcie_Zebra_LI3608.png", 9);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (28, "Scanner Fixe Zebra DS9300", " Les imageurs DS9308 sont de petits scanners fixes aux puissantes fonctionnalités. Ces scanners codent une barre s'installent n'importe où, de la boutique au commerce de proximité, et sur les comptoirs les plus exigus. Leur capacité de lecture en rafale et leur capture des codes-barres difficiles à lire avec succès dès la première tentative assurent la fluidité des fichiers d'attente. Et leur conception durable les protège des chutes, des chocs et des éclaboussures qui caractérisent l'usage quotidien.

La série DS9300 compacte s'intègre dans les comptoirs les plus restreints et le design moderne et élégant est à l'aise partout, de la boutique la plus branchée à un dépanneur pétrolier.
Le lecteur de codes-barres fixe DS9308 s'appuie sur un processeur puissant et sur la technologie exclusive d'imagerie intelligente PRZM de Zebra pour capturer instantanément pratiquement tous les codes-barres imprimés et électroniques.
Conçu pour une fiabilité maximale - Étanchéité IP52, caractéristiques de chute de 5 pi/1,5 m, caractéristiques de culbutage de 1 000 x 1,5 pi/ 0,5 m plus trou d'avertisseur dissimulé et circuits surélevés pour protéger contre les déversements dans les QSR, les dépanneurs et plus encore.
Outils complémentaires pour un déploiement et une gestion faciles dans une entreprise.","Gamme : Scanner Fixe
Modèle: Zebra DS9308
Technologie de numérisation: Imageur linéaire
Capacité de décodage: 1D, 2D, PDF417
Tolérance aux chutes: Résiste aux chutes répétées de 5,0 pi/1,50 m sur une surface en béton
étanchéité: IP52","Scanner_Fixe_Zebra_DS9300.png", 10);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (29, "Scanner fixe Zebra DS7708", " Au niveau des caisses, la vitesse de passage des clients est l’un des défis majeurs rencontrés par les commerçants. Vous souhaitez absolument garder la file d’attente courte en vous occupant rapidement de vos clients.

A cet effet, Technocode vous propose le Zebra DS7708 scanner Comptoir. Avec sa technologie haut de gamme ,Ce scanner de comptoir rond le processus de numérisation plus fluide et rapide.

Le Zebra DS7708 Imageur Comptoir propose un ensemble de fonctionnalités qui le placent au premier rang dans sa catégorie en termes de performances, de facilité de déploiement et de coût total de possession. En outre, Le modèle DS7708 de Zebra peut scanner tous les type des codes à barres présentés dans votre point de ventes .( 1D, 2D, imprimés et électroniques)

Grâce à sa conception compacte, simplicité d’installation et d’utilisation, le scanner DS7708 peut être intégré sur votre comptoir facilement même dans les allées des caisses les plus étroites.



De plus ,le scanner Comptoir DS7708 est un lecteur robuste par conception pour une durabilité à long terme, il vous permet de réduire les coûts, de garantir une durée de fonctionnement stable et d’optimiser le cycle de vie de votre équipement, ainsi que votre retour sur investissement.","Gamme : Lecteur de code barre fixe
Modèle: Zebra DS7708
Technologie de numérisation: Imageur matriciel
Capacité de décodage: 1D, 2D et PDF417
étanchéité: IP52","Scanner_fixe_Zebra_DS7708.png", 10);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (30, "Scanner de comptoir Zebra MP7000", " Technocode Tunisie  propose la gamme des scanners de comptoir universels Zebra™ MP7000.

Répondez aux exigences de vos caisses enregistrant les plus gros volumes de ventes grâce à l’imageur 1D/2D multiplans de nouvelle génération, le Zebra MP7000. Le scanner de comptoir MP7000 renferme des fonctionnalités qui lui confèrent une performance et une simplicité de lecture inédites.

Les performances de numérisation les plus rapides
le scanner de point de vente MP7000 est doté de la technologie de numérisation la plus avancée qui garantit une capture instantanée de pratiquement tous les codes-barres électroniques et imprimés. Avec la plus grande zone de numérisation de sa catégorie, le MP7000 offre une véritable capacité de « glisser-et-aller ».

L'innovation au point de vente
Grâce à la prise en charge intégrée du nouveau code-barres Digimarc® et à la possibilité de capturer des chèques, des reçus, des factures de services publics et bien plus encore, les caissiers peuvent traiter les achats encore plus rapidement. L'éclairage encastré est pratiquement invisible, agréable pour les yeux des caissiers et des acheteurs.

Une gérabilité inégalée
Avec scanenr Zebra MP7000, vous bénéficiez d'un puissant logiciel de gestion complémentaire pour une gestion à distance facile de l'ensemble de votre solution de numérisation : scanner, balance et tous les périphériques connectés, tels qu'un scanner portable. De plus, grâce aux diagnostics prédictifs, les informations dont les utilisateurs ont besoin pour maintenir leurs appareils MP7000 en bon état de fonctionnement sont toujours à portée de main.","Gamme : Counter Scanner
Modèle: Zebra MP7000
Technologie de numérisation: Imageur matriciel à CMOS multiples et capacités 1D et 2D
Capacité de décodage: 1D/2D","Scanner_de_comptoir_Zebra_MP7000.png", 10);


INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (31, "Zebra 123Scan", "123Scan facilite la configuration des scanners et chaque étape de leur déploiement. Évolué, mais suffisamment convivial pour les nouveaux utilisateurs, 123Scan détecte automatiquement vos équipements de capture de données puis vous guide au fil de la programmation, du début à la fin du processus. Il permet de mettre à jour le firmware, de réussir un grand nombre d'appareils, d'afficher les données et les images des codes à barres et de créer des rapports.

Éliminer les complications

Avec la solution remarquablement simple 123Scan, même pour les nouveaux utilisateurs, n'importe qui peut configurer et programmer ses scanners. Une première dans l'industrie, 123Scan détecte et programme automatiquement vos scanners Zebra sans scanner de code-barres ni effacer vos paramètres existants.

Simplicité inégalée

Puissant et présenté simple, 123Scan rationalise tous vos besoins de configuration et de maintenance de scanners. Téléchargez les paramètres, actualisez le firmware, affichez les statistiques, générez des rapports compatibles avec Microsoft Word et validez la configuration en optimisant les données.

Accessible à tous

Qu'il s'agisse d'atteindre un seul scanner ou une multitude d'appareils à l'échelle de l'entreprise, 123Scan simplifie et accélère la tâche. Grâce au mode de migration massive de 123Scan, Mass Upgrade, vous pouvez regrouper les appareils par lots de dix scanners en ajoutant simplement un ou plusieurs hubs USB."," ","Zebra_123Scan.png", 11);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (32, "Tablettes durcies Windows Zebra ET51 / ET56", "Lorsqu’il s’agit de choisir une tablette pour votre entreprise, votre personnel souhaite un style élégant et grand public, tandis que vous avez besoin d’une robustesse professionnelle, de la fonctionnalité de capture de données et d’une suite d’accessoires qui vous permettent de créer la tablette parfaite pour votre environnement, votre personnel et vos applications. Maintenant, vous pouvez réunir le meilleur de ces deux mondes avec les tablettes professionnelles ET51 et ET56. Les tablettes les plus robustes, minces et légères de la gamme proposée par Zebra, les tablettes professionnelles Windows ET51 et ET56 ressemblent en tout point à celles du grand public. Une tablette conçue pour gérer vos affaires quotidiennes, à l’intérieur comme à l’extérieur de vos locaux. Les modèles compacts de 8,4 pouces et de 10,1 pouces sont tous deux dotés d’écrans lumineux et visibles à la lumière du jour, et sont dotés de fonctions qui facilitent la capture des données. De plus, une gamme étoffée d’accessoires renforce la robustesse, simplifie la charge, prolonge la durée de vie de la batterie et rend cette tablette facile à transporter et à porter. Les tablettes professionnelles ET51/ET56 – toutes les fonctions dont votre entreprise a besoin, avec l’esthétique recherchée par votre personnel.

Conçue pour les activités professionnelles quotidiennes
Robuste et prête à l’emploi en intérieur et à l’extérieur

Pratiquement rien n’empêchera le bon fonctionnement de vos tablettes : elles sont conçues pour résister aux chutes sur du béton, à la pluie, à la neige, à la poussière, aux températures extrêmes, aux éclaboussures et même à l’arrosage à pleine puissance. Et vous pouvez pratiquement doubler la résistance aux chutes sur béton de 3,2 pi/1 m à 5,9 pi/1,80 m avec le robuste cadre de protection en option.

Le verre Corning® Gorilla® Glass de l’écran offre résistance aux chocs et aux rayures, protégeant ainsi l’un des composants les plus vulnérables d’une tablette. De plus, les essais de résistance aux vibrations garantissent que cette tablette est idéale pour être utilisée dans pratiquement tous les véhicules, des chariots élévateurs des entrepôts jusqu’aux camions de livraison et autres camions sur la route.","Gamme: Tablettes durcies Windows
Modéle: Zebra ET51 / ET56
Système d'exploitation: Windows 10 IoT Enterprise
Affichage: ET51 8,4 pouces : 21,3 cm ; 720 nits ET56 10,1 pouces : 25,7 cm ; 540 nits Prend en charge jusqu'à 2560 x 1600 ; Corning Gorilla Glass; visible à la lumière du jour
Batterie: ET51 : Li-Ion rechargeable 3300 mAh 7,6 V ; remplaçable par l'utilisateur (25 Wh) ET56 : Li-ion rechargeable 4 950 mAh 7,7 V ; remplaçable par l'utilisateur (38 Wh)
Communications sans fil: Wi-Fi (WLAN) Cellulaire (WWAN) (ET56 uniquement) Bluetooth (WPAN) GPS NFC ","Tablettes_durcies_Windows_Zebra_ET51_ET56.png", 12);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (33, "Tablettes durcies Windows 2-en-1 Zebra ET80 / ET85", "Vos interventions sont essentielles, vous savez que l’on compte sur vous. Votre équipe assure les services essentiels (sécurité publique, services publics et marchandises) indispensables au bien-être et la prospérité de votre communauté. Mais ce n’est pas facile.

Il vous faut un terminal mobile fiable et ultra-performant, où que vous soyez, pour garantir votre efficacité. Un appareil sur lequel vous pouvez compter pour aider tous ceux qui dépendent de vous.

Les tablettes durcies 2-en-1 ET80 et ET85 pour enrichir une gamme déjà vaste. Légères, minces et pourtant résistantes, elles sont conçues pour s'adapter à votre mode de travail en proposant à la fois un clavier et un écran tactile. Elles prennent en charge la connectivité sans fil la plus avancée – Wi-Fi 6E, 5G et plus encore – pour que vous puissiez vous connecter où que vous soyez. ","Modèle: Tablettes durcies Windows 2-en-1 Zebra ET80 / ET85
Système d'exploitation : Windows® 10 Professional 64 bits Windows® 10 IoT Enterprise 64 bits* * Disponible après le lancement initial Intel® Core™ i7-1180G7 vPro® de 11e génération Intel® Core™ i5-1140G7 vPro® de 11e génération Intel® Core™ i5-1130G7 de 11e génération
Affichage: 12 po 3:2 QHD (2160 x 1440) — 800 nits Verre Corning Gorilla Glass Lisible à la lumière solaire Traitement antireflet et antisalissure Mode vision de nuit
Batterie: 5 180 mA h, 7,7 V, lithium polymère rechargeable ; remplaçable par l’utilisateur (39,8 Wh) Pleine charge en 2,5 heures En option, batterie secondaire remplaçable par l’utilisateur, 3 400 mAh , 7,6 V (25,8 Wh), module d’extension au dos nécessaire Fonctionnement : 11 heures (17 heures avec la batterie auxiliaire)
Communications sans fil: WLAN : Wi-Fi 6E* RÉSEAU PERSONNEL SANS FIL (WPAN) : Technologie Bluetooth 5.1 * Disponible après le lancement initial ","Tablettes_durcies_Windows_2-en-1_Zebra_ET80_ET85.png", 12);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (34, "Tablettes durcies Windows Série L10 Zebra", "La gamme de tablettes durcies Zebra L10 se décline en plusieurs configurations partageant un même écosystème d’accessoires, qui redéfinit le travail au bureau, dans les véhicules et sur le terrain.

Que vos collaborateurs nomades préfèrent une tablette classique (XSlate L10), à poignée rigide et lecteur de codes-barres intégré (XPad L10), ou à clavier détachable pour une solution 2-en-1 avec XSlate (XBook L10), la plateforme Zebra L10 leur offre toujours un outil adapté à leur mission. Choisissez le système d’exploitation adapté à votre activité .

Accessoires pour la personnalisation
Ajoutez des ports et des options de capture de données
Conception durcie et durable
Capture parfaite de presque tous les codes-barres, quelle que soit leur condition: Le moteur de lecture intégré SE4710 de Zebra (en option sur XPAD L10 uniquement).
Connexions réseau les plus rapides
Autonomie et gestion inégalées de la batterie
Portée et vitesse Wi-Fi améliorées, consommation réduite
Lecteur RFID UHF en option (AEI)","Gamme: Tablettes durcies Windows
Modéle: Zebra XPAD, XBOOK 2-EN-1, XSLATE
Système d'exploitation: Windows® 10 Professional, 64-bit, Intel® Pentium® N4200 processor; (LPDDR4, 1.10 GHz, 2.50 GHz turbo frequency)
Affichage: 10,1 po résolution de 2K WUXGA 1920 x 1200 (16:10) - View Anywhere® nominal, capacitif de 1 000 nits Verre Corning® Gorilla® Glass 3 Capacitif, tactile 10 points
Batterie: Batterie standard : jusqu’à 9,5 heures Batterie étendue : jusqu’à 25 heures Temps de chargement de la batterie","Tablettes_durcies_Windows_Série_L10_Zebra.png", 12);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (35, "Tablettes Android durcies Série ET51 / ET56 Zebra", "Technocode Tunisie propose les Tablettes Android durcies Série ET51 / ET56 Zebra .Les tablettes d'entreprise ET51/ET56 Android donnent aux employés la sensation de leur tablette personnelle, mais avec une durabilité de classe entreprise. La tablette ET51 Android Enterprise de Zebra est une tablette étonnamment robuste, fine et légère avec lecteur de codes-barres 1D/2D intégré.

Principales propriétés des tablettes professionnelles robustes Android ET51/ET56
Petit mais résistant
Les tablettes ET51/ET56 sont étonnamment robustes pour leur taille et leur poids, avec une spécification de chute de 3,3 pieds (5,9 pieds avec cadre en option), une large plage de températures de fonctionnement et un indice de protection IP65.

Capture de données polyvalente
Une variété d'options de capture de données répondent à tous les besoins, avec un écran tactile, des caméras avant et arrière, des microphones doubles et un choix de deux scanners/imageurs montés à l'arrière pour collecter des données aussi rapidement que nécessaire.

Résistant aux températures extrêmes
Les tablettes ET51/ET56 sont à l'aise dans une large gamme de températures de fonctionnement, de -20 à 50° C (-4 à 122° F), permettant aux utilisateurs de travailler de manière fiable à l'extérieur toute l'année, quelle que soit la saison.

Communications supérieures
Les données sont transmises rapidement et de manière fiable avec WiFi avancé, BT, NFC, GPS et, dans l'ET56, 4G LTE global et rapide. Les utilisateurs restent facilement en contact pratiquement partout où ils sont basés.

affichage de qualité supérieure
Les écrans visibles à la lumière du jour sont idéaux pour une utilisation dans pratiquement toutes les conditions d'éclairage ou météorologiques. Ils peuvent également être utilisés indifféremment avec un doigt, un gant ou un stylet, même mouillés.

Autonomie fiable de la batterie pour un quart de travail complet
La durée de vie de la batterie dure de manière fiable pendant toute une longue session de travail, tandis que les multiples options de charge et le choix d'une batterie secondaire remplaçable à chaud permettent aux travailleurs de l'utiliser 24 heures sur 24.","Gamme : Tablette Android durcie Zebra ET51/ET58
système d'exploitation : Android 11; Possibilité de mise à niveau jusqu’à Android 14
Microprocesseur: Android : Qualcomm Snapdragon™ 660 huit cœurs, 2,2 GHz Windows : Intel Atom E3940 quadricœur cadencé à 1,6 GHz (fréquence Turbo = 1,8 GHz), système d’exploitation 64 bits pris en charge
Affichage: 8,4 po Écran Résolution maximale 2 560 x 1 600 720 nits Verre Corning Gorilla ; visible en plein jour
Batterie: Android : 6 440 mAhr, 3,8 V, lithium polymère rechargeable ; remplaçable par l’utilisateur (24,4 Whr) en option, échange à chaud 3 400 mAh, 7,2 V (24,4 Whr) Windows : 3 300 mAh 7,6 V Li-Ion rechargeable ; remplaçable par l’utilisateur (25 Whr) en option, remplaçable à chaud 7,2 V @ 3 400 mAh (24,4 Whr)
Résistance aux chutes : 3,3 pi/1 m sur le béton, conforme à la norme MIL-STD-810G 1,8, m (5,9 pi) avec cadre robuste en option","Tablettes_Android_durcies_Série_ET51_ET56_Zebra.png", 13);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (36, "Tablettes Android Durcies Zebra L10", "Donnez à vos travailleurs la puissance des données mobiles dans vos environnements les plus exigeants avec la famille de tablettes L10 de Zebra ou Android. Trois modèles répondent aux besoins des travailleurs dans le domaine de l'énergie, de l'exploitation minière, des services publics, des télécommunications, de la construction, de la sécurité publique et du gouvernement - ainsi que dans les entrepôts de transformation des produits pharmaceutiques et des aliments et des usines de fabrication. Prise en charge du Wi-Fi 6e et du 5G / 4G facultatif, les dernières technologies sans fil, maintient les travailleurs connectés aux informations et aux personnes dont ils ont besoin, chaque minute de chaque quart de travail. Le processeur de 11e génération d'Intel offre des performances rapides sur toutes vos applications, tandis qu'un choix de batteries fournit une puissance de décalage complet ou d'une température d'une seule charge. Les bonnes options de capture de données augmentent la productivité. Value-Ajoutez des outils logiciels Zebra uniquement Prenez la collaboration et la productivité au niveau suivant - et les accessoires simplifient l'utilisation quotidienne des tablettes. La tablette Zebra L10 est -le des comprimés accidentés ultimes conçus pour le lieu de travail.Les Tablettes Zebra L10 sont des comprimés imperméables, à la poussière et aux comprimés à la poussière sont conçus pour le gérer. Déposez-les sur du béton. Obtenez-les mouillés - même si les couvercles de port sont ouverts. Utilisez-les en chaleur extrêmement chaleur et sous zéro froide, à l'intérieur d'un camion, d'une voiture ou d'un chariot élévateur - ou des matières dangereuses inflammables pourraient être présentes.","Gamme : Zebra L10 Android
système d'exploitation : Android 11; Possibilité de mise à niveau jusqu’à Android 14
Microprocesseur: Qualcomm Snapdragon™ 660 huit cœurs, 2,2 GHz
Affichage: 8,4 po Écran Résolution maximale 2 560 x 1 600 720 nits Verre Corning Gorilla ; visible en plein jour
Batterie: 6440 mAhr, 3,8 V, lithium polymère rechargeable ; remplaçable par l’utilisateur (24,4 Whr) en option, échange à chaud 3 400 mAh, 7,2 V (24,4 Whr)
Résistance aux chutes : 3,3 pi/1 m sur le béton, conforme à la norme MIL-STD-810G 1,8, m (5,9 pi) avec cadre robuste en option","Tablettes_Android_Durcies_Zebra_L10.png", 13);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (37, "Tablettes Android durcies Série ET40 / ET45 Zebra", "Présentation des tablettes professionelles ET40 et ET45, les tablettes professionnelles robustes à prix raisonnable, conçues pour les entreprises. Commencez par une taille d’écran bien adaptée : les modèles 8 ou 10 pouces sont faciles à transporter et permettent d’afficher de nombreuses informations. Et chaque modèle offre toutes les fonctionnalités nécessaires, en natif. Outil professionnel robuste au design mince et léger de type grand public. Scanner professionnel intégré. Connexions sans fil les plus rapides. Cycle de vie de plusieurs années. Options de communication innovantes et puissantes. Optimisez le cycle de vie des tablettes en tous points et sans frais, grâce aux outils gratuits Mobility DNA Professional, une exclusivité de Zebra. Augmentez la productivité de vos collaborateurs, en facilitant la capture des données à l’aide du jeu d’outil Mobility DNA Enterprise, en option.



Choisissez votre taille d'écran

Choisissez la taille d'écran qui convient à la tâche — un écran compact facile à transporter un écran de 8 pouces ou un écran plus grand de 10 pouces pour une visualisation plus facile de applications riches en informations.



Robuste et prêt à travailler toute la journée

Les tablettes Zebra ET40 et ET45 sont conçus pour les affaires de l'intérieur, offrant un fonctionnement fiable sur lequel vous pouvez compter. Déposez-le sur le carrelage ou sols en béton. Utilisez-le à l'intérieur et à l'extérieur, même dans la chaleur ou températures inférieures à zéro.



Connectivité sans fil la plus rapide pour rester connecté n'importe où

Obtenez les vitesses Wi-Fi et cellulaires les plus rapides avec Wi-Fi 6 et 5G. La Tabelettes durcie Wi-Fi uniquement ET40 est idéal à l'intérieur dans le commerce de détail et l'hôtellerie, tandis que le Wi-Fi et cellulaire ET45 est idéal pour les chauffeurs-livreurs et plus encore dans le champ. Connectez des casques sans fil, des imprimantes et plus encore avec Bluetooth pour créer une solution sans fil complète.



Alimentation par batterie multi-équipes

Les options d'alimentation permettent à vos tablettes de fonctionner pendant plusieurs quarts de travail, tandis que les batteries PowerPrecision de Zebra fournissent l'intelligence pour mieux gérer votre pool de batteries.



Numérisation intégrée de classe mondiale

Quel que soit le type de numérisation effectué par vos employés, il y a un Zebra moteur de numérisation adapté à la tâche - de la numérisation à plage standard à un grand 'sweet spot' pour une simplicité point-and-shoot fiable ou un scanner à portée avancée pour capturer les éléments en main et à travers le chambre.","Gamme: Tablette Android durcie
Modéle: Zebra ET40/ET45
Système d'exploitation: Android 11 ; évolutif vers Android 14
Microprocesseur: Qualcomm SnapdragonTM SM6375 Octa-Core (8): 2.2 GHz (2) and 1.8 GHz (6)
Memoire: Standard: 4 GB LPDDR4X SDRAM/64 GB UFS Flash Premium: 8 GB RAM/128 GB
Affichage: 8 pouces/20,3 cm : 500 nits, couleur WXGA 1 280 x 800 10,1 pouces/25,7 cm : 500 nits, couleur WUXGA 1920x1200 ; Verre Corning® Gorilla®
Batterie: 8 pouces : Li-Ion rechargeable 6100 mAh 3,87 V Polymère; remplaçable par l'utilisateur (23,61 Wh) 10 pouces : Li-Ion rechargeable 7600 mAh 3,87 V Polymère; remplaçable par l'utilisateur (29,41 Wh) Remplaçable à chaud en option 3400 mAh 7,6 V (25,84 Wh) batterie secondaire, à utiliser avec l'extension accessoire de dos
Boutons: Volume haut/bas ; marche / arrêt; lecteur de code-barres ; boutons programmables
Notifications: Tonalité audible ; LED multicolores ; vibration
Scanner code à barre: 1D/2D
Wi-Fi (WLAN): EEE 802.11 a/b/g/n/ac/d/h/i/r/k/v/w/mc/ax 2x2 MU-MIMO; Wi-Fi ® certified; IPv4, IPv6 (Wi-Fi 6)
Cellulaire: ET45 uniquement
Spécifications de chute: Standard: 4 pieds / 1,2 m au béton selon MIL-STD-810H Avec cadre robuste en option : 5,1 pieds / 1,55 m selon MIL-STD-810H
Étanchéité : IP65","Tablettes_Android_durcies_Série_ET40_ET45_Zebra.png", 13);


INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (38, "Imprimante à badges Zebra ZC100", "Technocode Tunisie propose la gamme d’imprimante cartes ZEBRA ZC100.Que vous ayez besoin d’imprimer des badges d’identification d’employé, des cartes de membre ou des cartes d’invitation recto. Votre entreprise ne peut pas se passer de l’impression de cartes.

En conséquence ,La flexibilité de déploiement, la vitesse et la facilité de votre gestion d’impression de cartes ont un impact sur votre entreprise . Aussi sur vote image de marque, productivité du personnel, performances globales et coûts d’exploitation. Il existe un nouveau modèle d’imprimante à cartes conçu pour faire face à tous ces problèmes : la ZC100 de Zebra.

Par ailleurs, un fonctionnement extrêmement simple, un profil ultra-mince pour les espaces les plus restreints. De plus, la ZC100 possède une boîte à outils pour des fonctions supplémentaires. Finalement , ce sont les atouts qui rendent le ZC100 encore plus facile à intégrer, à utiliser et à gérer. Déploiement sans peine en mode plug-and-play La ZC100 est prête à l’emploi dès sa sortie de l’emballage.

Autrement dit , Aucune configuration complexe ni chronophage n’est à prévoir. Il suffit de brancher l’imprimante pour commencer à profiter de tous ses avantages dès le premier jour. Impression simple face rapide, en couleur et en monochrome Zebra a encore rendu meilleur un modèle déjà de qualité. La ZC100 imprime 30 % plus vite en monochrome et 15 % plus vite en couleur, par rapport à ses prédécesseurs, les imprimantes de cartes ZXP Series 1 de Zebra Dimension adaptée à vos besoinsVotre imprimante ne doit pas vous imposer le lieu d’émission de vos cartes, elle doit pouvoir s’intégrer à tous les environnements.

Options d’encodage de base Que vous imprimiez des badges d’employés, des cartes d’identité, des forfaits saisonniers, des cartes d’adhérents ou des cartes bancaires, vous pouvez choisir l’option d’encodage la mieux adaptée à vos besoins. Ajoutez une bande magnétique rapide à lire lors de l’impression de vos cartes. Large éventail de connexions Connectez l’imprimante à un ordinateur par le biais du port USB intégré, afin de créer une station d’impression autonome, ou ajoutez une connexion Ethernet ou Wi-Fi en option, pour donner un accès instantané à tous ceux qui ont besoin d’imprimer des cartes.

notez que nous fournissons également des consommables authentiques qui sont nécessaires pour maintenir votre équipement en parfait état ,voici le ruban pour l'imprimante de badges zc100 .","Technologie d'impression: Imprimante directe sur carte
Capacités d'impression: Simple face
Vitesse d'impression : Color - 150 cph Mono - 700 cph
Interface communications : Norme – USB 2.0 Facultatif – Ethernet 10/100 intégré ; IFM 802.11ac
Image max par rouleau de ruban: Color - 200 Mono - 2000
Gamme: Imprimante a Badges
Modèle: Zebra ZC100","Imprimante_à_badges_Zebra_ZC100.png", 14);


INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (39, "Imprimante a cartes Zebra ZC300", "Quel que soit le type de carte que vous devez imprimer - de l'identité et de l'accès aux cartes d'adhésion, d'événement et de crédit/débit - le ZC300 vous aidera à le faire mieux, plus rapidement et plus facilement. Une ingénierie élégante élimine pratiquement tous les points douloureux associés à l'impression de cartes. Le résultat est la simplicité d'un bouton-poussoir, peu importe ce que vous imprimez : cartes à bande magnétique simple ou double face ou cartes sans contact, en couleur ou en noir et blanc. Et avec une conception révolutionnaire qui s'adapte partout, vous pouvez obtenir une impression de cartes sécurisée partout où vous en avez besoin. ","Gamme: Imprimante a Badges
Modèle: Zebra ZC300
Technologie d'impression: Imprimante directe sur carte
Capacités d'impression: Simple face; Double face
Vitesse d'impression : Simple face: Couleur – 200 cph Mono – 900 cph Double face : Couleur – 140 cph Mono – 450 cph
Interface communications : Norme – USB 2.0 ; Ethernet 10/100 intégré En option – 802.11ac avec MFi
Image max par rouleau de ruban: Couleur – 400 Mono – 2000","Imprimante_a_cartes_Zebra_ZC300.png", 14);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (40, "Imprimantes de cartes hautes performances ZXP7", "Technocode Tunisie propose la gamme des imprimantes cartes Zebra ZXP7.L’imprimante ZXP Series 7 est fabriquée pour répondre aux besoins exigeants du monde actuel des affaires. Dotée d’une conception robuste prête à l’emploi, elle convient à un large éventail d’applications et d’environnements et génère une qualité d’impression et une profondeur de couleurs de qualité quasi-photographique, grâce à sa technologie d’impression photo. L’imprimante réalise également l’impression de cartes bord à bord, tandis que le module de lamination assure la sécurité des cartes et protège la durée de vie des images. L’imprimante ZXP Series 7 offre une réelle flexibilité. Vous pouvez sélectionner les options quand vous en avez besoin. L’impression et la lamination peuvent se faire en simple ou double face, sans pertes. L’imprimante est également assortie d’une série complètes d’options d’encodage et de connectivité, y compris l’encodage UHF et la connectivité sans fil.","Image max par rouleau de ruban: Couleur-750 Mono-5 000
Gamme: Imprimante a Badges
Modèle: Zebra ZXP 7
Technologie d'impression: Imprimante directe sur carte
Capacités d'impression: Simple face ou Double face
Vitesse d'impression : Couleur-300 CPH Mono-1 375 CPH
Interface communications : Standard : USB et Ethernet Facultatif : 802.11 b/g sans fil","Imprimantes_de_cartes_hautes_performances_ZXP7.png", 14);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (41, "Badges vierges en pvc","Badges vierges en pvc"," ","Badges_vierges_en_pvc.png", 15);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (42, "Ruban YMCKO pour ZXP1","Technocode Tunisie vous propose le RUBAN YMCKO ZXP1 Couleur pour imprimante à Badges ZXP SERIES 1\n\nLes rubans d’imprimante cartes Zebra True Colors® produisent des cartes d’identification de haute qualité et prolongent la durée de vie de vos imprimantes et cartes.\n\nDes couleurs éclatantes, des tons chair » naturels » ainsi que des codes à barres et du texte parfaitement nets\n« Technologie de ruban d’impression brevetée, pour un encrassement minimal de la tête d’impression et des cartes durables »\nconsultez également le kit de nettoyage pour le ZXP1"," ","Ruban_YMCKO_pour_ZXP1.png", 15);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (43, "Ruban YMCKO pour ZEBRA ZXP3, 200 FACES","ces Consommables spécialement conçus pour les imprimantes à cartes Zebra, afin d’assurer une qualité d’impression parfaite, des performances optimisées et un coût par carte minimisé en prolongeant la durée de vie de votre imprimante "," ","Ruban_YMCKO_pour_ZEBRA_ZXP3,_200_FACES.png", 15);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (44, "CARDSTUDIO 2.0 STANDARD","Toutes les fonctions classiques
Modèles de cartes et enregistrements de données illimités
1 fichier de projet Conversion de la base de données CardStudio 1.0
Fonction d'identification numérique
Peut être mis à niveau vers Enterprise et supérieur "," ","CARDSTUDIO_2_0_STANDARD.png", 16);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (45, "CARDSTUDIO 2 PROFESSIONAL","Toutes les fonctions d'entreprise et conceptions de cartes illimitées, projets, enregistrements de données
Carte à puce complète comprenant MIFARE Classic, plus et DESfire "," ","CARDSTUDIO_2_PROFESSIONAL.png", 16);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (46, "CARDSTUDIO 2 ENTERPRISE","Toutes les fonctions standards
Connectivité complète des bases de données externes pour les bases de données MS
Access, MS SQL, My SQL et Oracle
Prise en charge du pilote ODBC générique +Plusieurs fichiers de projet
Extensible à Professionnel et supérieur"," ","CARDSTUDIO_2_ENTERPRISE.png", 16);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (47, "Z-Band Wristbands","Technocode Tunisie  propose une large gamme des bracelets thermique Z-BAND Zebra.

Bracelets Zebra pour adulte format 25mmx279mm en polypropylène thermique direct, souple avec un adhésif inviolable pour la fixation. 200 bracelets par cartouche, 6 cartouches par boite. Les bracelets sont dans une cartouche à chargement facile pour les imprimantes HC100 & ZD510-HC."," ","Z-Band_Wristbands.png", 17);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (48, "Imprimante de bracelets Zebra ZD510-HC","Technocode Tunisie  propose la gamme des imprimante de bracelets ZD510-HC .D’abord ,cette imprimante est la mieux adaptée au milieu médical/laboratoire .La ZD510-HC de Zebra Permet le suivi et l’administration faciles et pratiques des patients. De plus, l’imprimante bracelet 510-HC est facile à utiliser .Egalement permet à votre personnel de rester aussi productif que possible.

En effet, la zebra ZD510-HC est super facile à utiliser . Le chargement des consommables est super SIMPLE . Il suffit d’insérer la cartouche Zebra Z-Band et vous êtes prêt à commencer. Par conséquent, L’imprimante a bracelets 510-HC est la solution ultime pour vos besoins d’impression de bracelets.

Zebra propose une large gamme de bracelets de santé durables. Dans de telles atmosphères où des matériaux antibactériens sont requis , cette imprimante est conforme aux espaces de travail les plus exigeants. Les fournitures certifiées Zebra garantissent des performances de qualité et une durabilité exceptionnelle.et dans différentes versions (format nouveau-né, ultra-doux, confort et fermeture QuickClip™)."," ","Imprimante_de_bracelets_Zebra_ZD510-HC.png", 18);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (49, "Imprimante thermique industrielle Zebra ZT600 RFID","Les imprimantes encodeurs RFID Zebra permettent d’encoder des données dans une étiquette RFID ; également nommée étiquette intelligente, étiquette à puce ou tag. cette technologie permet une visibilité sur votre chaîne d’approvisionnement par l’amélioration concrète de l’efficacité et de la précision de vos processus. A cet effet, Technocode Tunisie propose des Imprimante RFID Zebra ZT600. les séries Zebra ZT600 / ZT610 et ZT620 combinent une durabilité robuste et des performances exceptionnelles dans une plate-forme conviviale prête pour l’avenir. Les Imprimantes puissantes de nouvelle génération , imprimante encodeur RFID Zebra ZT600 , sont conçus pour vous aider à naviguer dans un paysage technologique en évolution rapide. C’est pourquoi, si vous êtes préoccupé par les exigences croissantes de la ligne de production, l’augmentation des complexités opérationnelles, l’intégration de systèmes disparates ou la maîtrise des coûts d’investissement, les imprimantes industrielles RFID de la série ZT600 ont ce dont vous avez besoin aujourd’hui et dans les années à venir."," Gamme: Imprimante RFID industrielle
Modèle: Zebra Série ZT600 RFID
Largeur d'impression ZT610 : 104mm
Largeur d'impression ZT620: 168 mm
Vitesse d'impression ZT610: 305 mm par seconde
Vitesse d'impression ZT620: 305 mm / seconde","Imprimante_thermique_industrielle_Zebra_ZT600_RFID.png", 19);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (50, "Imprimante thermique industrielle Zebra ZT400 RFID","Technocode Tunisie propose les imprimantes encodeurs RFID ZT400 . Augmentez votre productivité avec les imprimantes RFID Séries ZT400 . Avec leurs fonctionnalités avancées et leurs options de connexion, ces encodeurs et imprimantes produisent des étiquettes avec précision et fiabilité pour toutes vos applications de traçabilité d'articles en volumes moyens à élevés. La ZT411 RFID est la seule imprimante conçue pour l'impression et l'encodage des étiquettes sur métal. La suite d'applications, d'utilitaires et d'outils de développement Print DNA de Zebra optimisés par Link-OS® sont faciles à intégrer, à gérer et à entretenir quel que soit votre emplacement."," Largeur d'impression: 104 mm (4,09 po)
Vitesse d'impression maximale: Jusqu'à 14 po/356 mm par seconde
Modes de communication: Deux emplacements de communication ouverts permettent d'ajouter des cartes internes pour interface 802.11ac, parallèle, Ethernet et applicateur , IPv6 disponible en option sous forme de d'ongle externe relié au port parallèle.
Résolution d'impression: Résolution de 203 dpi , Résolution de 300 dpi (en option) , Résolution de 600 dpi (en option)
Capteurs de consommables: Double capteur de consommables : Transmissif et réfléchissant","Imprimante_thermique_industrielle_Zebra_ZT400_RFID.png", 19);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (51, "Imprimante thermique Bureautique Zebra ZD621R RFID","L'imprimante RFID bureautique ZD621R de Zebra offre les meilleures fonctionnalités de sa catégorie, des performances maximales, une technologie de nouvelle génération et une sécurité inégalée dont les clients ont besoin pour des années d'impression et d'encodage RFID de qualité supérieure.

Avec une nouvelle architecture innovante pour alimenter votre capacités d'impression en constante expansion ; Capacités d'impression et d'encodage RFID dans une imprimante de bureau compacte ; et une sécurité inégalée qui évolue constamment pour protéger les données sensibles et se protéger des cyberattaques. L'imprimante RFID ZD621R offre un écran tactile LCD couleur standard de 4,3 pouces avec un menu intuitif ainsi que des fonctionnalités améliorées, des options de communication et de gestion des supports installables sur site, ainsi que des capacités de gestion à distance accrues.

Ensemble, ces fonctionnalités offrent aux clients des performances d'impression exceptionnelles et une fiabilité de pointe pour des années d'utilisation optimale, ainsi qu'une intelligence et une sécurité inégalées pour les aider à aller de l'avant.

Flexibilité pour une large gamme d'utilisations et d'applications
Performances d'impression de premier ordre
Imprimez et encodez des étiquettes RFID et étiquettes autocollantes de 104 mm
Sécurité d'impression inégalée et tranquillité d'esprit
Interface utilisateur intuitive
Connectez-vous à votre façon avec une communication complète"," Système opérateur: Link-OS®
Résolution: 203 dpi/8 points par mm 300 dpi/12 points par mm (facultatif)
memoire: 512 Mo de mémoire Flash; 256 Mo de mémoire SDRAM 64 Mo de mémoire non volatile disponible pour l’utilisateur 8 Mo de mémoire SDRAM disponible pour l’utilisateur
Largeur d'impression: 4.09 in./104 mm pour 203 dpi 4.27 in./108 mm pour 300 dpi
Largeur d’impression maximale: 8 po/203 mm par seconde (203 ppp) 6 po/152 mm par seconde (300 ppp)
Capteurs multimédias: Capteur réfléchissant/de marque noire mobile pleine largeur; capteur transmissif/gap multi-positions
Firmware: ZPL II; EPL 2; XML; ZBI; PDF Direct","Imprimante_thermique_Bureautique_Zebra_ZD621R_RFID.png", 19);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (52, "lecteur RFID fixe Zebra FX7500","Le nouveau lecteur RFID fixe FX7500 Zebra présente une technologie radio RFID avancée, pour une lecture plus rapide et précise ainsi que des performances plus homogènes, même dans les environnements les plus difficiles. L’installation est ultra-simple. Il suffit d’accrocher le support de montage et d’insérer le lecteur. Aucune prise à proximité ? Pas de problème. La fonctionnalité PoE (Power over Ethernet) intégrée permet de placer le FX7500 là où il est nécessaire, sans installer de prises supplémentaires – Le FX7500 idéale pour les grands espaces ouverts. Une fois connectés au réseau, les appareils sont détectés automatiquement. La nouvelle radio est couplée à une architecture de réseau Linux plus flexible comportant les outils et les interfaces à normes ouvertes nécessaires à un déploiement facile et rapide au niveau d’applications RFID et dorsales."," ","lecteur_RFID_fixe_Zebra_FX7500.png", 20);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (53, "Lecteur UHF RFID RFD40","Le lecteur standard RFD40 UHF RFID permet aux travailleurs d'optimiser le comptage de cycles avec les meilleurs taux de lecture et plage de lecture de l'industrie et une capacité de batterie accrue. Plus important encore, il se connecte aux terminaux Zebra actuels et futurs, de sorte que vous obtenez un appareil évolutif."," Gamme: Lecteur UHF RFID
Modéle: Zebra RFD40
Moteur RFID: Zebra Proprietary Radio Technology
Vitesse de lecture optimale : 1,300+ Etiquettes/s
Alimentation: Quick-Release, PowerPrecision+ Li-Ion 7000 mAh battery
Spécifications de résistance aux chutes: Multiple 5 ft./1.5 m drops to concrete","Lecteur_UHF_RFID_RFD40.png", 21);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (54, "Lecteur RFID RFD8500 Zebra","Ajoutez la lecture RFID et codes-barres 1D/2D de nouvelle génération et de haute performance aux périphériques embarqués actuels et futurs, facilement, simplement et de manière rentable. Il suffit de coupler le RFD8500 Bluetooth à un périphérique embarqué Zebra ou compatible, et le jour est joué. Attachez le périphérique embarqué au RFD8500 Sled pour une solution intégrale, ou gardez le périphérique embarqué en poche et utilisez le lecteur RFD8500 en mode autonome.

Capture rapide d'étiquettes RFID dans divers environnements
Batterie haute performance pour un fonctionnement complet
Options de connectivité flexibles : Bluetooth ou mode batch
Options de déploiement flexibles
Facile à déployer : Fixez et retirez en quelques secondes avec les supports Quad Lock standard et les adaptateurs sur mesure
Solutions de charge de classe entreprise pour une gestion facile de l'alimentation
Capturez instantanément tout code-barres 1D/2D imprimé ou électronique
Basculez facilement entre la lecture RFID et la lecture de codes-barres"," Gamme: RFID/1D/2D reader
Modèle: Zebra RFD8500
Moteur RFID: Technologie radio propriétaire de Zebra
Vitesse de lecture optimale : Plus de 900 étiquettes/s
Alimentation: Batterie PowerPrecision+ Li-Ion, 4 410 mAh
Spécifications de résistance aux chutes: Résiste aux chutes répétées de 4 pi/1,20 m sur le béton (0 à 40°C)","Lecteur RFID RFD8500 Zebra.png", 21);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (55, "Lecteur UHF RFID ultra-robustes RFD9030 Zebra","Conçus pour offrir adaptabilité, connectivité sans fil et fiabilité dans les environnements les plus difficiles, les pistolets RFID UHF ultra-durcis RFD90 permettent une gestion simplifiée et une utilisabilité optimale. Accélérez vos workflows dans l’industrie, le transport et la logistique avec des taux de lecture de 1 300 vignettes par seconde.

Avec un taux de lecture fiable de 1 300 étiquettes par seconde, les lecteur RFD9030 permettent des comptages d'inventaire rapides et augmentent la précision du flux de travail. Le RFD9030 offre une portée de lecture standard de 6,7 mètres.

Les lecteurs RFID UHF RFD9030 ultra-robustes de Zebra sont conçus pour résister à une utilisation quotidienne dans une grande variété de conditions difficiles, y compris les environnements de fabrication, de transport et de logistique."," Gamme: Lecteur UHF RFID ultra-robustes
Modéle: RFD9030 Zebra
Systèmes d'exploitation et connectivité prise en charge: iOS, Android, Windows Wi-Fi 6, Bluetooth 5.3, NFC tap-to-pair
Moteur RFID: Technologie radio propriétaire de Zebra
Vitesse de lecture optimale : 1,300+ Etiquettes/s
Alimentation: Libération rapide, PowerPrecision+ Li-Ion 7 000 batterie mAh
Spécifications de résistance aux chutes: Chutes multiples de 6 pi/1,8 m sur du béton
Étanchéité IP: IP65","Lecteur_UHF_RFID_ultra-robustes_RFD9030_Zebra.png", 21);


INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (56, "Antenne RFID AN510 Zebra","Technocode Tunisie propose la gamme des antennes RFID Zebra AN510 . L’antenne AN510 offre la polyvalence et la performance requises pour répondre aux besoins divers de milieux et d’applications variés, parmi lesquels les espaces clientèle, les entrepôts et les environnements extérieurs. Cette antenne performante permet d’assurer une communication à haut débit et à haute capacité des données d’étiquettes RFID conformes à l’EPC. Ultra-résistant, Le modèle AN510 est adapté à une utilisation dans les zones commerciales extérieures, sur les portes de quai, sur les plafonds et sur les murs pour créer des zones de lecture optimales."," ","Antenne_RFID_AN510_Zebra.png", 22);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (57, "Silverline Classic II","Malgré sa petite taille, Silverline Blade II dispose d'une distance de lecture respectable de 10 mètres (33 pieds) sur le métal. Bien qu'optimisé sur le métal, Blade fonctionne également sur les récipients en plastique et liquides. L'adhésif de qualité industrielle a une adhérence initiale très élevée, ce qui signifie un temps de durcissement court. Cela fait de Silverline Blade II une solution optimale pour le suivi des actifs industriels et informatiques ainsi que des équipements de santé.","Dimensions: 100 mm L x 40 mm H x 1,3 mm d'épaisseur / 3,94 po L x 1,57 po H x 0,05 po d'épaisseur ","Silverline_Classic_II.png", 23);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (58, "Silverline Blade II","Silverline Blade II dispose d'une distance de lecture respectable de 10 mètres (33 pieds) sur le métal. Bien qu'optimisé sur le métal, Blade fonctionne également sur les récipients en plastique et liquides. L'adhésif de qualité industrielle a une adhérence initiale très élevée, ce qui signifie un temps de durcissement court. Cela fait de Silverline Blade II une solution optimale pour le suivi des actifs industriels et informatiques ainsi que des équipements de santé.","  ","Silverline_Blade_II.png", 23);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (59, "Silverline Slim II","Le facteur de forme mince combiné à d'excellentes performances est un choix pour les actifs sur lesquels la largeur d'étiquette appropriée est plus limitée, par exemple les applications impliquant des actifs industriels plus petits, des tuyaux et de l'électronique. Avec la conception d'antenne en instance de brevet, Silverline Slim II offre des performances bien équilibrées sur différents matériaux. L'adhésif est optimisé pour les surfaces métalliques et peintes.","  ","Silverline_Slim_II.png", 23);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (60, "kiosque interactif CC600 Zebra","Kiosque libre-service compact, abordable et optimisé par Android.
Enrichissez l’expérience d’achat de vos clients, avec un nouveau kiosque interactif pratique, rapide et convivial : le CC600 Customer Concierge. Conçu autour de la toute dernière version de la plateforme Android , le CC600 offre à vos clients une expérience d’achat naturelle et familière. Ce kiosque compact et pratique de 5 pouces s’installe facilement et vous permet de proposer le libre-service dans toutes les allées et à tous les rayons. Grâce au CC600, les clients peuvent s’enregistrer pour retirer une commande, trouver un produit ou un prix, rechercher des informations, appeler un collabora- teur, obtenir des offres personnalisées, effectuer un achat et bien plus encore.

Aspect familier de l’interface Android
Le CC600 affiche l’interface Android familière et très appréciéede vos clients pour le libre-service dans toutes les allées de votre magasin

Lecture des codes-barres dès la première tentative
Le CC600 offre la performance fiable et hors pair qui a fait de Zebra le leader mondial du secteur des équipements de lecture de codes-barres. La lecture se fait instantanément, que les codes-ba- rres soient imprimés ou affichés sur écran de téléphone mobile.

Assistance ultra-rapide, avec le micro et le haut-parleur intégrés
Avec le CC600, demander de l’aide est un jeu d’enfant. Au moyen de son micro et de son haut-parleur intégrés et de la messagerie instantanée vocale.Plateforme la plus puissante de sa catégorie

Doté d’un processeur ultra-puissant et d’un écran tactile multipoint
de haute définition, ce kiosque assure une expérience d’achat supérieure dans toutes les configurations en libre-service et la performance optimale des applications interactives multimédias les plus exigeantes."," Gamme: kiosque interactif
Modéle: Zebra CC600
Systéme d'exploitation: Android 11; Possibilité de mise à niveau jusqu’à Android 14
Reseaux et connectivité sans fil: 802.11 a/b/g/n/ac double bande Bluetooth 5.0 Gigabit Ethernet
Capture des donneés: Scanner 1D/2D Zebra SE2100
Afficheur: 5 pouces, PCAP multipoint ","kiosque_interactif_CC600_Zebra.png", 24);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (61, "kiosque interactif CC6000 Zebra","Transformer l’expérience d’achat, avec un libre-service d’exception
Le kiosque CC6000 Customer Concierge allie l’aspect familier d’une tablette grand public à la puissance d’une plateforme de classe professionnelle, pour une expérience d’achat véritablement unique. Dans un format mince et compact de 10 pouces, il s’utilise aus- si bien pour les achats en ligne qu’en magasin et présente toute l’autonomie et les fonctionnalités qu’attendent les utilisateurs. En quelques secondes, les clients peuvent s’enregistrer pour le retrait d’une commande, trouver un produit ou un prix, rechercher des informations, appeler un vendeur, s’entretenir par vidéo avec un expert qui répond à leurs questions, recevoir des offres personnali-sées, effectuer un achat et bien plus encore.

Aspect familier de l’interface Android
Si vos clients savent utiliser un téléphone mobile, ils sauront utiliser le CC6000. Le kiosque utilise tous les gestes habituels, du pince-ment de l’image au zoom et au balayage pour défilement.

Lecture des codes-barres dès la première tentative
Grâce à la technologie de lecture avancée de Zebra et de l’imagerie intelligente exclusive PRZM, vos clients lisent instantanément et de manière fiable tous les codes-barres 1D et 2D, quel que soit leur état.

Assistance immédiate, avec une technologie voix et vidéo hors pair
Avec le CC6000, demander de l’aide en magasin est un jeu d’enfant. Au moyen de son micro et de son haut-parleur intégrés et de la messagerie instantanée vocale

NFC pour couplage instantané
Grâce à la prise en charge de la connexion NFC, il suffit aux utilisa- teurs de toucher le kiosque CC6000 de leur téléphone mobile pour assurer le couplage

Plateforme unique pour toutes vos applications actuelles et futures
Le processeur ultra-puissant et l’écran tactile multipoint de haute définition permettent la performance supérieure des applications interactives riches en contenus multimédias.","Gamme: kiosque interactif
Modéle: Zebra CC6000
Systéme d'exploitation: Android 11; Possibilité de mise à niveau jusqu’à Android 14
Reseaux et connectivité sans fil: 802.11 a/b/g/n/ac double bande Bluetooth 5.0 Gigabit Ethernet
Capture des donneés: Scanner 1D/2D Zebra SE4710
Afficheur: Écran tactile multipoint PCAP de 10,1 pouces ","kiosque_interactif_CC6000_Zebra.png", 25);


INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (62, "Ruban transfert thermique ITW Cire B220","Le ruban thermique de cire ITW B220 est un ruban d'impression de codes à barres polyvalent qui donne d'excellents résultats sur une large gamme de supports. Solution économique pour la plupart des applications à usage général, le ruban de cire B220 contient des encres de haute qualité, fonctionne à faible énergie d'impression, prolonge la durée de vie de la tête d'impression de votre imprimante et produit des codes à barres et des images de haute qualité, nets et clairs.

Le ruban thermique B220 fabriqué avec de la cire est le type le plus courant de ruban de transfert thermique. En raison de leur durabilité, les rubans thermiques entièrement en cire sont généralement utilisés sur du papier couché et non couché. C'est le moins cher et c'est le choix optimal pour une utilisation à court terme.

Le ruban thermique B220 en cire peut répondre à vos besoins d'impression par transfert thermique lorsqu'une durabilité modérée est requise. Étant donné que ces rubans nécessitent la plus faible énergie d'impression (température de fusion plus basse), l'encre se transfère facilement sur l'étiquette.

 Cependant, lorsqu'une application nécessite une durabilité et une résistance accrues aux produits chimiques et aux facteurs environnementaux, nous recommandons principalement des rubans de wax/résine ou de résine"," ","Ruban_transfert_thermique_ITW_Cire_B220.png", 26);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (63, "Ruban Transfert Thermique ITW Cire/Résine B120","Le ruabn thermique cire/resine B120 est un ruban encreur premium polyvalent spécialement formulée pour imprimer sur la plus large gamme de matériaux dans la plus large gamme d'applications. La capacité d'imprimer sur une grande variété de supports à des vitesses élevées et des paramètres optimaux combinés à une résistance à l'eau, aux bavures, aux agents courants et à certains solvants font de ce ruban un match pour n'importe quel ruban de sa catégorie."," ","Ruban_Transfert_Thermique_ITW_CireRésine_B120.png", 26);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (64, "Ruban Transfer Thermique ITW Résine B325","Le ruban thermique résine B325 est un ruban de résine polyvalent et flexible conçu pour fonctionner avec des imprimantes à technologie à tête plate dans des conditions industrielles exigeantes. L'adaptabilité étendue des étiquettes et les capacités de vitesse d'impression élevée en font l'un des rubans en résine les plus polyvalents du marché. Les caractéristiques de performance durables du B325 incluent sa capacité à résister à une exposition répétée à l'abrasion et constituent le choix idéal pour les applications exigeantes dans un large éventail de secteurs du marché."," ","Ruban_Transfer_Thermique_ITW_Résine_B325.png", 26);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (65, "Étiquettes double silicone","Ces étiquettes double silicone également appelée étiquettes double-enduction, comprennent une double enduction d’adhésif : l’étiquette imprimée adhère sur un 1ier papier siliconé qui est lui-même collé en superposition sur un 2e papier siliconé. La 1ère étiquette reste sur le substrat alors que la 2e se décolle."," ","Étiquettes_double_silicone.png", 27);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (82, "Étiquettes Autocollantes Fluo","Les étiquettes Autocollantes Fluo ajoutent des couleurs vibrante et accrocheuse votre message.En outre, les étiquettes fluo ont un adhésif permanent pour une utilisation normale. Vous pouvez utiliser les étiquettes Fluos pour renforcer vos promotions, augmenter la lisibilité d'un message...

Nos étiquettes adhesives fluorescentes sont conditionnées en bobines de différents mandrins ou en feuilles sur demande. Nous pouvons réaliser vos étiquettes Fluos sous différentes formes (rectangles, ronds, formes asymétriques, silhouettes, ovales, parchemins, filets de découpe, etc.)"," ","Étiquettes_Autocollantes_Fluo.png", 27);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (66, "Étiquettes Autocollantes PP (Polypropylène)","Votre entreprise a-t-elle besoin d'étiquettes capables de résister à des environnements difficiles et à des applications difficiles ? Si la réponse à cette question est oui, alors les étiquettes en polypropylène (étiquettes en PP) pourraient convenir parfaitement. Les étiquettes en polypropylène ou les étiquettes en PP sont populaires pour les entreprises qui ont besoin une étiquette plus durable car elles ont la meilleure combinaison de valeur et de résistance par rapport aux autres étiquettes en film.

De plus, les étiquettes en polypropylène offrent une résistance et une durabilité qu'une étiquette en papier commune ne peut pas. En termes simples, pour certaines applications, une étiquette en papier n'a pas la durabilité, longévité ou résistance requises pour répondre aux exigences du travail.

Valeur - Si vous avez besoin d'une étiquette durable, les étiquettes PP / étiquettes en polypropylène offrent la meilleure qualité .
Durabilité - Les étiquettes en polypropylène sont à la fois déchirables, résistant aux intempéries et aux rayures. Ils offrent également une résistance aux produits chimiques et à l'huile.
Finitions mates et transparentes - Les étiquettes en PP peuvent être utilisées à la fois pour les codes à barres."," ","Étiquettes_Autocollantes_PP_Polypropylène.png", 27);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (67, "Berceau de chargement à Ethernet unique (P1050667-023)","charger une seule imprimante ZQ630 ou QLN420 sur une surface de table / comptoir. Ethernet permet aux imprimantes d'être gérées à distance. Navires d'alimentation avec le berceau de chargement Ethernet unique."," ","Berceau_de_chargement_à_Ethernet_unique_P1050667-023.png", 28);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (68, "powerprecision+ 3250 mAh spare battery zq600 zq500","Batterie d'imprimante standard pour une utilisation avec la série ZQ610 / ZQ620, QLN220 / QLN320, série ZQ500 qui peut être interrogée et gérée pour surveiller la santé de la batterie et recommander remplacement.

CAPACITÉ DE LA BATTERIE: 3250 mah

(BTRY-MPP-34MA1-01)"," ","powerprecision+_3250_mAh_spare_battery_zq600_zq500-023.png", 28);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (69, "Chargeur de batterie 1 emplacement zq600 zq500","Pour Imprimantes Mobiles ZQ600 et ZQ500
Docks et charge une seule batterie intelligente ou PowerPrecision +Batterie d'imprimante Li-Ion. Alimentation intégrée. Navires avec la ligne corde. Sélectionnez le numéro de pièce avec le cordon de ligne approprié pour votre région.
REMARQUE: Fonctionne avec des packs de batterie standard et étendu.
Part number (SAC-MPP-1BCHGEU1-01)"," ","Chargeur_de_batterie_1_emplacement_zq600_zq500.png", 28);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (70, "Batterie de rechange avec PowerPrecision + 3300 mA pour RS6000","Batterie de rechange avec PowerPrecision + 3300 mAh"," ","Batterie_de_rechange_avec_PowerPrecision_+_3300_mA_pour_RS6000.png", 29);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (71, "chargement à un seul emplacement uniquement pour RS6000","chargement à un seul emplacement uniquement"," ","chargement_à_un_seul_emplacement_uniquement_pour_RS6000.png",29);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (72, "Batterie de rechange de capacité étendue avec PowerPecision (4900 mAh)","Batterie de rechange MC2200 de capacité étendue 4900 mAh
Part number : (FRY-MC2X-49MA-01)"," ","Batterie_de_rechange_de_capacité_étendue_avec_PowerPecision_(4900 mAh).png",29);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (73, "5 Emplacements Ethernet / recharge TC26","Permet des vitesses de réseau jusqu'à 1 Go
Chargera jusqu'à cinq unités TC21/TC26.
Chargera la batterie de capacité standard de 0 à 90 % en moins de 3 heures.
Charge la batterie à capacité étendue de 0 à 90 % en moins de 4 heures.
Compatible avec les unités TC21/TC26 avec dragonne ou poignée pistolet attachée."," ","Emplacements_Ethernet.png",30);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (74, "Poignée de pistolet TC26","L'accessoire de poignée vous offre la possibilité d'utiliser le PDA TC26 dans un forme de pistolet, idéal pour les situations de numérisation intensive
Se fixe facilement au Terminaux Mobiles TC21/TC26
Facilement retiré pour accéder à la batterie
Ne bloque pas la vue de la caméra arrière"," ","Poignée_de_pistolet_TC26.png",30);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (75, "Socle de charge uniquement à 4 emplacements MC9300","L'accessoire de poignée vous offre la possibilité d'utiliser le PDA TC26 dans un forme de pistolet, idéal pour les situations de numérisation intensive
Se fixe facilement au Terminaux Mobiles TC21/TC26
Facilement retiré pour accéder à la batterie
Ne bloque pas la vue de la caméra arrière"," ","Socle_de_charge_uniquement_à_4_emplacements_MC9300.png",30);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (76, "ZD410","Ce produit Zebra n'est plus fabriqué.

Date d'arrêt de l'imprimante : 10 octobre 2022

Modèle de remplacement : ZD411"," ","ZD410.png",31);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (77, "Z4M","Ce produit Zebra n'est plus fabriqué.

Date de fin de production de l'imprimante : 30 LMars 2004

Modèle de remplacement : ZT421"," ","Z4M.png",31);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (78, "ZM400","Ce produit Zebra n'est plus fabriqué.

Date de fin de production de l'imprimante : 30 septembre 2014

Modèle de remplacement : ZT411"," ","ZM400.png",31);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (79, "TC20","Ce produit Zebra est abandonné.

Date d’abandon du produit : 10, 2020 décembre

Modèle de remplacement: TC21"," ","TC20.png",32);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (80, "TC25","Ce produit Zebra est abandonné.

Date d’abandon du produit : 10, 2020 décembre

Modèle de remplacement: TC26"," ","TC25.png",32);

INSERT INTO produit (id, title, description, caracteristiques,image, idcat) 
VALUES (81, "TC8000","Ce produit Zebra est abandonné.

Date d’abandon du produit : 10, 2021

Modèle de remplacement: TC8300"," ","TC8000.png",32);



## Project setup
```
npm install
```

### Run
```
node server.js
```
