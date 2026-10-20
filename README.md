# Anna Jatsiv Interior Design — website starter

A responsive static website based on the uploaded 2026 portfolio PDF.

## Preview locally
Open `index.html` in a browser. For best results, use a local development server (for example VS Code Live Server).

## Before publishing
1. In `script.js`, replace `anna@example.com` with your preferred business email.
2. The site uses embedded project images extracted from your PDF where available. Replace them with original high-resolution photos if you have them, especially for the About portrait and any images that look like page compositions rather than standalone photographs.
3. Review project titles, descriptions, deliverables, and service wording for accuracy.
4. Add real product links to the relevant project pages once you have a product list.
5. Test the contact form. It currently opens the visitor's email application; it does not submit to a server.
6. Review the portfolio imagery rights and ensure you have permission to publish each image online.

## Deploy to Cloudflare Pages
1. Create a GitHub repository and upload all files in this folder.
2. In Cloudflare, open Workers & Pages and create a Pages project connected to that repository.
3. Use no build command for this plain static site; set the output directory to `/` (or the repository root, depending on the setup screen).
4. Deploy. Add your custom domain in the Pages project settings.

## Files
- `index.html` — all website sections and project detail anchors
- `styles.css` — responsive editorial styling
- `script.js` — mobile navigation, image mapping, and inquiry email
- `assets/` — PDF page renders and extracted image assets
