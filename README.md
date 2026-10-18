Messafy Landing

The public landing page introduces Messafy, a focused workspace for your notes. A dashboard preview, reusable homepage sections and a rain effect present the product, while sign-in and registration links lead to the separate frontend app.

Built with Astro 7, reusable Astro components and plain CSS, the landing page is independent of the React frontend and backend. Shared design tokens keep colors, typography and spacing consistent across its sections.

For local development, use Node.js 22.22.0 or later, run npm ci and start the site with npm run dev. Astro normally serves it at http://localhost:4321. Set `PUBLIC_APP_URL` in a local `.env` file to override the frontend app's base URL; it defaults to http://localhost:5173 in development and https://app.messafy.org in production, with authentication links pointing to /login and /register.

Run npm run build to generate the static site in dist and npm run preview to inspect the build locally. Set `PUBLIC_APP_URL` in the hosting environment before building for production so authentication links point to the deployed frontend. No lint or test scripts are currently configured.

The canonical public site is https://www.messafy.org; keep the redirect from messafy.org to www in Vercel. The landing exposes /robots.txt and /sitemap.xml, with only the public homepage in the sitemap. Add future public pages to that file when publishing them; never include account pages, private notes or API endpoints. Open Graph, Twitter metadata and WebSite structured data describe the landing. Builds with VERCEL_ENV=preview emit noindex instead of index.

The separate React app at https://app.messafy.org uses noindex in HTML and Vercel response headers. Its robots.txt allows crawling so search engines can read that directive; robots rules do not protect private content or replace authentication. The API at https://api.messafy.org is not part of the public sitemap. In the VPS Caddy block for that API, add header X-Robots-Tag "noindex, nofollow" if API responses should also explicitly opt out of indexing, then validate and reload Caddy.

After deployment, verify the messafy.org domain property in Google Search Console using its TXT DNS record in Vercel, submit https://www.messafy.org/sitemap.xml and inspect the canonical homepage to request indexing. Check the deployed redirects, robots directives and sitemap before submitting. Indexing and ranking are not guaranteed or immediate.

The public /llms.txt file maps real public content and identifies the application's private boundaries; it is not a ranking factor or an access-control mechanism. Astro and Vercel use trailing slashes consistently, and Vercel redirects /index.html to /. Social cards use the 1200 by 630 PNG in public/social-card.png, captured from the actual homepage; refresh it when changing the product copy or design. The above-the-fold logo declares its intrinsic dimensions and loads eagerly. No analytics, tag manager, third-party tracking or SSR is needed for the current static landing or Search Console verification.
