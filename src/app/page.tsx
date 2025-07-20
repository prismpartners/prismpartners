import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-10 sm:p-20">
      <div className="w-80">
        <img src="/6-4-01.png" alt="prismpartners banner" />
      </div>

      <div className="flex flex-col justify-center w-80">
        <div className="text-center underline decoration-wavy decoration-2 decoration-red-500 underline-offset-4 mb-4">
          This <Link href="/">site</Link> is currently under development
        </div>
        <img src="/eddsworld-animated.gif" />
      </div>

      <div className="font-semibold text-xl">
        <a href="https://git.io/typing-svg">
          <img
            src="https://readme-typing-svg.demolab.com?font=Inter&weight=600&size=24&pause=1000&color=FB2C36&width=435&lines=Building+your+dreams+1+step+at+a+time"
            alt="Typing SVG"
          />
        </a>
      </div>
    </div>
  );
}
