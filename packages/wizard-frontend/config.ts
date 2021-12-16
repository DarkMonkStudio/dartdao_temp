import { ChainId } from '@usedapp/core'

type SupportedChains = ChainId.Rinkeby | ChainId.Localhost | 69

export const CHAIN_ID: SupportedChains = 69

export const secrets = {
  alchemyApiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
  etherscanApiKey: process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY,
}

interface ContractAddresses {
  deployerAddress: string
  svgPlaceholderAddress: string
}

const contractsConfig: Record<SupportedChains, ContractAddresses> = {
  [ChainId.Localhost]: {
    deployerAddress: process.env.NEXT_PUBLIC_LOCAL_DEPLOYER_CONTRACT,
    svgPlaceholderAddress:
      process.env.NEXT_PUBLIC_LOCAL_SVG_PLACEHOLDER_CONTRACT,
  },
  [ChainId.Rinkeby]: {
    deployerAddress: '0xC95d98da541FF990D773F9015996d34663dF0735',
    svgPlaceholderAddress: '0xC3F5DC2E7cF6207273EA5363C7e78b71b3aD5280',
  },
  [69]: {
    deployerAddress: '0x8c49f49B3e5A2a469A09f4d8D11546Bc928c08Aa',
    svgPlaceholderAddress: '0xC906182EA723D6d9e7BA4aF7b3454A1a1772bE4A',
  },
}

const tallyApiURIConfig: Record<SupportedChains, string> = {
  [ChainId.Localhost]: 'http://localhost:5000/query',
  [ChainId.Rinkeby]: 'https://api2.withtally.com/query',
  [69]: '',
}

export const tallyApiURI = tallyApiURIConfig[CHAIN_ID]
export const tallyWebBaseURI = 'https://alpha.withtally.com/governance/'

export const contractsAddresses = contractsConfig[CHAIN_ID]

// Multicall needs to be configured only for Localhost
export const multicallOnLocalhost = '0x5FbDB2315678afecb367f032d93F642f64180aa3'

const etherscanEndpoints: Record<SupportedChains, string> = {
  [ChainId.Localhost]: 'https://api-rinkeby.etherscan.io/',
  [ChainId.Rinkeby]: 'https://api-rinkeby.etherscan.io/',
  [69]: 'TODO',
}
export const etherscanEndpoint = etherscanEndpoints[CHAIN_ID]
