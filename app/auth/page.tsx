import { AuthForm } from "./components/auth-form";
import { Snowfall } from "./components/snowfall";

export default function AuthPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-950 flex items-center justify-center p-4">
      <Snowfall />
      <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-blue-200">Sign in to continue to your account</p>
        </div>
        <AuthForm />
      </div>
    </main>
  );
}