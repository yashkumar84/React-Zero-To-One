import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/zustand/useAuthStore";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { loginWithEmail } = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await loginWithEmail(email, password);
    navigate("/");
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-sm space-y-6">
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <Input
            placeholder="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button type="submit" className="w-full">
            Login
          </Button>
          <h1>
            Not have an Account <Link to={"/register"}>Register </Link>
          </h1>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
