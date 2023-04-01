import { withContentlayer } from "next-contentlayer";

const isProd = process.env.NODE_ENV === 'production'

let assetPrefix = '/'
let basePath = ''

if (isProd) {
  const repo = 'jdr-flowershow'

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

export default withContentlayer({
  basePath,
  assetPrefix,
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.infrastructureLogging = {
      level: "error",
    };
    return config;
  },
});
