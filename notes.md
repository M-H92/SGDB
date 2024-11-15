### returning clause

Permet de spécifier le retour d'une query effectuée  
Par exemple, avec INSERT, récupérer la row inserée

```sql
INSERT INTO customers (first_name)
VALUES ('JON') RETURNING * -- * pour retourner toutes les colonnes. Comme pour un select
-- valeur de retour attendue => Toutes les rows insérées avec toutes leurs colonnes (même les cols pas présentes dans l'insert)
```

Utile par exemple pour récupérer l'id auto généré après un insert

peut être utilisé avec d'autres opérations comme UPDATE

petits comportements spécifiques

- Insert : retourne la donnée une fois insérée
- Update : retourne la donnée une fois modifiée
- Delete : retourne la donnée avant modification
- Merge : voir ce à quoi correspond un merge
- Trigger : la donnée récupérée est modifiée par le trigger. Voir les effets de bord
