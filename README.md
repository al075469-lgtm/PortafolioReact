# Portafolio web de Daniel Beytia

Portafolio hecho con **React + Vite**. Cada trabajo del semestre se muestra funcionando en vivo dentro de la página.

## Antes de publicar
1. Abre `src/projects.js` y cambia `github` y `email` en el objeto `profile`.
2. Tus proyectos originales están en `public/projects/`. Se copian tal cual al sitio.

## Correrlo local
```bash
npm install
npm run dev
```

## Publicarlo
**Vercel (lo más rápido):** sube el repo a GitHub, entra a vercel.com, "Add New Project", elige el repo y presiona Deploy. No hay que configurar nada.

**GitHub Pages:** en el repo ve a Settings, Pages, y en "Source" elige **GitHub Actions**. Cada push a `main` publica el sitio con el workflow de `.github/workflows/deploy.yml`.

## Agregar un trabajo nuevo
Copia su carpeta a `public/projects/<nombre>/` y agrega un objeto a la lista en `src/projects.js`.
