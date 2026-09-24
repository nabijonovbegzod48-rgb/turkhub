import Link from "next/link";

const navItems = [
  {
    name: "Bosh sahifa",
    href: "/",
  },
  {
    name: "Siyosat",
    href: "#siyosat",
  },
  {
    name: "Iqtisodiyot",
    href: "#iqtisodiyot",
  },
  {
    name: "Texnologiya",
    href: "#texnologiya",
  },
  {
    name: "Sport",
    href: "#sport",
  },
  {
    name: "Madaniyat",
    href: "#madaniyat",
  },
  {
    name: "Jamiyat",
    href: "#jamiyat",
  },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="site-container navbar-inner">
        <div className="nav-links">
          {navItems.map((item) => (
            <Link href={item.href} key={item.name}>
              {item.name}
            </Link>
          ))}

          <Link href="#categories" className="categories-link">
            Kategoriyalar
            <span>⌄</span>
          </Link>
        </div>

        <div className="navbar-note">
          MARKAZIY OSIYO <span>•</span> TURK DUNYOSI
        </div>
      </div>
    </nav>
  );
}