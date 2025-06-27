// sitemap-generator.js
import { writeFile } from "fs/promises";

const domain = "https://seo-testing-theta.vercel.app/"; // Replace with your real domain
const routes = ["/", "/about", "/contact"]; // Add more routes as needed

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `
  <url>
    <loc>${domain}${route}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join("")}
</urlset>`;

await writeFile("public/sitemap.xml", sitemap);
console.log("✅ Sitemap saved to public/sitemap.xml");
