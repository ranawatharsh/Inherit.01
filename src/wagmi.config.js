import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  sepolia,
} from 'wagmi/chains';
export const config = getDefaultConfig({
  appName: 'Inherit',
  projectId: '56d8f41a081d33fcf7f3928fe6f563b3',
  chains: [sepolia],
  ssr: true, 
});

