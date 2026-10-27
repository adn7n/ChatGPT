# WHOOP — Beyond Performance

**Compreender o meu corpo. Superar os meus limites com inteligência.**

Présentation personnelle en portugais européen (`pt-PT`), indépendante de WHOOP. React, TypeScript, Vite, GSAP ScrollTrigger et CSS responsive. La typographie et les couleurs suivent les captures de la charte fournies par l’utilisateur.

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

## Typographie et couleurs

`src/styles/brand.css` applique la charte fournie : titres en Proxima Nova Bold, majuscules et espacement de 0,1 em ; corps en Proxima Nova Semibold sans transformation ; chiffres en DINPro Bold avec espacement normal. Les fichiers propriétaires ne sont pas fournis : des sources `local()` utilisent les variantes installées légalement, sinon les polices de secours prévues par la charte (police système, Helvetica Neue, Helvetica, Arial) prennent le relais. Il ne faut donc pas annoncer que Proxima Nova et DINPro sont embarquées. Pour un rendu identique sur tous les postes, intégrer ensuite les fichiers webfont autorisés par leur licence.

Les couleurs sont définies comme variables : noir/blanc pour la marque, teal `#00F19F` pour la progression et les accents, sommeil `#7BA1BB`, récupération sans évaluation `#67AEE6` et effort `#0093E7`. Les seuils de récupération sont définis mais aucun score personnel n’est fabriqué. Le graphique financier illustratif reste neutre.

## Architecture

- `src/components/` : photographies, libellés et visualisations de routine.
- `src/sections/` : huit chapitres indépendants.
- `src/animations/` : cycle de vie GSAP, scènes liées au scroll et nettoyage au démontage.
- `src/hooks/` : chargement et validation du manifeste local des images.
- `src/data/` : chapitres, quinze bénéfices, personnalités et suivi des sources.
- `src/styles/` : styles, variantes mobiles, paysage et mouvement réduit.
- `public/media/` : manifeste et photographies originales.
- `scripts/check-release.mjs` : contrôle distinct de la complétude des assets et des sources.
- `tests/` : tests fonctionnels Playwright.

Les scènes sont maintenues à l’écran avec CSS sticky pour conserver un défilement tactile natif. ScrollTrigger contrôle la progression, les zooms, les fondus et les calques. Aucun moteur 3D n’est ajouté : il n’existe pas de modèle fidèle et autorisé dans les fichiers fournis.

## Ce qui est implémenté

Huit chapitres, introduction noire, révélation photographique, navigation par ancres, progression, trois routines avec cinq bénéfices chacune, visualisations illustratives animées, zoom produit, assemblage du pack réversible, fondu noir/blanc, compteur de budget sur fond noir et conclusion.

Les illustrations du sommeil, de la journée et de la récupération **ne sont ni des mesures personnelles ni une reproduction de l’application WHOOP**. Elles sont explicitement légendées comme illustratives. Le passage sur le trading a été supprimé à la demande de l’utilisateur.

Les trois photographies du ZIP fourni sont conservées sous `public/media/originals/`. Des versions détourées avec l’outil d’édition d’image sont utilisées sur le site sous `public/media/cutouts/`. Les originaux ne sont pas écrasés :

| Fichier       | Usage                                                          | Dimensions  |
| ------------- | -------------------------------------------------------------- | ----------- |
| `photo-1.png` | Bracelet noir, introduction, gros plan, routines et conclusion | 1098 × 1014 |
| `photo-2.png` | Bracelet blanc et transition de style                          | 1148 × 1006 |
| `photo-3.png` | Pack, calques animés et budget                                 | 1158 × 926  |

Les scènes utilisent désormais des PNG avec canal alpha, sans rectangle de fond. Le détourage a été réalisé avec un outil d’édition d’image à partir des originaux, puis contrôlé visuellement ; il ne doit pas être présenté comme une identité pixel à pixel avec les sources. Les dimensions sont réservées pour stabiliser la mise en page. Les trois détourages pèsent environ 4 Mo et sont réutilisés depuis le cache. Le JavaScript de production représente environ 123 ko gzip.

La scène du pack sépare visuellement quatre zones de la photographie avec des masques CSS : bracelet, câble, chargeur et application. Elle est contrôlée par le scroll et réversible. **Elle ne montre pas une décomposition des composants internes.** Le téléphone illustre l’application et n’est pas inclus dans l’achat. Aucune face de capteur n’est inventée. Les photos disponibles ne permettent pas une rotation réelle ; le blanc reçoit un léger mouvement de cadrage et d’inclinaison.

## Limites qui empêchent la livraison complète du brief

La version technique fonctionne, mais la partie photographique et documentaire du brief reste incomplète. Les requêtes vers WHOOP et Unsplash sont refusées par le proxy actif (HTTP 403 « Domain forbidden »). Les domaines utiles sont enregistrés dans le brouillon de configuration, pas appliqués à l’instance. Enregistrer les réglages réseau dans les paramètres, publier l’environnement puis revérifier l’accès avant de reprendre les recherches.

Manquent : photographies historiques et de Will Ahmed, portraits autorisés des personnalités, photographies naturelles de bibliothèque, entreprise, musculation et WHOOP au poignet. Les routines utilisent provisoirement le vrai visuel produit fourni, sans prétendre illustrer ces lieux. Le chapitre présente désormais les liens publics connus de Cristiano Ronaldo (ambassadeur global et investisseur annoncé en 2024), Michael Phelps et Patrick Mahomes (investisseurs). Aucun portrait artificiel n’est créé. Les références renvoient à l’article de présentation de WHOOP ; elles n’ont pas pu être consultées en direct dans cet environnement. La vérification en ligne reste marquée comme non réalisée dans les métadonnées éditoriales.

Le suivi est dans `src/data/editorial.json`. Vérifier via des sources fiables la création en 2012, les cofondateurs, les générations, le statut exact de Cristiano Ronaldo, Steven Bartlett, LeBron James, Michael Phelps et Patrick Mahomes, ainsi que le nom commercial, la matière et la compatibilité du bracelet blanc. Les portraits ne s’affichent qu’avec image, source, statut renseigné et vérification explicite.

Les chemins locaux des photos autorisées se renseignent dans `public/media/manifest.json`, sous `/media/`. Conserver la source, la licence et le crédit des nouveaux visuels. `npm run check:release` échoue actuellement avec la liste des ressources et vérifications manquantes ; il ne faut pas présenter ce contrôle comme réussi.

Le budget est transcrit de la nouvelle capture du panier fournie par l’utilisateur : **219 CHF** pour un an de WHOOP Peak sur WHOOP 5.0, **48 CHF** pour la SportFlex 5.0 Charge, **267 CHF** de sous-total, **26,99 CHF** de livraison, soit **293,99 CHF** au total. La TVA de **22,03 CHF est déjà incluse** et n’est pas ajoutée à nouveau. Le capteur WHOOP 5.0, le pack de recharge sans fil, la SuperKnit Obsidian et la garantie à vie figurent comme inclus dans cette offre. La durée de batterie de 14 jours est annoncée dans la capture. `293,99 / 365 ≈ 0,81 CHF/jour`. Ces montants correspondent à la capture, pas à un tarif futur garanti. Le nom SportFlex 5.0 Charge et son association au pack 5.0 proviennent également de cette capture.

## Validation

Playwright utilise Chromium système à `/usr/bin/chromium`. Adapter ce chemin sur une autre machine ou installer le navigateur Playwright et retirer `executablePath`.

Les profils couvrent ordinateur, dimensions et tactile iPhone sous Chromium et mouvement réduit. Un test supplémentaire vérifie les tailles 320 × 568, 390 × 844 et 844 × 390. Il est exécuté une fois sur le profil ordinateur et explicitement ignoré sur les deux autres profils pour éviter une répétition identique.

Vérifications : huit chapitres, quinze bénéfices, navigation, dialogue accessible et fermeture Échap, budget, absence de débordement horizontal, absence d’erreurs JavaScript, chargement des détourages et réversibilité de l’introduction et du pack. Les tests de charte vérifient aussi la langue portugaise, les majuscules, les graisses, l’espacement des titres et les couleurs sémantiques.

**Safari sur un véritable iPhone n’a pas été testé.** Le téléchargement WebKit est bloqué par la politique réseau courante ; les domaines nécessaires figurent aussi dans le brouillon.

## Publication HTTPS

Vercel et Netlify sont configurés. Le projet est envoyé sur la branche main de https://github.com/adn7n/ChatGPT. Aucun déploiement public ni URL HTTPS de site n’a été vérifié par cet agent. Aucun accès Vercel ou Netlify n’est configuré dans les métadonnées de l’environnement et aucune variable Vercel/Netlify n’est injectée.

Après intégration des photos et vérification du contenu :

```sh
npm ci
npm run build
npm run check:release
```

### Vercel

Via l’interface : importer `adn7n/ChatGPT` après avoir poussé le projet, sélectionner Vite, commande `npm run build`, sortie `dist`, Node 24, puis Deploy. Le dépôt initial était vide et la branche `main` n’existait pas ; le projet a depuis été publié sur la branche main avec l’autorisation de l’utilisateur.

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
