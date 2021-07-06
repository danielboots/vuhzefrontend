import Link from "next/link";

export default function Header() {
  return (
    <div className="p-8  text-gray-700 tracking-tight bg-white ">
      <nav className="flex justify-between">
        <ul className="flex ml-6">
          <li className="font-body font-black tracking-tighter text-gray-900 text-3xl">
            <a href="/">EDM</a>
          </li>
        </ul>

        {/* right hand side */}
        <ul className="flex  uppercase space-x-4  font-body  font-extrabold tracking-tight text-gray-600 ">
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
