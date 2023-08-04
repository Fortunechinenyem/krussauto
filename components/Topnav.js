import Link from "next/link";

export default function TopNav() {
  return (
    <div className=" p-4 flex gap-4">
      {/* <div>
        <Link href="/">Car Inspection Dashboard</Link>
      </div> */}
      <div className="">
        <Link href="/account" className="hover:text-gray-300">
          Account
        </Link>
      </div>
    </div>
  );
}
