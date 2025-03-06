import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/public/images";

export default function Sidebar() {
  return (
    <div className="h-screen flex flex-col">
      <div className="p-6">
        <Link href="/" className="flex items-center mb-8">
          <Image src={Logo} alt="logo" width={120} height={40} priority />
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto px-6">
        <ul className="space-y-4">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/inspection-reports" className="hover:text-gray-300">
              Inspection Reports
            </Link>
          </li>
          <li>
            <Link href="/create-inspection" className="hover:text-gray-300">
              Create New Inspection
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="hover:text-gray-300">
              User Dashboard
            </Link>
          </li>
          <li>
            <Link href="/support" className="hover:text-gray-300">
              Support Center
            </Link>
          </li>
          <li>
            <button className="hover:text-gray-300">Logout</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
