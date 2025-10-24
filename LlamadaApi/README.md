# RPSoft - Demo React App

Aplicación demo construida con React + Vite. He mejorado el diseño y añadido una página "Guía" con contenido didáctico, un `Header` global y componentes reutilizables.

Características principales añadidas:
- Header con navegación y saludo al usuario
- Página "Guía rápida" (`/guide`) con tarjetas didácticas
- Componentes: `DidacticCard`, `Header`
- Mejora de tipografía y paleta de colores en `tailwind.config.js`

Cómo ejecutar el proyecto (local):

1. Instala dependencias:

```powershell
npm install
```

2. Ejecuta en modo desarrollo:

```powershell
npm run dev
```

3. Abre http://localhost:5173 (o la URL que muestre Vite) en tu navegador.

Guía rápida de la app:

- /login — Iniciar sesión
- /register — Crear cuenta
- /profile — Perfil del usuario (protegido)
- /guide — Guía didáctica (protegido)

Próximos pasos recomendados:

- Añadir tests para los componentes y páginas
- Mejorar manejo de errores y notificaciones (toasts)
- Añadir internacionalización si se requiere soporte multilenguaje
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
