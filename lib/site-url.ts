const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl = new URL(
  configuredSiteUrl || (vercelProductionUrl ? `https://${vercelProductionUrl}` : "https://omarcalvario.com"),
);
