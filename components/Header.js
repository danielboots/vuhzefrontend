import Link from "next/link";

export default function Header() {
  return (
    <div className="py-4 px-6  text-gray-700 tracking-tight bg-gray-900  sticky top-0 z-50 ">
      <nav className="flex justify-between relative">
        <ul className="flex ml-6">
          <li className="font-body font-black tracking-tighter text-gray-200 text-2xl">
            <a href="/">EDM</a>
          </li>
        </ul>

        {/* right hand side */}
        <ul className="flex  uppercase space-x-8  font-body  font-bold tracking-widest text-gray-200  mr-6">
          <Link href="/">
            <a>Index</a>
          </Link>
          <Link href="/service">
            <a>Services</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
