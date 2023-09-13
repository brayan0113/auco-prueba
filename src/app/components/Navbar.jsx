import Link from 'next/link';

const navLinks = [
  { name: 'Home', route: '/' },
  { name: 'Sobre mi', route: '/about' },
];

function Navbar() {
  return (
    <nav className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <Link href={'/'}>
            <h1 className="rounded-md bg-indigo-600 font-bold px-3.5 py-2.5 text-white shadow-sm ">PostHub</h1>
          </Link>
          <ul className="flex space-x-4 ">
            {navLinks.map((link, i) => (
              <li key={i}>
                <Link className="text-gray-700 hover:bg-gray-300 rounded-md px-3 py-2 text-sm font-medium" href={link.route}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
