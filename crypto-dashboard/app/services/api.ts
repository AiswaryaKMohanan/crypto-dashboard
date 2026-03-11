import { Coin } from "../types/types";

export const fetchCoins = async (): Promise<Coin[]> => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false",
    { next: { revalidate: 60 } } // ISR (re-fetch every 60s)
  );

  if (!res.ok) {
    throw new Error("Failed to fetch coins");
  }

  return res.json();
};