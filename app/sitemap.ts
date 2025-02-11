import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://raverasmines.com/",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://raverasmines.com/about",
      lastModified: new Date().toISOString(),
    },
  ];
}
