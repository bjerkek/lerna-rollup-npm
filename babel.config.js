module.exports = api => {
  api.cache(true)

  const presets = [
    '@babel/preset-typescript'
  ]

  const plugins = [
    '@babel/plugin-transform-runtime'
  ]

  const env = {
    production: {
      presets: [
        '@babel/preset-env', {
          targets: ['last 2 versions', 'ie 11'],
          modules: false
        }
      ]
    },
    test: {
      presets: [
        '@babel/preset-env'
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties'
      ]
    }
  }

  return {
    presets,
    plugins,
    env
  }
}
