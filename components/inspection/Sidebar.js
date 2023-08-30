import Link from "next/link";

import Image from "next/image";
import Logo from "../public/assets/images/logo.png";

export default function Sidebar() {
  return (
    <div className=" p-4 h-screen">
      <Link href="/" className="flex title-font font-medium items-center mb-7">
        <Image className="" src={Logo} alt="logo" width={110} priority />
      </Link>

      {/* Sidebar links */}
      <nav>
        <ul className="space-y-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/inspection-reports">Inspection Reports</Link>
          </li>
          <li>
            <Link href="/create-inspection">Create New Inspection</Link>
          </li>
          <li>
            <Link href="/dashboard">User Dashboard</Link>
          </li>
          <li>
            <Link href="/support">Support Center</Link>
          </li>
          <li>
            <button className="hover:text-gray-300">Logout</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
