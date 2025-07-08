import { signIn } from "@/lib/auth";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button type="submit">登录</button>
    </form>
  );
}
