

// import { useState } from "react";

// const SignIn = () => {
//   const [email, setEmail] = useState<string>(""); // TypeScript: email state
//   const [password, setPassword] = useState<string>(""); // TypeScript: password state
//   const [error, setError] = useState<string>("");



//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Simple email and password validation (replace with actual authentication logic)
//     if (email === "user@example.com" && password === "password123") {
//       alert("Login Successful!");
//     } else {
//       setError("Invalid credentials!");
//     }
//   };

//   return (
//     <div className="sign-in">
//       <h1>Sign In</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//             required
//             className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
//           />
//         </div>
//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter your password"
//             required
//             className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
//           />
//         </div>
//         {error && <p>{error}</p>}
//         <button type="submit">Sign In</button>
//       </form>
//     </div>
//   );
// };

// export default SignIn;


import { useState } from "react";
import { useRouter } from "next/router"; // Import useRouter

const SignIn = () => {
  const [email, setEmail] = useState<string>(""); 
  const [password, setPassword] = useState<string>(""); 
  const [error, setError] = useState<string>("");
  const router = useRouter(); // Initialize useRouter

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simple email and password validation (replace with actual authentication logic)
    if (email === "user@example.com" && password === "password123") {
      alert("Login Successful!");
      // Redirect to home or dashboard page
      router.push("/dashboard");  // Replace with your desired route
    } else {
      setError("Invalid credentials!");
    }
  };

  return (
    <div className="sign-in">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
          />
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>} {/* Styled error message */}
        <button type="submit" className="mt-4 bg-[#FB2E86] text-white p-2 rounded-md">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
