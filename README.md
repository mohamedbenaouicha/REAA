# REAA — Research Organisation on Analytics and AI

**Live site: [reaa-tn.github.io](https://reaa-tn.github.io)**  
*(or your custom domain reaa.tn once configured)*

---

## Structure

```
reaa-website/
├── index.html
├── css/style.css
├── js/main.js
├── assets/img/
├── .github/workflows/deploy.yml   ← GitHub Pages CI/CD
├── .gitignore
└── README.md
```

---

## Déploiement sur GitHub Pages (étape par étape)

### 1. Créer le dépôt GitHub

```bash
git init
git add .
git commit -m "Initial commit — REAA website"
```

Créez un dépôt public sur GitHub, par exemple `reaa-tn/reaa-website`, puis :

```bash
git remote add origin https://github.com/reaa-tn/reaa-website.git
git branch -M main
git push -u origin main
```

### 2. Activer GitHub Pages

Dans le dépôt GitHub :
1. **Settings** → **Pages**
2. Source : **GitHub Actions**
3. Le workflow `.github/workflows/deploy.yml` se déclenche automatiquement à chaque push sur `main`

Le site sera accessible à :
```
https://<votre-organisation>.github.io/<nom-du-repo>/
```

### 3. (Optionnel) Domaine personnalisé reaa.tn

Dans **Settings → Pages → Custom domain**, saisissez `reaa.tn`.

Ensuite, chez votre registrar DNS (OVH ou autre), ajoutez :

| Type  | Nom  | Valeur                        |
|-------|------|-------------------------------|
| A     | @    | 185.199.108.153               |
| A     | @    | 185.199.109.153               |
| A     | @    | 185.199.110.153               |
| A     | @    | 185.199.111.153               |
| CNAME | www  | reaa-tn.github.io.            |

GitHub Pages active le HTTPS automatiquement (Let's Encrypt).

---

## Développement local

```bash
python -m http.server 8080
# → http://localhost:8080
```

---

## Checklist de personnalisation

- [ ] Remplacer les logos placeholder des partenaires (`assets/img/`)
- [ ] Mettre à jour les statistiques (hero stat bar)
- [ ] Connecter le formulaire de contact (Formspree ou EmailJS)
- [ ] Ajouter `favicon.ico`
- [ ] Configurer le domaine `reaa.tn`

---

*© 2026 REAA. All rights reserved.*
