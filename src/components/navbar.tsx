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
  // Function to programmatically scroll to a section
  const scrollTo = (target: string) => {
    scroller.scrollTo(target, {
      duration: 100, // Duration of the scroll in milliseconds
      delay: 0, // Delay before the scroll starts
      smooth: "easeInOutQuart", // Smooth scrolling effect
      offset: -80, // Adjust for fixed navbar height
    });
  };

  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 flex place-self-center w-fit bg-violet-100 text-black p-3 shadow-md rounded-lg z-10">
      <ul className="flex justify-center space-x-6">
        {navItems.map((item) => (
          <li
            key={item.id}
            onClick={() => scrollTo(item.target)} // Call scrollTo function on click
            className="cursor-pointer hover:text-blue-600 hover:font-bold"
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;