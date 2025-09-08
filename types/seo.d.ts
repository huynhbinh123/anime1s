// types/seo.d.ts
declare module "@nuxt/schema" {
  interface NuxtConfig {
    seo?: {
      siteName?: string;
      siteUrl?: string;
      trailingSlash?: boolean;
    };
  }
  interface NuxtOptions {
    seo?: {
      siteName?: string;
      siteUrl?: string;
      trailingSlash?: boolean;
    };
  }
}
export {};
