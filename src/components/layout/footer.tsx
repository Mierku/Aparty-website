import Link from "next/link";
import Image from "next/image";
import React from "react";

const footer = () => {
  return (
    <footer className="bg-background/95 supports-[backdrop-filter]:bg-background/60 backdrop-blur">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Image src="/logo.png" alt="Aparty" width={100} height={100} />
            </Link>
            <p>© 2025 Aparty. All rights reserved.</p>
          </div>
        </div>
      </div>
      s
    </footer>
  );
};

export default footer;
