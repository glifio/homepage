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
      NEXT_PUBLIC_WALLET_HREF:
        process.env.WALLET_HREF || 'https://calibration.wallet.glif.io',
      NEXT_PUBLIC_SAFE_HREF:
        process.env.SAFE_HREF || 'https://calibration.safe.glif.io',
      NEXT_PUBLIC_EXPLORER_HREF:
        process.env.EXPLORER_HREF || 'https://calibration.explorer.glif.io',
      NEXT_PUBLIC_VERIFIER_HREF:
        process.env.VERIFIER_HREF || 'https://verify.glif.io'
    }
  }
}
