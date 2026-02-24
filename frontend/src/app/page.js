import Image from "next/image";

export default function Home() {
  return (

    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-24 px-10 bg-white dark:bg-black sm:items-start">

        {/* Logo */}
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

        {/* Intro */}
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            🚀 Feature Branch: Home UI Update
          </h1>

          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            This page was updated on a separate Git branch to demonstrate
            version control, collaboration, and safe feature development.
          </p>

          <p className="text-sm text-zinc-500">
            👩‍💻 Developed by: <span className="font-medium">Reetika</span>
          </p>
        </div>

        {/* New Feature Card */}
        <div className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">🌿 What’s New?</h2>

          <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-1">
            <li>Created a new Git branch</li>
            <li>Updated the homepage UI</li>
            <li>Ready for pull request & merge</li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row w-full">
          <a
            className="flex h-12 w-full items-center justify-center rounded-full bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black"
            href="https://github.com"
            target="_blank"
          >
            View Repository
          </a>

          <a
            className="flex h-12 w-full items-center justify-center rounded-full border dark:border-white"
            href="https://nextjs.org/docs"
            target="_blank"
          >
            Next.js Docs
          </a>
        </div>

      </main>
    </div>

  );
}