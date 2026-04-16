# Lock Event — Site Web Officiel

Site Next.js du service Lock Event.

## Prérequis
- Node.js 20+
- npm

## Installation
```bash
npm install
```

## Développement local
```bash
npm run dev
```

Le site sera disponible sur `http://localhost:3000`.

## Build de production
```bash
npm run build
npm run start
```

## Déploiement Vercel

### Connexion du repo GitHub
1. Aller sur `vercel.com`
2. Se connecter avec GitHub sur le compte `contactlockevent-cmd`
3. Cliquer sur `New Project`
4. Choisir `Import Git Repository`
5. Sélectionner le repo `LockEvent`
6. Vérifier que le framework détecté est `Next.js`
7. Laisser `Build Command` sur `next build`
8. Cliquer sur `Deploy`
9. Attendre 2 à 3 minutes pour la première mise en ligne

### Domaine personnalisé `lockevent.fr`
1. Ouvrir le projet dans Vercel
2. Aller dans `Settings` puis `Domains`
3. Ajouter `lockevent.fr`
4. Ajouter ensuite les DNS chez le registrar :
   - `A` record pour `@` vers `76.76.21.21`
   - `CNAME` pour `www` vers `cname.vercel-dns.com`
5. Attendre la propagation DNS, généralement moins d'une heure, parfois jusqu'à 48 heures

## Variables d'environnement
Aucune variable d'environnement n'est requise.

## Contact
`contact.lockevent@gmail.com`
