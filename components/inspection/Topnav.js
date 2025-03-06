import Link from "next/link";

export default function TopNav() {
  return (
    <div className="p-4">
      <div className="flex justify-end gap-4">
        <Link href="/account" className="text-gray-700 hover:text-gray-900">
          Account
        </Link>
      </div>
    </div>
  );
}
