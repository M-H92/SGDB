# Gestionnaire de factures

## Table de contenu

### Explication du projet

### Informations générales

### Critères de réussite

0. rapport diagramme de base de données
1. rapport dénormalisation
2. role sa
3. script create_table
4. script add_constraints
5. procedure clean_database
6. procedure creation_client
7. procedure upsert_adresse_facturation
8. procedure ajout_taux_tva
9. procedure creation_article
10. procedure ajout_prix_article
11. procedure creation_facture
12. procedure ajout_detail_facture
13. fonction pagination_facture
<!-- 3. script create_database -->

### Critères de surpassement

0. rapport présentation élément au choix
1. rapport ajout personnel
2. view log_modification_facture
3. procedure suppression_detail_facture
4. procedure paiement_facture
5. decompte_mauvais_payeur
6. restauration_statut_bon_payeur
7. view clients_endettes
8. view rappel_facture
9. role caisse
10. role gestionnaire_magasin

### Remise

# Explication du projet

Le projet demande une base de données simulant une gestion de facturation et de gestion de client ainsi qu'un rapport sur votre projet.  
On attend de votre base de données qu'il soit possible d'encoder les éléments nécessaires à la création de factures et au calcul de leurs totaux.  
De plus, des comptes clients, articles, prix et taux de TVA doivent être gérés.  
Ci-dessous, des explications sur les sections suivantes de ce document :

## Informations générales

Reprends des informations qui devront êtres respectées pour que votre travail soit validé. Par exemple, les informations demandées pour une facture, ou des explications sur les calculs demandés.

### Critères de réussite

Reprend tout ce qui est attendnu pour valider le projet avec au moins une note de 60%.  
Cette section doit impérativement être réussie pour pouvoir valider les critères de surpassement.
En ce qui concerne les procédures stockées, fonctions, vues...  
La signature vous est présentée ainsi qu'une explication sur son but.  
Il est important de respecter strictement :

- le nom de la fonction / procédure...
- l'ordre et le nombre des arguments
- le type ainsi que les valeurs par défaut proposées
- le type de retour ainsi que le nom des éléments retournés cas échéant (dans le cas du retour d'une table, les différentes colonnes doivent avoir le nom demandé)

Plus particulièrement, en ce qui concerne les vues, la liste des colonnes demandées est à respecter scrupuleusement en terme de type et nom des colonnes

### Critères de surpassement

Cette section est similaire à la section critère de réussite si ce n'est qu'elle ne sera prise en considération que si les critères de réussite sont réussis.

# Informations générales

Chaque client dispose au moins d'un nom, d'un prénom, d'un numéro de compte client et d'une date de naissance  
Le numéro de compte client est enregistré sur 9 positions et commence au numéro 400 000 000 exclu (le premier compte utilisable pour créer un client sera donc le compte 400 000 001).

Les comptes clients ne peuvent surpasser le numéro 409 999 999.

Les clients ne seront pas supprimés pendant la correction de l'examen.

Les comptes clients sont attribués dans l'ordre avec un incrément de 1 pour chaque nouveau compte (400 000 001, 400 000 002, 400 000 003).

Un client peut disposer d'une ou plusieurs adresses de facturation.

Il sera impossible de créer une facture pour un client qui ne dispose pas d'adresse de livraison.

Une fois créée, une facture n'est jamais supprimée et son client n'est jamais modifiée.

Une fois une facture payée même partiellement, les lignes de détail de la facture ne peuvent plus être modifiées.

Une fois la date d'échéance de paiement de la facture dépassée, les lignes de détail de la facture ne peuvent plus être modifiées.

La date d'échéance correspond à la date de création de la facture +30 jours.

# Critères de réussite

Dans cette section sont détaillés les éléments nécessaires pour la réussite de l'examen.  
Si ceux-ci sont fonctionnels et propres, l'examen est réussi.

## Rapport

Un rapport écrit est demandé.  
Celui-ci doit au moins contenir deux éléments :

- diagramme de base de données
- explication dénormalisation

### diagramme

Le diagramme contiendra les différentes tables ainsi que les champs qui les composent.  
Les différents champs reprendront le nom, le type et une indication sur les contraintes de clé primaire, clé secondaire, et d'unicité.  
Pour chacune de ces contraintes, ajouter simplement le ou les indications "PK", "FK" et "U" si nécessaire.

Le diagramme présentera aussi les liens entre les différentes tables représentés au format "crow's foot"

### dénormalisation

Cette section contiendra une explication brève justifiant le non respect d'une des règles de normalisation vue en classe dans votre base de données.  
Cas échéant, si votre base de données est complètement normalisée, cette section contiendra une analyse a posteriori sur cette approche (Par exemple : "Oui, j'ai bien fait de respecter les règles de normalisation parce que..." Ou encore : "Avec du recul, j'aurais éventuellement gagné du temps / simplifié mes requêtes, si j'avais ..." )

## Rôle

Pour la partie nécessaire, seul un rôle de super admin est demandé.  
Il s'agit du rôle par défaut lors de la création de votre base de données et peut manipuler celle-ci comme bon lui semble.

## scripts

Les scripts nécessaires pour la création de la base de données sont requis.  
Ceux-ci doivent être nommés en commençant par un id numérique sur deux position représentant l'ordre d'exécution des scripts.  
En plus des scripts permettant de créer les fonctions, procédures stockées, vues... Il est nécessaire de fournir au moins les scripts suivant :

- 01_create_database.sql
- 02_create_tables.sql
- 03_add_constraints.sql

Le reste des scrpts continuera cette séquence et sera exécutée strictement dans l'ordre croissant de l'id numérique préfixant le nom du fichier.  
Ainsi, vous aurez plus que certainement les scripts suivants :

- 04_clean_database.sql
- 05_procedure_creation_client.sql

Par ailleurs, vous échoueriez votre examen si votre dossier contenait les scripts suivants :

- 01_add_constraints.sql
- 02_create_table.sql
- 03_create_database.sql

Ceci car l'exécution du premier script résulterait en une erreur et que l'évaluation s'arrêterait là.

## Procédures stockées

<!-- ### clean_database

#### Signature

clean_database()

#### Explication

Appelée pour réinitialiser les données de la base de données.
Après l'appel de cette procédure stockée, les tables doivent être vide et, si des séquences sont utilisées, elles doivent être réinitialisées.
Les tests réalisés sur la base de données utiliseront parfois des données suivant un format spécifique et attendront des résultats suivant des formats spécifiques.   -->

### creation_client

#### Signature

creation_client(nom VARCHAR(64), prenom VARCHAR(64), date_naissance DATE, assujetti_tva BOOLEAN)

#### Explication

Permet de créer un client.  
Le bool assujetti_tva permettra d'appliquer ou non la TVA lors du calcul des totaux des documents

### upsert_adresse_facturation

#### Signature

upsert_adresse_facturation(id INTEGER, numero_compte_client INTEGER, adresse JSON)

Format du json :

```json
{
    ville : VARCHAR(64) | null,
    rue : VARCHAR(128) | null,
    numero_adresse : VARCHAR(64) | null,
    complement : VARCHAR(64) | null,
    code_postal : VARCHAR(16) | null
}
```

Pour ce cas spécifique, les champs seront soit présent avec une valeur (qui pourra être une string vide)  
Soit ne pas être présents du tout dans le json.  
Par exemple, la procédure stockée doit pouvoir gérer un json de ce format

```json
{
    ville : VARCHAR(64),
}
```

#### Explication

L'upsert combine l'update et l'insert.
Si l'adresse n'existe pas, elle est créée.
Si elle existe déjà, elle est modifiée.
Les valeurs du json passé en argument correspondent aux valeurs attendues pour les adresses.
Néanmoins, aucun de ces champs ne doit être nullable dans l'adresse. On favorisera la valeur par défaut du type.

Dans le cas de la création, utiliser les valeurs du json ou la valeur par défaut du type.
Dans le cas de la mise à jour, utiliser les valeurs du json ou la valeur déjà encodée.

### ajout_taux_tva

#### Signature

ajout_taux_tva(categorie_tva INTEGER, taux DECIMAL(4,2), date_debut DATE)

#### Explication

Le taux de TVA sera utilisé par un article pour récupérer le taux correspondant à la date de création de la facture.
Le taux de catégorie 0 pourra avoir une valeur différente en 2023, 2024 et 2025.
Il faudra faire attention à bien récupérer le bon lors du calcul des totaux.
Un article ne disposant pas de taux de tva valide ne pourra pas être utilisé dans une facture (valide dans le sens "existe pour la date de création de la facture")

### creation_article

#### Signature

creation_article(nom VARCHAR(64), categorie_tva INTEGER = 0, description VARCHAR(256) = '')

#### Explication

On souhaite pouvoir référencer un article par son code article.
Le code article sera composé des 4 premières lettres du nom de l'article suivi d'une portion numérique sur 4 caractères permettant d'éviter les doublons.
Par exemple, l'article "Orval" aura le code ORVA0001.
Deux articles "Pain au chocolat" et "Pain suédois" auront les codes PAIN0001 et PAIN0002.
Le code est strictement en majuscules et, dans le cas des articles qui n'auraient pas 4 caractères dans leur nom, le caractère "X" sera ajouté autant de fois que nécessaire pour compléter la première partie du code.
En ce qui concerne les espaces, ils sont remplacés par des "X" pour former le code.
Trois "vin rouges" auront donc les codes VINX0001 VINX0002 VINX0003
L'utilisation des valeurs par défaut pour l'argument categorie_tva doit permettre d'utiliser le taux de TVA "par défaut" correspondant au taux de catégorie 0.

### ajout_prix_article

#### Signature

ajout_prix_article(code_article VARCHAR(16), prix_unitaire DECIMAL(12,2), date_debut DATE)

#### Explication

Le prix d'un article peut varier dans le temps
On utilisera la date de début pour discriminer le prix correcte lors du calcul des totaux (comparaison avec la date de création de la facture)
Un article ne disposant pas de prix valide ne pourra pas être utilisé dans une facture

### creation_facture

#### Signature

creation_facture(numero_facture INTEGER, numero_compte_client INTEGER, date_creation DATE, id_adresse INTEGER = NULL)

#### Explication

Crée une facture pour le client passé en argument.
La facture pouvant venir d'un programme annexe, on fourni le numéro de facture plutôt que de le générer.
Une facture doit disposer d'une adresse de facturation pour être créée.
Dans le cas d'un valeur nulle pour le paramètre id_adresse, on récupèrera la première (triées par ordre croissant des id) adresse du client.

### ajout_detail_facture

#### Signature

ajout_detail_facture(numero_facture INTEGER, code_article VARCHAR(16), quantite INTEGER )

#### Explication

Ajoute une ligne à une facture existante.

On ne peut pas ajouter une article dans une facture si l'article n'a pas de taux de tva valide.

On ne peut pas ajouter une article dans une facture si l'article n'a pas de prix unitaire valide.

La quantité fournie ne peut pas être négative.

## Fonctions

### pagination_facture

#### Signature

```sql
pagination_facture(page : INTEGER, nombre_elements : INTEGER, tri = 'creation', ascending = false)
RETURNS TABLE (
    numero_facture INTEGER,
    compte_client INTEGER,
    creation DATE,
    echeance DATE,
    payement DATE | NULL,
    adresse VARCHAR,
    deja_paye DECIMAL(12,2),
    total_htva DECIMAL(12,2),
    total_ttc DECIMAL(12,2)
);
```

#### Explication

On considère la première page comme la page 1  
Retourne les factures, clients liés, dates de création, d'échéance et de payement, adresse de facturation concaténée et totaux.  
Pour l'argument "tri", on pourra utiliser les valeurs suivantes :

- numero_facture,
- compte_client,
- creation,
- echeance,
- payement,
- adresse,
- deja_paye,
- total_htva,
- total_ttc

toute autre valeur devra résulter en une erreur.

En ce qui concerne le total htva et ttc, si le client est non assujeti à la TVA, on attend le même résultat pour les deux colonnes.

Pour l'adresse, on attend la concaténation des champs suivants :

- ville VARCHAR(64)
- rue VARCHAR(128)
- numero_adresse VARCHAR(64)
- complement VARCHAR(64)
- code_postal VARCHAR(16)

# Critères de surpassement

Dans cette section sont présentés les éléments de surpassement.  
Si les éléments de réussites ne sont pas fonctionnels, il sera difficile de justifier du fonctionnement correcte des éléments de surpassement.  
Attention à bien préparer les éléments de réussite de telle manière à ne pas avoir de mauvaise surprise lors de la réception de vos résultats.

## Rapport

### Présentation élément au choix

Choisissez la fonctions ou procédure stockée qui vous a semblé la plus intéressante parmis celles créées pour l'examen.  
Pour cet élément, décrivez son fonctionnement et justifiez votre choix.

### Ajout personnel

Présentez le fonctionnement d'un élément ajouté alors qu'il n'était pas demandé.  
Expliquer pourquoi l'avoir ajouté et comment il vous a permis de réaliser votre travail.

## Vues

### log_modification_facture

Retourne les éléments suivants :

```sql
utilisateur VARCHAR,
action_realisee VARCHAR,
date_log DATE,
numero_facture INTEGER
```

Les actions devant être présent dans cette table de log sont les suivantes :

- Création de facture
- Ajout de détail dans une facture
- Réalisation d'un paiement d'une facture
- Suppression d'un détail de facture
- Modification d'un détail de facture

## Procédures

### Suppression de détail d'une facture

#### Signature

suppression_detail_facture(numero_facture INTEGER, numero_ligne INTEGER)

#### Explication

Permet de supprimer un détail d'une facture sous réserve :

- que la facture n'ai pas été payée, même partiellement.
- que la facture ne soit pas en défaut de paiement (date d'échéance dépassée).

### procedure paiement_facture

#### Signature

paiement_facture(numero_facture INTEGER, montant DECIMAL(12,2))

#### Explication

Permet de payer, totalement ou partiellement, une facture.  
On ne peut pas payer plus que le total ttc de la facture.  
Une facture peut être payée en plusieurs fois sous réserve que la somme des paiements de la facture ne dépasse pas le total ttc de la facture.

### decompte_mauvais_payeur

#### Signature

decompte_mauvais_payeur()

#### Explication

Pour toute facture en défaut de paiement, on augmente de 1 un compteur "mauvais payeur" pour les clients correspondants.  
Une facture est en défaut de paiement si la date d'échéance de la facture est inférieure à la date du jour.  
Si un client dispose de plusieurs factures en défaut de paiement, son compteur augmente de 1 pour chaque facture.  
Un client dont le statut mauvais payeur dépasse 30 est considéré comme "mauvais payeur" et ne peut plus créer de facture.

### restauration_statut_bon_payeur

#### Signature

restauration_statut_bon_payeur(compte_client)

#### Explication

Remet le décompte "mauvais payeur" du client à 0

## Views

### clients_endettes

Retourne les éléments suivants :

```sql
compte_client INTEGER,
dette DECIMAL(20,2),
indice_dette INTEGER
```

Cette vue ne doit présenter que les clients dont la dette est supérieure à 30.

La dette correspond à la somme des totaux ttc des factures du client auxquelles est soustrait la somme des paiements de facture du client.

L'indice_dette représente l'indice mauvais payeur

### view rappel_facture

Retourne les éléments suivants :

```sql
compte_client INTEGER,
adresse VARCHAR,
corps VARCHAR
```

Pour toutes factures impayées, retourne le compte client, l'adresse utilisée pour la facture et un corps de texte à envoyer par courrier.

L'adresse sera sous la forme suivante :
"Nom prénom rue numéro complément code postal ville".
Ne pas gérer les retour à la ligne.

Le corps sera sous le format suivant :
"Madame, Monsieur, il semblerait que votre facture "numero facture" du "date création facture" dont l'échéance a été définie au "date d'échéance facture" soit impayée à ce jour."

### role caisse

Peut créer des factures et ajouter ou supprimer des lignes de détail aux factures via les procédures stockées correspondantes.  
Peut accéder aux "non-log" en lecture seule uniquement.

### Remise

Le projet est à remettre via teams par message privé sous la forme d'un fichier compressé qui contiendra tout les scripts .sql nécessaire pour créer et faire fonctionner votre base de données ainsi que votre rapport au format pdf.

Le fichier de remise sera nommé nom_prenom_db2.

Les noms des fichiers de script seront précédé d'un numéro sur 2 caractères donnant l'ordre d'exécution des scripts.

01_create_database, 02_create_table, 03\_ ...
