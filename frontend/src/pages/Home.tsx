import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Wand2 } from "lucide-react";

import { BACKEND_URL } from "../config";

export function Home() {
  const [prompt, setPrompt] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      navigate("/builder", { state: { prompt } });
    }
  };

  return (
    <div className="min-h-screen w-full bg-black text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/10 blur-3xl z-0" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20">
        {/* Left Section */}
        <motion.div
          className="w-full lg:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-3">
            <Wand2 className="w-8 h-8 text-blue-500" />
            <h1 className="text-3xl font-bold tracking-tight">
              Welcome to <span className="text-blue-500">TextWeb</span>
            </h1>
          </div>

          <h2 className="text-5xl font-extrabold leading-tight tracking-tight">
            Build websites with <br /> just a prompt.
          </h2>

          <p className="text-gray-300 text-lg max-w-md">
            No coding? No problem. Just describe what you want — and TextWeb will generate, preview, and let you edit your website instantly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g. A startup landing page with a dark theme and CTA button..."
              className="w-full h-28 p-4 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white py-3 px-6 rounded-lg font-semibold shadow-lg"
            >
              🚀 Generate Website
            </button>
          </form>
        </motion.div>

        {/* Right Section - Optional Illustration */}
        <motion.div
          className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
<img src="/web.svg" alt="TextWeb Hero" />


        </motion.div>
      </div>
    </div>
  );
}
