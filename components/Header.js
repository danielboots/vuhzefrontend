export default function Header() {
  return (
    <div className="p-8  text-gray-500 tracking-wider ">
      <nav className="flex justify-between">
        <ul className="flex font-bold ml-6">
          <li>
            <a href="">EDM</a>
          </li>
        </ul>

        {/* right hand side */}
        <ul className="flex font-bold uppercase space-x-4 ">
          <li>
            <a href="" className="mr-4 hover:text-indigo-200 ">
              Home
            </a>
          </li>
          <li>
            <a href="" className="mr-4  hover:text-indigo-200">
              About
            </a>
          </li>
          <li>
            <a href="" className="mr-4 hover:text-indigo-200">
              Services
            </a>
          </li>
          <li>
            <a href="" className="mr-4 hover:text-indigo-200">
              Contact
            </a>
          </li>
          <li>
            <a href="" className="mr-4 hover:text-indigo-200">
              Team
            </a>
          </li>
          <li>
            <a href="" className="mr-4 hover:text-indigo-200">
              Premium
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
