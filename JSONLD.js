export default {
  '@type': 'WebApplication',
  name: 'Glif',
  description: 'Interoperable tools for the Filecoin network.',
  url: 'https://apps.glif.io',
  sameAs: ['https://github.com/glifio'],
  owns: [
    {
      '@type': 'WebApplication',
      name: 'Glif Sender',
      description: 'A web wallet to manage your Filecoin.',
      applicationCategory: 'Cryptocurrency wallet',
      operatingSystem: 'All',
      url: 'https://sender.glif.io'
    },
    {
      '@type': 'WebApplication',
      name: 'Glif Nodes',
      description: 'Private and public gateways to the Filecoin network.',
      applicationCategory: 'Blockchain node infrastructure',
      operatingSystem: 'All'
    },
    {
      '@type': 'WebApplication',
      name: 'Glif Safe',
      description: 'An interface for managing Filecoin multisig wallets.',
      applicationCategory: 'Cryptocurrency wallet',
      operatingSystem: 'All',
      url: 'https://safe.glif.io'
    },
    {
      '@type': 'WebApplication',
      name: 'Glif Verifier',
      description: 'Earn "verified" Filecoin storage when you verify yourself.',
      applicationCategory: 'Blockchain user validation',
      operatingSystem: 'All',
      url: 'https://verify.glif.io'
    }
  ],
  knowsAbout: [
    {
      '@type': 'SoftwareApplication',
      name: 'Filecoin',
      url: 'https://filecoin.io',
      applicationCategory: 'Blockchain network',
      operatingSystem: 'All'
    },
    {
      '@type': 'Corporation',
      name: 'Ledger SAS',
      url: 'https://www.ledger.com/'
    }
  ]
}
