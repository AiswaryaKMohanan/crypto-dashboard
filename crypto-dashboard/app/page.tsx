import CoinCard from "./components/CoinCard";
import CoinList from "./components/CoinList";
import Navbar from "./components/Navbar";
import { fetchCoins } from "./services/api";

export default async function Home() {
  const coins = await fetchCoins();
  if (!coins) return <p className="text-red-500">Coin data not found</p>;
  return (
    <main>
      <Navbar />
      <div className="p-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Market Overview</h2>
        <CoinList coins={coins} />
      </div>
    </main>
  );
}
