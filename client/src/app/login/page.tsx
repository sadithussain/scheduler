import Link from "next/link";

const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50">
      <main className="w-full max-w-md px-4">
        <form className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-8 shadow-lg">
          <h1 className="w-full flex justify-center text-2xl font-bold">
            Login to your Account
          </h1>

          <div className="flex flex-col gap-1">
            <label className="text-lg font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="text-lg font-normal border rounded-md p-1.5"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-lg font-medium">Password</label>
            <input
              type="password"
              name="password"
              required
              className="text-lg font-normal border rounded-md p-1.5"
            />
          </div>

          <button
            type="submit"
            className="font-bold text-md border rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-800 hover:cursor-pointer w-fit self-center"
          >
            Login
          </button>

          <section className="flex justify-center">
            <p>
              Need to make an account?{" "}
              <Link
                href="/register"
                className="underline font-medium text-blue-500"
              >
                Register
              </Link>
            </p>
          </section>
        </form>
      </main>
    </div>
  );
};

export default Login;
