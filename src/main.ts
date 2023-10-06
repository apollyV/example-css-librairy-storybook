import './style.css'
import './stories/Button.ts';
import './stories/button.scss';
import './stories/Header.ts';
import './stories/header.scss'; 

document.querySelector<HTMLDivElement>('#app')!.innerHTML = 

`
  <div>
    <h1>ASTREA Design System</h1>
    <p>Pour importer les styles, ajoutez le fichier assets/index-_.css</p>
    <p>Où _ correspond une chaîne de 8 caractères (pour éviter aux utilisateurs de devoir vider le cache de leur navigateur à chaque mise à jour, la valeur change à chaque nouvelle version)</p>
  </div>
`