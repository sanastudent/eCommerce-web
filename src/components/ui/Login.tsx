



// /src/app/login/Login.tsx
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add logic to handle login
    if (email === "user@example.com" && password === "password123") {
      alert("Login Successful!");
      // Redirect logic can be added here
    } else {
      alert("Invalid credentials");
    }
  };

  return (
<>
<div className="w-full h-[286px] bg-[#F6F5FF] flex items-center pl-4 sm:pl-8 md:pl-16 ">
       <div className="font-josefin text-left ml-16">
       <h1 className="text-3xl sm:text-3xl md:text-3xl font-semibold">My Account</h1>
        <p className="mt-2 text-xsm sm:text-base md:text-lg">
        Home . Pages,   <span className="text-[#FB2E86]">My Account</span>
      </p>
      </div>
      </div>


    {/* // login area  */}
    <div className="max-w-sm mx-auto p-6 mt-28">
      <h1 className="text-2xl text-center font-bold mb-4">Login</h1>
      <p className='text-sm text-[#8A8FB9] text-center mb-5'>Please login using account detail below</p>
      <form onSubmit={handleLogin} className="space-y-4">

     {/* email section */}
<div>
  <label htmlFor="email" className="block text-sm font-medium">Email</label>
  <input
    id="email"
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
    placeholder="Enter your email" // Add placeholder here
    className="w-full p-2 border border-gray-300 rounded-md"
  />
</div>


        {/* password section */}

        <div>
          <label htmlFor="password" className="block text-sm font-medium"  >Password</label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password" 
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <div
              className="absolute right-2 top-2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </div>
          </div>
        </div>

          <p className='text-[#8A8FB9] text-sm'>Forgot your Password</p>
        <button type="submit" className="w-full bg-[#FB2E86] text-white py-2 rounded-md">
          Sign In
        </button>
        <p className='text-[#8A8FB9] text-sm'>Don&apos;t have an account?Create account</p>
      </form>
    </div>

    </>
  );
};

export default Login;
