import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <main className=" bg-white dark:bg-black sm:items-start">
        <Navbar />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h2 className="text-2xl font-semibold">
          Market Overview
        </h2>
        </div>
      </main>
    </div>
  );
}
