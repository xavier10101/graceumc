import type { NextConfig } from "next";

const isPages = process.env.NEXT_EXPORT === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];

const nextConfig: NextConfig = {
  output: isPages ? "export" : undefined,
  images: {
    unoptimized: isPages,
  },
  // If deploying to user/organization pages, leave basePath undefined.
  // If deploying to a project pages site, set basePath to `/${repoName}` at build time.
  basePath: process.env.BASE_PATH || undefined,
  assetPrefix: process.env.BASE_PATH || undefined,
};

export default nextConfig;
