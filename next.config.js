const withSitemap = require("next-sitemap");

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withSitemap({
  ...nextConfig,
  sitemap: {
    siteUrl: "https://www.krussautoserv.ng/",
    generateRobotsTxt: true,
    sitemapSize: 7000,
  },
});
