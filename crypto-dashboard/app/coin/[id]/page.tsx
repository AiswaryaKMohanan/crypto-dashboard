import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import PriceChart from "@/app/components/PriceChart";



interface PageProps {
  params: { id: string };
}


async function fetchCoinDetails(id: string) {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}`
  );

  if (!res.ok) return null;
  return res.json();
}




async function fetchCoinHistory(id: string) {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`
  );

  if (!res.ok) return null;
  return res.json();
}

export default async function CoinDetail(props: PageProps){
const { id } = await props.params;
  const coin = await fetchCoinDetails(id);
  const history = await fetchCoinHistory(id);

  if (!coin || !history) return notFound();

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">
        {coin.name} ({coin.symbol.toUpperCase()})
      </h1>

      <p className="mb-4">
        Current Price: ${coin.market_data.current_price.usd}
      </p>
      <PriceChart data={history.prices} />

      {/* Chart will go here tomorrow */}
    </div>
  );
}