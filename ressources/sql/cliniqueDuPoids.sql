CREATE DATABASE clinique_du_poids;

CREATE TABLE patient(
    id SERIAL PRIMARY KEY,
    validite_inscription DATE NOT NULL
);

CREATE TABLE pesee(
    id_patient INTEGER NOT NULL,
    date_pesee DATE NOT NULL,
    valeur DECIMAL(8, 2) NOT NULL
);
ALTER TABLE
    pesee ADD PRIMARY KEY(id_patient, date_pesee);
	
CREATE TABLE repas(
    id_patient INTEGER NOT NULL,
    id_ingredient INTEGER NOT NULL,
    date_prise DATE NOT NULL,
    quantite INTEGER NOT NULL
);

ALTER TABLE
    repas ADD PRIMARY KEY(id_patient,id_ingredient,date_prise);

	
CREATE TABLE ingredient(
    id SERIAL PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    calorie INTEGER NOT NULL,
    proteine INTEGER NOT NULL,
    lipide INTEGER NOT NULL,
    glucide INTEGER NOT NULL,
    commentaire VARCHAR(255) NOT NULL
);

CREATE TABLE objectif(
    id_patient INTEGER NOT NULL,
    titre VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    debut DATE NOT NULL,
    fin DATE NOT NULL
);

ALTER TABLE
    objectif ADD PRIMARY KEY(id_patient, titre);

	
CREATE TABLE info_personnelle(
    id_patient INTEGER NOT NULL,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL,
    naissance DATE NOT NULL,
    telephone VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);
ALTER TABLE
    info_personnelle ADD PRIMARY KEY(id_patient);
	
CREATE TABLE praticien(
    id SERIAL PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL
);

CREATE TABLE praticien_patient(
    id_patient INTEGER NOT NULL,
    id_praticien INTEGER NOT NULL
);
ALTER TABLE
    praticien_patient ADD PRIMARY KEY(id_patient, id_praticien);
    
ALTER TABLE
    praticien_patient ADD CONSTRAINT praticien_patient_praticien_fk FOREIGN KEY(id_praticien) REFERENCES praticien(id);
ALTER TABLE
    praticien_patient ADD CONSTRAINT praticien_patient_patient_fk FOREIGN KEY(id_patient) REFERENCES patient(id);
ALTER TABLE
    repas ADD CONSTRAINT patient_id_foreign FOREIGN KEY(id_patient) REFERENCES patient(id);
ALTER TABLE
    objectif ADD CONSTRAINT patient_id_foreign FOREIGN KEY(id_patient) REFERENCES patient(id);
ALTER TABLE
    repas ADD CONSTRAINT ingredient_id_foreign FOREIGN KEY(id_ingredient) REFERENCES ingredient(id);
ALTER TABLE
    info_personnelle ADD CONSTRAINT patient_id_foreign FOREIGN KEY(id_patient) REFERENCES patient(id);
ALTER TABLE
    pesee ADD CONSTRAINT patient_id_foreign FOREIGN KEY(id_patient) REFERENCES patient(id);

-- Queries de l'examen pour test
-- INSERT INTO patient VALUES (1, '09-09-2024');
-- INSERT INTO patient (id, validite_inscription) VALUES  (2, '09-09-2024');
-- INSERT INTO patient (id, validite_inscription) VALUES  (id = 2, validite_inscription = '09-09-2024');
-- INSERT INTO patient (id) VALUES  (3);
-- SELECT * FROM objectif WHERE id_patient = 5 AND id_patient = 6;
-- SELECT * FROM patient
-- LEFT JOIN info_personnelle
-- 	ON id = id_patient;

-- SELECT * from patient
-- LEFT JOIN info_personnelle
-- ON patient.id = info_personnelle.id_patient
-- WHERE validite_inscription < CURRENT_DATE 

-- SELECT * from patient
-- WHERE validite_inscription > CURRENT_DATE 
	
-- SELECT 
	
-- SELECT info_personnelle.nom, 
-- 	info_personnelle.prenom, 
-- 	validite_inscription, 
-- 	praticien.nom, 
-- 	praticien.prenom 
-- FROM praticien_patient
-- JOIN patient 
-- 	ON patient.id = praticien_patient.id_patient
-- JOIN praticien
-- 	ON praticien.id = praticien_patient.id_praticien
-- JOIN info_personnelle
-- 	ON patient.id = info_personnelle.id_patient;