# Mon application

Une application web, construite avec KAEIDOS. Elle part d’un modèle relu : Vite, React et
TypeScript.

Pour la changer, décrivez ce que vous voulez dans KAEIDOS. Un agent fait le changement, KAEIDOS
le vérifie, puis vous l’essayez avant de l’accepter.

## Pour un développeur

Les commandes, depuis la racine du dépôt :

- `npm ci` installe les dépendances ;
- `npm run dev` lance l’application, sur http://localhost:5173 ;
- `npm test` lance les tests, `npm run lint` le lint, `npm run build` la construction.

Le fichier `.kaeidos/project.yaml` dit à KAEIDOS comment construire, vérifier et lancer
l’application. Le dossier `.devcontainer/` décrit l’environnement de développement.
