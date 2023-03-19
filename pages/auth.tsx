const Auth = () => {
  return (
    <>
      <div className="relative h-full w-full bg-[url('./images/logo.png') bg-no-repeat bg-fixed bg-cover">
        <div className="bg-black w-full h-full lg:bg-opacity-50">Hello</div>
      </div>
      <nav className="px-12 py-5 ">
        <img src="./public/images/logo.png" alt="Logo" className="h-12" />
      </nav>
      <div className="flex justify-center">
        <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
          <h2 className="text-white text-4xl mb-8 font-semibold">Sign In</h2>
          <div className="flex flex-col gap-4"></div>
        </div>
      </div>
      {/* <h1>Hello World</h1> */}
    </>
  );
};

export default Auth;
