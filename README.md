Messafy Landing

The public landing page introduces Messafy, a focused workspace for your notes. A dashboard preview, reusable homepage sections and a rain effect present the product, while sign-in and registration links lead to the separate frontend app.

Built with Astro 7, reusable Astro components and plain CSS, the landing page is independent of the React frontend and backend. Shared design tokens keep colors, typography and spacing consistent across its sections.

For local development, use Node.js 22.22.0 or later, run npm ci and start the site with npm run dev. Astro normally serves it at http://localhost:4321. Set `PUBLIC_APP_URL` in a local `.env` file to the frontend app's base URL; it defaults to http://localhost:5173, with authentication links pointing to /login and /register.

Run npm run build to generate the static site in dist and npm run preview to inspect the build locally. Set `PUBLIC_APP_URL` in the hosting environment before building for production so authentication links point to the deployed frontend. No lint or test scripts are currently configured.
