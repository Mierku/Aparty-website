import { signIn } from "@/lib/auth";

async function signInRequest() {
  "use server";
  await signIn("google");
}
export default function SignInBtn() {
  return <button onClick={signInRequest}>登录</button>;
}
