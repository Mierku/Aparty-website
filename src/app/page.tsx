import Header from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen p-6">
      <div className="grid h-72 flex-1 justify-center pt-12 text-center">
        <div className="mb-12 flex justify-center gap-4">
          <h1 className="text-6xl font-bold">
            <span>Aparty - 强力驱动的视频同步插件</span>
          </h1>
        </div>
        <div className="mb-12 flex items-center justify-between gap-12">
          <p className="text-lg">
            Aparty是一款强大的视频同步浏览器插件
            <br />
            它可以轻松的让你和朋友, 家人，爱人随时随地建立起一场线上观影。
          </p>
          <Image
            src="/images/image.png"
            alt="Aparty"
            width={700}
            height={500}
          />
        </div>

        <Button className="w-64" size="lg">
          安装Aparty插件
        </Button>
      </div>
    </main>
  );
}
