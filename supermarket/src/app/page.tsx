import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="flex justify-center flex-col items-center space-y-2 mb-36"
            style={{ height:300}}>
        <h1 className="text-6xl font-mono">New Day, New Thing</h1>
        <p className="max-w-xl text-center p-4">Welcome to SuperMarketPlace! Your one-stop shop for fresh produce, everyday essentials, and weekly offers.</p>
        <button className="w-56 text-blue-500 border border-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition-colors duration-300">
          <Link href="">Shop Now!</Link>
          </button>
      </main>
    </div>
  );
}
