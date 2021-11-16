module.exports = {
  rewrites: async () => [
    {
      destination: 'https://www.juul.com',
      source: '/rewritten-path',
    }
  ]
}
