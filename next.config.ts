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
        source: '/ulink/:path*',
        destination: '/api/uLink/:path*',
      },
      {
        source: '/atlantida/:path*',
        destination: '/api/atlantida/:path*',
      },
      {
        source: '/remesasbi/:path*',
        destination: '/api/remesasbi/:path*',
      },
      {
        source: '/everpayer/:path*',
        destination: '/api/everpayer/:path*',
      },
      {
        source: '/remesasbt/:path*',
        destination: '/api/remesasbt/:path*',
      },
      {
        source: '/mlremit/:path*',
        destination: '/api/mlremit/:path*',
      },
      {
        source: '/ussc/:path*',
        destination: '/api/ussc/:path*',
      },
      {
        source: '/miotransfer/:path*',
        destination: '/api/miotransfer/:path*',
      },
      {
        source: '/remesasreservas/:path*',
        destination: '/api/remesasreservas/:path*',
      },
      {
        source: '/mazremit/:path*',
        destination: '/api/mazremit/:path*',
      },
    ]
  },
};