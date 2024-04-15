import Image from "next/image";
import Link from "next/link";

export default function MainHeader() {
  return (
    <header>
      <div className="px-5 flex items-center justify-between">
        <Link href="/">
          <div>
            <Image src="/Tiny Friends.svg" alt="logo" width={210} height={34} />
          </div>
        </Link>
        <Link href="/login">
          <div>
            <Image src="/Login.svg" alt="logo" width={94} height={34} />
          </div>
        </Link>
      </div>
    </header>
  );
}
