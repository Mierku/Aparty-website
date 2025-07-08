import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

const saltRounds = 12;
export async function POST(req: NextRequest) {
  try {
    const { email, password, name } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "邮箱和密码是必需的" },
        { status: 400 },
      );
    }

    // 检查用户是否已存在
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json({ error: "该邮箱已被注册" }, { status: 400 });
    }

    // 加密密码
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // 创建新用户
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      {
        message: "注册成功",
        user: { id: user.id, email: user.email, name: user.name },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("注册错误:", error);
    return NextResponse.json({ error: "注册失败" }, { status: 500 });
  }
}
