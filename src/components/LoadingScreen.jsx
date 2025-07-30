export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-center items-center min-h-screen backdrop-blur-2xl">
      <div className="relative w-64 h-64 flex justify-center items-center">
        {/* Base of the thought bubble */}
        <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full animate-pulse shadow-lg"></div>
        
        {/* Smaller bubbles to form the cloud shape */}
        <div className="absolute w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full top-8 left-8 animate-pulse [animation-delay:'-0.2s'] shadow-md"></div>
        <div className="absolute w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full top-16 right-4 animate-pulse [animation-delay:'-0.4s'] shadow-lg"></div>
        <div className="absolute w-16 h-16 bg-gradient-to-br from-cyan-400 to-green-500 rounded-full bottom-12 left-4 animate-pulse [animation-delay:'-0.6s'] shadow-md"></div>

        {/* A small bubble to complete the thought shape */}
        <div className="absolute w-8 h-8 bg-white/20 rounded-full bottom-8 right-20 animate-ping"></div>
      </div>
      
      <div className="mt-12 text-center">
        <h2 className="text-4xl font-extrabold text-white drop-shadow-lg">
          JDThoughts
        </h2>
        <p className="text-lg text-white/75 mt-3 animate-pulse tracking-wider">
          An idea is loading...
        </p>
      </div>
    </div>
  );
}