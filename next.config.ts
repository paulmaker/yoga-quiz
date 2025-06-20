/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  frame-ancestors 'self' http://localhost:3000;   
  object-src 'none';
  base-uri 'self';
`;

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  },
  // {
  //   key: "X-Frame-Options",
  //   value: "DENY",
  // },
  // {
  //   key: "Cross-Origin-Opener-Policy",
  //   value: "same-origin",
  // },
  // {
  //   key: "X-Content-Type-Options",
  //   value: "nosniff",
  // },
  // {
  //   key: "Referrer-Policy",
  //   value: "strict-origin-when-cross-origin",
  // },
];

const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/index",
        destination: "/",
        permanent: true,
      },
    ];
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  devIndicators: false,
};

export default nextConfig;
