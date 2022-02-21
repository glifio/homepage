const path = require('path')

const webpack = (config) => {
  const adjustedConf = { ...config }
  const experiments = config.experiments || {}
  adjustedConf.experiments = { ...experiments, syncWebAssembly: true }

  adjustedConf.resolve.alias = {
    ...config.resolve.alias,
    react: path.resolve('./node_modules/react'),
    'react-dom': path.resolve('./node_modules/react-dom'),
    next: path.resolve('./node_modules/next'),
    'styled-components': path.resolve('./node_modules/styled-components')
  }

  return adjustedConf
}

module.exports = () => {
  return {
    trailingSlash: true,
    webpack,
    env: {
      NEXT_PUBLIC_WALLET_URL: process.env.WALLET_URL || '',
      NEXT_PUBLIC_SAFE_URL: process.env.SAFE_URL || '',
      NEXT_PUBLIC_EXPLORER_URL: process.env.EXPLORER_URL || '',
      NEXT_PUBLIC_VERIFIER_URL: process.env.VERIFIER_URL || ''
    }
  }
}
