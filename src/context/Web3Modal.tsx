'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState, type ReactNode } from 'react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { WagmiProvider } from 'wagmi'
import { createWeb3Modal } from '@web3modal/wagmi/react'
import {  mainnet, sepolia,polygon ,bsc} from 'wagmi/chains'

// 2. Create wagmiConfig
const metadata = {
  name: 'matar',
  description: 'matar Example',
  url: 'https://matar.ai/', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}
const projectId  = process.env.NEXT_PUBLIC_PROJECT_ID || ""
const chains = [bsc] as const


const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
})

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  // enableOnramp: true // Optional - false as default
})

export function Web3ModalProvider(props: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    </WagmiProvider>
  )
}
