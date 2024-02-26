import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="p-8 md:p-12 site-container">
      <nav>
        <ul>
          <li aria-label="site-logo">
            <Link href="/">
              <Image
                src={"/teknorix-logo.svg"}
                alt="Teknorix"
                width={215}
                height={50}
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
