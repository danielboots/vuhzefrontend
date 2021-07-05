export default function Header() {
  return (
    <div className="p-8  text-gray-400 tracking-wider bg-white ">
      <nav className="flex justify-between">
        <ul className="flex font-bold ml-6">
          <li>
            <a href=" text-body">EDM</a>
          </li>
        </ul>

        {/* right hand side */}
        <ul className="flex font-bold uppercase space-x-4  font-body">
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
        </ul>
      </nav>
    </div>
  );
}
