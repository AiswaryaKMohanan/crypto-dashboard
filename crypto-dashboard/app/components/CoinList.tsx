"use client";

import { useMemo, useState } from "react";
import { Coin } from "../types/types";
import CoinCard from "./CoinCard";
import Link from "next/link";

interface Props {
  coins: Coin[];
}

export default function CoinList({ coins }: Props) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "gainers" | "losers">("all");

  const filteredCoins = useMemo(() => {
    return coins
      .filter(
        (coin) =>
          coin.name.toLowerCase().includes(search.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(search.toLowerCase()),
      )
      .filter((coin) => {
        if (filter === "gainers") {
          return (
            coin.price_change_percentage_24h !== null &&
            coin.price_change_percentage_24h > 0
          );
        }
        if (filter === "losers") {
          return (
            coin.price_change_percentage_24h !== null &&
            coin.price_change_percentage_24h < 0
          );
        }
        return true;
      });
  }, [coins, search, filter]);

  return (
    <div className="flex flex-row sm:flex-col gap-4 mb-5">
      <input
        type="text"
        placeholder="Please enter the search value"
        className="border rounded-lg px-4 py-2 w-full"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      <select
        value={filter}
        className="border rounded-lg px-4 py-2"
        onChange={(e) =>
          setFilter(e.target.value as "all" | "gainers" | "losers")
        }
      >
        <option value="all">All</option>
        <option value="gainers">Gainers</option>
        <option value="losers">Losers</option>
      </select>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCoins.map((coin) => (
          <Link href={`/coin/${coin.id}`} key={coin.id}>
            <div className="bg-white shadow-md rounded-xl p-4 cursor-pointer hover:shadow-lg transition">
              <CoinCard coin={coin} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
