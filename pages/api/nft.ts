import { Network, Alchemy } from "alchemy-sdk";
const config = {
  apikey: process.env.ALCH_API_TOKEN,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(config);

export { alchemy };
