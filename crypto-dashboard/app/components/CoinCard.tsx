import { memo } from "react";
import { Coin } from "../types/types";
import Image from "next/image";

interface Props {
  coin: Coin;
}
function CoinCard({ coin }: Props) {
  const isPositive = coin.price_change_percentage_24h >= 0;

  return (
    <div className="bg-white  dark:bg-gray-800  shadow-md rounded-xl p-4 flex items-center justify-between hover:shadow-lg transition">
      <div className="flex items-center gap-4">
        {/* <img src={coin.image} alt={coin.name} className="w-10 h-10" /> */}
        <Image src={coin.image} alt={coin.name} width={40} height={40}  className="w-10 h-10 object-contain"/>
        <div>
          <h3 className="font-semibold">{coin.name}</h3>
          <p className="text-sm text-gray-500 uppercase dark:text-gray-400">{coin.symbol}</p>
        </div>
      </div>

      <div className="text-right">
        <p className="font-semibold">${coin.current_price.toLocaleString()}</p>
        <p
          className={`text-sm ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {coin.price_change_percentage_24h?.toFixed(2)}%
        </p>
      </div>
    </div>
  );
}

export default memo(CoinCard);
