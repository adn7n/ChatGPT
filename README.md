# WHOOP — Beyond Performance

**Comprendre mon corps. Repousser mes limites intelligemment.**

Présentation personnelle en français, indépendante de WHOOP. React, TypeScript, Vite, GSAP ScrollTrigger et CSS responsive. Police libre Inter fournie localement sous licence OFL.

## Démarrage

Versions utilisées : Node.js 24, npm 11.

```sh
cd /workspace/ChatGPT
npm ci --no-audit --no-fund
npm run dev -- --port 5173
```

```sh
npm run build
npm run preview -- --port 4173
npm test
npm run format:check
npm run check:release
```

`npm install` fonctionne aussi ; `npm ci` reproduit les versions du lockfile. La compilation crée `dist/`.

## Présentation sur ordinateur

Le format principal est désormais l’ordinateur, avec des compositions panoramiques adaptées à 1366 × 768, 1440 × 900 et 1920 × 1080. Les routines sont cadrées pour afficher leurs cinq bénéfices et leur visualisation dans la hauteur d’écran disponible. La version mobile reste utilisable.

- Bouton **Plein écran** dans l’en-tête sur ordinateur ; Échap ou le bouton de sortie pour revenir.
- **Flèches gauche/droite** : chapitre précédent/suivant, hors menus et champs interactifs.
- **Molette ou trackpad** : progression des scènes et animations au défilement.

## Architecture

- `src/components/` : photographies, libellés et visualisations de routine.
- `src/sections/` : huit chapitres indépendants.
- `src/animations/` : cycle de vie GSAP, scènes liées au scroll et nettoyage au démontage.
- `src/hooks/` : chargement et validation du manifeste local des images.
- `src/data/` : chapitres, vingt bénéfices, personnalités et suivi des sources.
- `src/styles/` : styles, variantes mobiles, paysage et mouvement réduit.
- `public/media/` : manifeste et photographies originales.
- `scripts/check-release.mjs` : contrôle distinct de la complétude des assets et des sources.
- `tests/` : tests fonctionnels Playwright.

Les scènes sont maintenues à l’écran avec CSS sticky pour conserver un défilement tactile natif. ScrollTrigger contrôle la progression, les zooms, les fondus et les calques. Aucun moteur 3D n’est ajouté : il n’existe pas de modèle fidèle et autorisé dans les fichiers fournis.

## Ce qui est implémenté

Huit chapitres, introduction noire, révélation photographique, navigation par ancres, progression, quatre routines avec cinq bénéfices chacune, visualisations illustratives animées, zoom produit, assemblage du pack réversible, fondu noir/blanc, compteur de budget sur fond noir et conclusion.

Les illustrations du sommeil, du marché, de la journée et de la récupération **ne sont ni des mesures personnelles ni une reproduction de l’application WHOOP**. Elles sont explicitement légendées comme illustratives. Aucun graphique ne fournit de signal financier.

Les trois photographies du ZIP fourni sont utilisées telles quelles, sans reconstruction, sous `public/media/originals/` :

| Fichier       | Usage                                                          | Dimensions  |
| ------------- | -------------------------------------------------------------- | ----------- |
| `photo-1.png` | Bracelet noir, introduction, gros plan, routines et conclusion | 1098 × 1014 |
| `photo-2.png` | Bracelet blanc et transition de style                          | 1148 × 1006 |
| `photo-3.png` | Pack, calques animés et budget                                 | 1158 × 926  |

Le fond des scènes photographiques reprend la couleur du fond des originaux. Les dimensions sont réservées pour réduire les changements de mise en page. Le total des trois photos est d’environ 1,98 Mo ; elles sont réutilisées depuis le cache. Les photos secondaires sont chargées progressivement. Le JavaScript de production représente environ 121 ko gzip, la police locale environ 48 ko. Ces tailles ne constituent pas une mesure de performance sur réseau mobile réel.

La scène du pack sépare visuellement quatre zones de la photographie avec des masques CSS : bracelet, câble, chargeur et application. Elle est contrôlée par le scroll et réversible. **Elle ne montre pas une décomposition des composants internes.** Le téléphone illustre l’application et n’est pas inclus dans l’achat. Aucune face de capteur n’est inventée. Les photos disponibles ne permettent pas une rotation réelle ; le blanc reçoit un léger mouvement de cadrage et d’inclinaison.

## Limites qui empêchent la livraison complète du brief

La version technique fonctionne, mais la partie photographique et documentaire du brief reste incomplète. Les requêtes vers WHOOP et Unsplash sont refusées par le proxy actif (HTTP 403 « Domain forbidden »). Les domaines utiles sont enregistrés dans le brouillon de configuration, pas appliqués à l’instance. Enregistrer les réglages réseau dans les paramètres, publier l’environnement puis revérifier l’accès avant de reprendre les recherches.

Manquent : photographies historiques et de Will Ahmed, portraits autorisés des personnalités, photographies naturelles de bibliothèque, trading, entreprise, musculation et WHOOP au poignet. Les routines utilisent provisoirement le vrai visuel produit fourni, sans prétendre illustrer ces lieux. Le chapitre des personnalités n’affiche pas de portrait ni de partenariat non vérifié.

Le suivi est dans `src/data/editorial.json`. Vérifier via des sources fiables la création en 2012, les cofondateurs, les générations, le statut exact de Cristiano Ronaldo, Steven Bartlett, LeBron James, Michael Phelps et Patrick Mahomes, ainsi que le nom commercial, la matière et la compatibilité du bracelet blanc. Les portraits ne s’affichent qu’avec image, source, statut renseigné et vérification explicite.

Les chemins locaux des photos autorisées se renseignent dans `public/media/manifest.json`, sous `/media/`. Conserver la source, la licence et le crédit des nouveaux visuels. `npm run check:release` échoue actuellement avec la liste des ressources et vérifications manquantes ; il ne faut pas présenter ce contrôle comme réussi.

Le budget de **293 CHF** est fourni par l’utilisateur, pas issu d’un tarif officiel vérifié. `293 / 365 ≈ 0,80 CHF/jour`. Confirmer l’offre exacte, l’abonnement et les accessoires avant achat. Aucun prix individuel n’est inventé.

## Validation

Playwright utilise Chromium système à `/usr/bin/chromium`. Adapter ce chemin sur une autre machine ou installer le navigateur Playwright et retirer `executablePath`.

Les profils couvrent ordinateur, dimensions et tactile iPhone sous Chromium et mouvement réduit. Un test supplémentaire vérifie les tailles 320 × 568, 390 × 844 et 844 × 390. Il est exécuté une fois sur le profil ordinateur et explicitement ignoré sur les deux autres profils pour éviter une répétition identique.

Vérifications : huit chapitres, vingt bénéfices, navigation, dialogue accessible et fermeture Échap, budget, absence de débordement horizontal, absence d’erreurs JavaScript, chargement des originaux et réversibilité de l’introduction et du pack. Un contrôle de production vérifie aussi les photos et le chargement d’Inter depuis le site.

**Safari sur un véritable iPhone n’a pas été testé.** Le téléchargement WebKit est bloqué par la politique réseau courante ; les domaines nécessaires figurent aussi dans le brouillon.

## Publication HTTPS

Vercel et Netlify sont configurés. Aucun push Git, déploiement public ni URL HTTPS n’a été créé. Aucun accès Vercel ou Netlify n’est configuré dans les métadonnées de l’environnement et aucune variable Vercel/Netlify n’est injectée.

Après intégration des photos et vérification du contenu :

```sh
npm ci
npm run build
npm run check:release
```

### Vercel

Via l’interface : importer `adn7n/ChatGPT` après avoir poussé le projet, sélectionner Vite, commande `npm run build`, sortie `dist`, Node 24, puis Deploy. Le dépôt initial était vide et la branche `main` n’existait pas ; aucun commit initial n’a été poussé par cet agent.

Via la CLI, depuis le dossier projet, avec votre compte connecté :

```sh
npx vercel login
npx vercel --prod
```

### Netlify

Via l’interface : importer le dépôt ; `netlify.toml` définit `npm run build` et `dist`. Une publication manuelle du dossier `dist` via l’interface Netlify est également possible.

Via la CLI, depuis le dossier projet, avec votre compte connecté :

```sh
npx netlify-cli login
npx netlify-cli deploy --prod --dir=dist
```

Utiliser l’URL HTTPS réellement retournée par le service, puis vérifier le site sur Safari iPhone. Publier l’environnement cloud et publier le site web sont deux opérations distinctes.
