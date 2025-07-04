module.exports = {
  async headers() {
    return [
      {
        source: '/.well-known/apple-app-site-association',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/json',
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/banortelink/:path*',
        destination: '/api/banortelink/:path*',
      },
      {
        source: '/uLink/:path*',
        destination: '/api/uLink/:path*',
      },
    ]
  },
};