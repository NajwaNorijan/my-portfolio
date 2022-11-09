// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig

module.exports = {
  images: {
    loader: "akamai",
    path: "/",
    domains: ["cdn-icons-png.flaticon.com"], //if got error with next/image like this Error: Invalid src prop (https://cdn-icons-png.flaticon.com/512/219/219969.png) on `next/image` then add this https://nextjs.org/docs/messages/next-image-unconfigured-host - put in the image domain only
  },
};
