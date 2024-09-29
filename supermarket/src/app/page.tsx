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
    </div>
  );
}
