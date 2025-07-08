import NextAuth from "next-auth";
// import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import { ProxyAgent, setGlobalDispatcher } from "undici";

// import bcrypt from "bcryptjs";
// 国内本地开发代理
if (process.env.HTTPS_PROXY) {
  const dispatcher = new ProxyAgent(process.env.HTTPS_PROXY);
  setGlobalDispatcher(dispatcher);
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Google],
  callbacks: {
    // async signIn({ user, account, profile }) {
    //   // Google OAuth 登录时的处理
    //   if (account?.provider === "google") {
    //     const existingUser = await prisma.user.findUnique({
    //       where: { email: user.email! },
    //     });

    //     if (!existingUser) {
    //       // 如果用户不存在，创建新用户
    //       await prisma.user.create({
    //         data: {
    //           email: user.email!,
    //           name: user.name,
    //           image: user.image,
    //           emailVerified: new Date(),
    //         },
    //       });
    //     }
    //   }
    //   return true;
    // },
    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },

  session: {
    strategy: "jwt",
  },
});
