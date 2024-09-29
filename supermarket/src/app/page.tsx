import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav className="flex justify-center border p-3 m-4 border-l-transparent border-r-transparent">
        <ul className="flex flex-row space-x-9">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/pages" className="hover:underline">Pages</Link></li>
          <li><Link href="/about" className="hover:underline">About us</Link></li>
          <li><Link href="/offer" className="hover:underline">Offer of the Month</Link></li>
        </ul>
      </nav>
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
