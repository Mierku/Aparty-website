import Link from "next/link";
import React from "react";
import { auth, signIn, signOut } from "@/lib/auth";
import Image from "next/image";

const header = async () => {
  const session = await auth();
  console.log(session);
  return (
    <header className="border-border flex h-16 items-center justify-between border-b-1 border-b-[#646464] px-12">
      <div className="flex items-center justify-between gap-8">
        <div className="px-4 py-2">
          <img src="/logo.svg" alt="Aparty" className="h-6" />
        </div>
        <nav className="flex items-center gap-4 text-lg font-bold">
          <Link href="/">主页</Link>
          <Link href="/about">功能</Link>
          <Link href="/price">定价</Link>
          <Link href="/contact">关于</Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        {session?.user ? (
          <>
            <div className="flex h-13 justify-between gap-3 rounded-full p-2">
              <img
                src={session.user.image ?? ""}
                alt="user"
                className="h-9 w-9 rounded-full"
              />
              <div className="grid gap-1">
                <span className="text-xs">
                  {session.user.name ?? session.user.email}
                </span>
                <span className="text-xs text-gray-500">
                  {session.user.email}
                </span>
              </div>
            </div>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button type="submit" className="cursor-pointer">
                注销
              </button>
            </form>
          </>
        ) : (
          <>
            <form
              action={async () => {
                "use server";
                await signIn("google");
              }}
            >
              <button type="submit">登录</button>
            </form>
          </>
        )}
      </div>
    </header>
  );
};

export default header;
