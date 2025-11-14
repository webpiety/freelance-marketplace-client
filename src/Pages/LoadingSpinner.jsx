// LoadingSpinner.jsx
import React from "react";
import { motion } from "framer-motion";

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <motion.div
        className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
        animate={{ rotate: 360 }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
        style={{
          maskImage: "radial-gradient(circle, black 60%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle, black 60%, transparent 100%)",
        }}
      />
    </div>
  );
}
