import { useCallback, useState } from "react";
import Input from "@/components/Input";
import axios from "axios";

const Auth = () => {
  const [Email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        Email,
        name,
        password,
      });
    } catch (error) {
      console.log(error);
    }
  }, [Email, name, password]);

  return (
    <>
      <div className="relative h-full w-full bg-[url('./images/logo.png/') bg-no-repeat bg-fixed bg-cover">
        <div className="bg-black w-full h-full lg:bg-opacity-50"></div>
        <nav className="px-12 py-5 ">
          <img
            src="./images/logo.png/"
            alt="GFG logo imported from public directory"
          />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? "Sign In" : "Register an Account"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  label="Username"
                  onChange={(ev: any) => setName(ev.target.value)}
                  id="email"
                  type="email"
                  value={name}
                />
              )}
              <Input
                label="Email"
                onChange={(ev: any) => setEmail(ev.target.value)}
                id="email"
                type="email"
                value={Email}
              />

              <Input
                label="Password"
                onChange={(ev: any) => setPassword(ev.target.value)}
                id="password"
                type="password"
                value={password}
              />
            </div>
            <button
              onClick={register}
              className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
            >
              {variant === "login" ? "Login" : "Register an Account"}
            </button>
            <p className="text-neutral-500 mt-12">
              {variant === "login"
                ? "First Time Using Netflix ?"
                : "Already Have An Account ?"}
              <span
                className="text-white ml-1 hover:underline cursor-pointer"
                onClick={toggleVariant}
              >
                {variant === "login" ? "Create An Account" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* <h1>Hello World</h1> */}
    </>
  );
};

export default Auth;
