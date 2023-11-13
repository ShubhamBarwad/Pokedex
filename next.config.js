/** @type {import('next').NextConfig} */
const nextConfig = {
  // async redirects(){
  //   return [
  //     {
  //       source: '/',
  //       destination: '/details',
  //       permanent: true
  //     }
  //   ]
  // },
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'raw.githubusercontent.com',
          port: '',
          pathname: '/PokeAPI/**',
        },
      ],
    },
}

module.exports = nextConfig
