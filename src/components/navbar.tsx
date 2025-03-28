import { scroller } from "react-scroll";

interface NavItems {
  id: number;
  label: string;
  target: string;
}

const navItems: NavItems[] = [
  { id: 1, label: "Introduction", target: "introduction" },
  { id: 2, label: "Technologies", target: "skillset" },
  { id: 3, label: "Projects", target: "projects" },
  { id: 4, label: "Contact", target: "contact" },
  { id: 5, label: "Last Words", target: "closing" },
];

const Navbar: React.FC = () => {
  const scrollTo = (target: string) => {
    scroller.scrollTo(target, {
      duration: 100, 
      delay: 0, 
      smooth: "easeInOutQuart", 
      offset: -80,
    });
  };

  return (
    <nav className="hidden fixed top-0 left-1/2 -translate-x-1/2 sm:flex place-self-center w-fit bg-gray-200 text-black p-3 shadow-md rounded-lg z-10">
      <ul className="flex justify-center space-x-6">
        {navItems.map((item) => (
          <p
            key={item.id}
            onClick={() => scrollTo(item.target)} 
            className="cursor-pointer hover:font-bold">
            {item.label}
          </p>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;