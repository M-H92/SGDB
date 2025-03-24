
-- INSERT  INTO nageur (id, nom, prenom) VALUES (1, 'Bob', 'Smith')
-- SELECT * FROM nageur;

CREATE TABLE variables_partagee (
	nom varchar(32) PRIMARY KEY,
	valeur int 
)

INSERT INTO variables_partagee (nom, valeur) VALUES ('id_nageur', 1);


get_next_value('id_nageur')

SELECT get_next_value('id_nageur');

SELECT * FROM variables_partagee;

INSERT  INTO nageur (id, nom, prenom) VALUES ((SELECT get_next_value('id_nageur')), 'Bob', 'Smith')

CREATE OR REPLACE FUNCTION get_next_value(arg_nom varchar) 
RETURNS int AS
$$                
	DECLARE 
		foo INTEGER := 0;
    BEGIN
		foo := (SELECT valeur FROM variables_partagee as v WHERE v.nom = arg_nom);
		foo := foo + 1;
		UPDATE variables_partagee AS v SET  valeur= foo WHERE v.nom = arg_nom;
		RETURN foo;
    END
$$
LANGUAGE plpgsql;

SELECT get_next_value('id_nageur')


INSERT  INTO nageur (id, nom, prenom) VALUES ((SELECT get_next_value('id_nageur')), 'Sam', 'Smith')
SELECT * FROM nageur;


