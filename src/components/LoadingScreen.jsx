import { motion } from "framer-motion"

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-center items-center min-h-screen min-w-full backdrop-blur-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-green-500 opacity-90 animate-gradient-move">
      <motion.div
        className="relative flex items-center justify-center mb-8"
        initial={{ scale: 0.8, opacity: 0.7 }}
        animate={{ scale: [0.8, 1.1, 0.95, 1], rotate: [0, 360], opacity: [0.7, 1] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-purple-400 via-cyan-400 to-pink-400 animate-spin-slow shadow-2xl blur-[2px]" />
        <div className="absolute w-16 h-16 rounded-full bg-white/20 dark:bg-black/20" />
        <div className="absolute w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 via-blue-400 to-green-400 opacity-80 animate-pulse" />
      </motion.div>
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent mb-2 drop-shadow-lg">
        Loading JDThoughts...
      </h2>
      <p className="text-lg text-white/80 dark:text-white/60 text-center animate-pulse">Bringing creativity to your screen</p>
    </div>
  )
}
