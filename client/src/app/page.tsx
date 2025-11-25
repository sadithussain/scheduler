import Link from "next/link";

const LandingPage = () => {
  return (
    <div>
      <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md shadow-lg">
        <div className="mx-auto flex h-25 max-w-5xl items-center justify-between px-4">
          <h2 className="text-3xl font-bold text-slate-900">AgendAI</h2>
          <div className="flex gap-4">
            <Link
              href="/login"
              className="text-lg font-medium text-slate-600 hover:text-slate-900 hover:cursor-pointer"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="text-lg font-medium text-slate-600 hover:text-slate-900 hover:cursor-pointer"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>
      <main>
        <section className="mx-auto w-full max-w-5xl px-4 py-32 text-center">
          <h1 className="text-6xl font-bold tracking-tighter leading-tight">
            Leverage AI to <br />
            speed up your workflow.
          </h1>
        </section>
      </main>
      <footer></footer>
    </div>
  );
};

export default LandingPage;
