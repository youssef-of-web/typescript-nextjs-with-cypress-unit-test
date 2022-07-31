# Coding 4 Tomorrow React Interview

## Instructions
1. Lister les films dans des cartes côte à côte (responsive) et afficher :
    - l'image de l'affiche
    - le titre en gras
    - la catégorie
  
2. Ajouter un bouton dans les cartes permettant de supprimer celles-ci

3. Ajouter un système de like / dislike
    - Afficher un bouton toggle like / dislike
    - Afficher le nombre de like / dislike

4. Ajouter un filtre **multi-select** par catégorie
    - Les catégories doivent être récupérées dynamiquement
    - Si tous les films d'une catégorie sont supprimés, celle-ci ne doit plus apparaître

5. Ajouter un système de pagination
    - Afficher 6 films par page
    - Boutons précédent/suivant

6. Ajouter un champ de recherche par titre de film contraint par la/les catégorie(s) sélectionnée(s)

7. Ajouter des tests unitaires et tester :
    - La fonction de filtrage
    - La fonction de recherche
    - Le composant de carte du film

### Conditions
- Utiliser NextJS
- Utiliser les hooks React
- Utiliser les contexts
- Utiliser toutes les librairies de votre choix afin de mettre en place ces consignes
- Utiliser Tailwind pour le design

**L'utilisation de TypeScript est un plus.**

### Important
/!\ La suppression du comportement asynchrone dans `movies.js` entraînera une annulation du test.
