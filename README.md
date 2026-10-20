# Anna Jatsiv Interior Design — website starter

A responsive static website based on the uploaded 2026 portfolio PDF.

## Preview locally
Open `index.html` in a browser. For best results, use a local development server (for example VS Code Live Server).

## Before publishing
1. The inquiry form is configured for `anna.jatsiv@gmail.com`; test it before publishing updates.
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


## SEO updates included
- Descriptive page title and meta description
- Social sharing metadata
- Basic ProfessionalService structured data for United States service areas
- Descriptive alt text on portfolio images, with real image elements
- More specific residential and short-term rental service descriptions

Before using a custom domain, update the `og:url` and `url` values in `index.html` to your final domain. Only keep the listed service areas if they accurately reflect where you work.


## SEO image filenames and alt text
The assets folder contains descriptively named images used by the website. Image alt text is set in `index.html` using each image slot’s `data-alt` attribute; `script.js` transfers that text to the rendered image element. Keep the alt text accurate if you replace any image.
