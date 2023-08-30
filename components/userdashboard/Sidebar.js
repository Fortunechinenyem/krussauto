import Link from "next/link";

import Image from "next/image";
import Logo from "../../public/assets/images/logo.png";
import { AiOutlineHome } from "react-icons/ai";
import { FcInspection } from "react-icons/fc";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { FaBlog } from "react-icons/fa";
import { BsChat } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
export default function Sidebar() {
  return (
    <div className=" p-4 h-screen">
      <Link href="/" className="flex title-font font-medium items-center mb-7">
        <Image className="" src={Logo} alt="logo" width={110} priority />
      </Link>

      <nav>
        <ul className="space-y-4">
          <li>
            <Link
              href="/"
              className="flex gap-3 items-center py-3 hover:text-blue-1"
            >
              <AiOutlineHome width={22} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              href="/inspection"
              className="flex gap-3 items-center py-3 hover:text-blue-1"
            >
              <FcInspection width={22} />
              <span>Inspection</span>
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="flex gap-3 items-center py-3 hover:text-blue-1"
            >
              <MdOutlineHomeRepairService width={22} />
              <span>Services</span>
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="flex gap-3 items-center py-3 stroke-zinc-600 hover:text-blue-1 hover:stroke-blue-1"
            >
              <FaBlog width={18} height={27} />
              <span>Blog</span>
            </Link>
          </li>
          <li>
            <Link
              href="/forum"
              className="flex gap-3 items-center py-3 stroke-zinc-600 hover:text-blue-1 hover:stroke-blue-1"
            >
              <BsChat width={18} height={27} />
              <span>Forum</span>
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="flex gap-3 items-center py-3 stroke-zinc-600 hover:text-blue-1 hover:stroke-blue-1"
            >
              <MdOutlineSupportAgent width={18} height={27} />
              <span>Support</span>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex gap-3 items-center py-3 stroke-zinc-600 hover:text-blue-1 hover:stroke-blue-1"
            >
              <BiLogOut width={18} height={27} />
              <span>Logout</span>
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
