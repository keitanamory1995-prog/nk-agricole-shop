
# NK Agricole — Boutique en ligne (Next.js + Tailwind)

Ce projet est prêt à déployer. Il inclut :
- Page boutique avec panier, livraison/retrait
- Envoi de récap de commande via WhatsApp vers **+33 6 41 38 42 48**
- API `/api/orders` (à connecter à ta gestion plus tard)

## 1) Lancer en local (facile)

1. Installe **Node.js 18+** (https://nodejs.org)
2. Ouvre un terminal dans le dossier du projet
3. Installe les dépendances :
   ```bash
   npm install
   ```
4. Démarre le site :
   ```bash
   npm run dev
   ```
5. Ouvre http://localhost:3000 dans ton navigateur

## 2) Déployer en ligne avec Vercel (recommandé)

Option A — avec GitHub (classique) :
1. Crée un dépôt GitHub et pousse les fichiers de ce dossier
2. Va sur https://vercel.com → **Add New…** → **Project** → importe ton dépôt
3. Laisse les réglages par défaut (Next.js). Clique **Deploy**
4. Ton site est en ligne (l’URL est fournie par Vercel)

Option B — depuis ton ordinateur (Vercel CLI) :
1. Installe la CLI : `npm i -g vercel`
2. Dans le projet : `vercel` puis `vercel --prod`
3. Vercel crée l’URL publique

## 3) Personnaliser les produits / prix

Édite `components/NKShop.tsx` → tableau `PRODUCTS`. Exemple :
```ts
{ id: "gaz12kg", name: "Bouteille de gaz 12 kg", price: 14000, category: "Gaz", image: "URL_IMAGE", unit: "pièce" }
```
- `price` en **CFA** (XOF)
- `category` pour filtrer
- `image` : URL (peut être une photo de tes produits)
- `unit` : pièce, carton, lot, etc.

## 4) Modifier WhatsApp, livraison, contact

- Numéro WhatsApp : dans `components/NKShop.tsx`, variable `whatsappNumber`
- Frais de livraison : variable `deliveryFee`
- Textes pied de page : dans `components/NKShop.tsx` (section Footer)

## 5) Brancher à ta gestion (optionnel)

Fichier `app/api/orders/route.ts` reçoit la commande en JSON.
Tu peux :
- Enregistrer la commande (Airtable/Google Sheets/ERP)
- Envoyer un email au magasin
- Notifier le livreur

Exemple pour envoyer un email plus tard : ajoute du code Node (nodemailer) dans cette route.

---
Besoin d’aide ? Ouvre `components/NKShop.tsx` et dis-moi ce que tu veux changer.
