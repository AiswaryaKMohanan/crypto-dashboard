import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import PriceChart from "@/app/components/PriceChart";
import StatCard from "@/app/components/StatCard";



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
    <div className="p-6 max-w-6xl mx-auto">
  <h1 className="text-3xl font-bold mb-2">
    {coin.name} ({coin.symbol.toUpperCase()})
  </h1>

  <p className="text-2xl font-semibold mb-6">
    ${coin.market_data.current_price.usd.toLocaleString()}
  </p>

  {/* Stats Grid */}
  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
    <StatCard
      label="Market Cap"
      value={`$${coin.market_data.market_cap.usd.toLocaleString()}`}
    />
    <StatCard
      label="24h Volume"
      value={`$${coin.market_data.total_volume.usd.toLocaleString()}`}
    />
    <StatCard
      label="Circulating Supply"
      value={coin.market_data.circulating_supply.toLocaleString()}
    />
    <StatCard
      label="24h Change"
      value={`${coin.market_data.price_change_percentage_24h.toFixed(2)}%`}
      positive={coin.market_data.price_change_percentage_24h > 0}
    />
  </div>

  <PriceChart data={history.prices} />
</div>
  );
}