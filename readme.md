## Welcome on the To Do List work🛍 
*git clone* le projet et fait un tour du propriétaire...
Dans *index.html*, on retrouve la base de notre projet avec un formulaire d'ajout et une première tache (static). Le design est fait (cf *style.css*) mais n'hésites pas à le personnaliser à ta guise.
Un fichier *script.js* est mis en place. C'est là qu'une grande partie de ton travail va s'effectuer... Il y a actuellement la donnée pour une seule et unique tâche (Que j'espère que tu vas compléter)

## 1ère partie: générer les cartes à partir de la donnée
- 1/ Dans *script.js*, en scope global, en haut de ton fichier, créer une constante pour mémoriser l'élément `taskElement` où l'on injectera nos tâches.
- 2/ Créer ensuite une fonction `generateTask()` avec un `console.log("ok")`. Ajouter son appel en dessous. Cette fonction va prendre une tâche en paramètre.
- 3/ Dans cette fonction, mémoriser dans une constante `tr` un nouvel élément `<tr>` via`createElement()`
- 4/ Mémoriser le template `<th>...</td>` présent dans le HTML, dans une constante (`task`) via une `template string`.
- 5/ Ajouter la valeur de ce template à ta variable `tr` en innerHTML.
- 6/ `appendChild()` `tr` à ta variable globale `taskElement`;
- --- A ce stade, une nouvelle tache (identique) doit s'afficher dans ton navigateur.. Alors retire l'appel à la fonction `generateTask()`
- 7/ Créer une fonction `render()` qui va boucler sur notre tableau de tâches et appeller la fonction `generateTask()` pour chacune d'elles. Passe la tâche concernée en argument.
- 8/ Dans la fonction `generateTask(task)`, modifie ton template pour qu'il accepte les valeurs particulières de la tâches.
- 9/ Attention, avant ta boucle, penser à ré-initialiser ton HTML en passant le `ìnnerHTML` de ta variable globale `task` à une valeure vide ("");
- 10/ N'oublie pas ton appel à la fonction `render()` en bas de ton fichier.
- 11/ Supprime maintenant la tache écrite dans le HTML directement pour ne garder que les tâches en mode dynamique.

## 2ème partie: ajouter une nouvelle cartes
- 1/ Créer un nouvelle fonction `addTask()` et ajouter la au `<button>` (Via onclick ou addEventListeners)
- 2/ Dans cette fonction, commencer par mémoriser l'ensemble des champs du formulaire dans différentes variables
- 3/ Gestion de l'id de notre tâche (On doit s'assurer que son `id` est unique). Créer une variable (`let`) globale avec une valeur 1;
- 3/ Puis, on va ajouter une tâche complète à notre tableau de tâches. La valeur de `valid` est `true` par défaut. Incrémenter la variable `id`, puis assigner cette nouvelle valeur à notre objet `task`
- 4/ Appeller ensuite la fonction `render()` pour mettre l'affichage à jour.

## 3ème partie: gérer ses différentes taches
- 1/ Suppression d'une tâches
    - Créer une fonction `deleteTask()` et implement son appel via `onclick` ou `addEventListener` sur l'image de la poubelle dans ton template (dans la fonction `generateTask()`)
    - Cette fonction reçoit en parametre l'`id` de la tâche (Pense à le mettre dynamiquement en arguments au moment de l'appel)
    - Pour supprimer la tâche de notre tableau (variable globale), on va filtrer sur ce tableau et ne garder que les élèments dont l'`id` est différent de celui reçu en parametre. On mémorisera directement le résultat dans notre variable globale `tasks`
    - Finir en appelant notre fonction `render()`
