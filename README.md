# Portafolio profesional

Portafolio personal construido con Next.js, React, TypeScript y Tailwind CSS.

## Desarrollo

```bash
pnpm install
pnpm dev
```

La informacion personal, experiencia, habilidades y proyectos se administra
desde `src/data/portfolio.ts`.

## Produccion

Define `NEXT_PUBLIC_SITE_URL` con el dominio publico antes de desplegar:

```bash
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com pnpm build
```
