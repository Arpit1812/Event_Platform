import { NextResponse } from "next/server";

export async function GET() {
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://spotlightshows.co.uk/</loc>
    <priority>1.0</priority>
  </url>
</urlset>`;
  
  return new NextResponse(sitemapXml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
