# First Line — Portfolio de Exequiel Calix

Portfolio construido con arquitectura de software profesional, estilo Linear/Vercel.

## Stack

- **React 19 + Vite** — núcleo de la SPA
- **React Router DOM v7** — páginas completas de case study (`/projects/:slug`), sin modales
- **Tailwind CSS v4** — retícula de 12 columnas, tokens de color exactos definidos en `src/index.css` (`@theme`)
- **Framer Motion** — todas las transiciones (fade / slide / scale), 200–500ms, easing `[0.25, 1, 0.5, 1]`, sin springs rebotantes
- **Recharts** — gráfica de área animada dentro del dashboard vivo del Hero
- **React Hook Form** — formulario de contacto con validación en tiempo real (`mode: "onBlur"`) y estado de carga

Sin librerías de componentes (Shadcn, MUI, etc.) — todo el CSS está maquetado a mano con utilidades de Tailwind sobre los tokens exactos:

- Fondo `#F7F7F5`
- Paneles `#FFFFFF`
- Texto `#111111`
- Texto secundario `#5A5A5A`
- Líneas `#E8E8E8`
- Acento `#2563EB`

## Cómo correrlo

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # build de producción -> /dist
```

## Estructura

```
src/
  components/     Navbar, Hero, DashboardMock, HeroStats, Showcase,
                   BentoCard, StackSection, About, Contact, Footer, SkeletonImage
  pages/          Home.jsx, ProjectPage.jsx
  data/           projects.js  <- única fuente de datos de proyectos
```

## Proyectos incluidos

Colección estratégica — cada proyecto demuestra una capacidad distinta y comparte el mismo sistema de diseño ("First Line"):

1. **First Line** — este portfolio, origen del sistema de diseño
2. **BusinessFlow** — panel de administración para pequeñas empresas (clientes, facturas, inventario, reportes)
3. **Voice Master Pipeline** — automatización en Python para procesamiento de audio
4. **ReserveHub** — plataforma de reservas adaptable (restaurantes, barberías, clínicas, talleres)
5. **SupportDesk** — sistema de tickets y atención al cliente con roles y dashboard

### Sistema de diseño compartido

Todos los proyectos futuros deben seguir el mismo lenguaje visual definido acá: grid de 12
columnas, base neutra + un único color de acento, bordes de 1px sin sombras pesadas,
animaciones fade/translate/scale pequeño de 200–400ms, retícula de fondo sutil, tags estilo
terminal, y skeleton loaders minimalistas. No cambiar este sistema salvo pedido explícito.

## Cosas para personalizar

1. **Imágenes de proyecto** — actualmente cada card/hero usa un placeholder generado con
   CSS (grid + inicial del proyecto) en vez de una screenshot real. Agregá tus imágenes a
   `public/projects/` y reemplazá el placeholder en `BentoCard.jsx` / `ProjectPage.jsx`
   por `<SkeletonImage src="/projects/tu-imagen.png" />` (el componente con efecto
   skeleton ya está armado en `src/components/SkeletonImage.jsx`).
2. **CV** — colocá tu PDF en `public/cv-exequiel-calix.pdf` (los botones "Download CV"
   ya apuntan ahí).
3. **Redes / contacto** — en `Contact.jsx` están tus datos con placeholders
   (`github.com/exequielcalix`, `linkedin.com/in/exequielcalix`, `hello@exequielcalix.dev`,
   ubicación). Reemplazalos por tus URLs y correo reales.
4. **Envío del formulario** — `Contact.jsx` simula el envío con un `setTimeout`. Conectalo
   a tu backend, Formspree, Resend, etc. en la función `onSubmit`.
5. **Demo / código de cada proyecto** — en `src/data/projects.js`, los campos `demo` y
   `code` están en `null`. Si tenés links públicos (live demo, repo de GitHub), agregalos
   ahí y aparecerán automáticamente en la sidebar de cada case study.
