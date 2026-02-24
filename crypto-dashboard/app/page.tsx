import CoinCard from "./components/CoinCard";
import Navbar from "./components/Navbar";
import { fetchCoins } from "./services/api";

export default async function Home() {
  const coins = await fetchCoins()
  return (
    <div>
      <main className=" bg-white dark:bg-black sm:items-start">
        <Navbar />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h2 className="text-2xl font-semibold">
          Market Overview
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coins.map((coin)=>{
            return(<div key={coin.id}>
              <CoinCard coin={coin}></CoinCard>
            </div>)
          })}
        </div>
        </div>
      </main>
    </div>
  );
}
