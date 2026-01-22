import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="margin-auto flex flex-col justify-center items-center h-screen gap-4">
      <p className="text-3xl">LoginPage</p>
      <p>
        you don&apos;t have an account yet?
        <Link
          className="mx-2 cursor-pointer underline color-white rounded "
          href="/register"
        >
          Signup Here
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
