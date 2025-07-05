import Link from "next/link";
import Image from "next/image";
import React from "react";

const header = () => {
  return (
    <header className="border-border flex h-16 items-center justify-between border-b-1 border-b-[#646464] px-12">
      <div className="flex items-center justify-between gap-8">
        <div className="px-4 py-2">
          <img src="/logo.svg" alt="Aparty" className="h-6" />
        </div>
        <nav className="flex items-center gap-4 text-sm font-bold">
          <Link href="/">主页</Link>
          <Link href="/about">功能</Link>
          <Link href="/price">定价</Link>
          <Link href="/contact">关于</Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/login">登录</Link>
        <Link href="/register">注册</Link>
      </div>
    </header>
  );
};

export default header;
