
import { Link } from "react-router";

const NotFound = () => {
  

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
        <h1 className="text-6xl font-bold mb-4 text-white">404</h1>
        <p className="text-xl text-white/80 mb-6">Oops! Page not found</p>
        <p className="text-white/60 mb-8">The page you're looking for doesn't exist.</p>
        <div className="space-y-4">
          <Link 
            to="/" 
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Return to Home
          </Link>
          <div className="text-white/60">
            <span>Need an account? </span>
            <Link 
              to="/login" 
              className="text-purple-300 hover:text-purple-200 underline font-medium transition-colors"
            >
              Login here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
