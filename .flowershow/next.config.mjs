import { withContentlayer } from "next-contentlayer";

const isDev = process.env.NODE_ENV === 'development'

let assetPrefix = '/'
let basePath = ''

if (!isDev) {
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
