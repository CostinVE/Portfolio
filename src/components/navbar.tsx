import { Link } from "react-scroll"

interface NavItems {
    id: number;
    label: string;
    target: string;
}

const navItems : NavItems[] = [
    {id: 1, label: "Introduction", target : "introduction"},
    {id: 2, label: "Technologies", target : "technologies"},
    {id: 3, label: "Contact", target : "contact"},
    {id: 4, label: "Last Words", target : "closing"}
]

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 left-1/2 -translate-x-1/2 flex place-self-center w-fit bg-violet-200 text-white p-3 shadow-md rounded-lg z-10">
        <ul className="flex justify-center space-x-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.target}
                smooth
                duration={500}
                className="cursor-pointer hover:text-blue-700 hover:underline hover:font-bold"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )
}

export default Navbar