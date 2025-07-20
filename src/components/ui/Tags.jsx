export default function Tags({ text, className = '' }) {
    return (
        <span className={`bg-gradient-to-r from-cyan-500/50 via-blue-500/50 to-pink-500/50 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 text-gray-100 text-xs font-medium me-2 px-2.5 py-1 rounded-full ${className}`}>
            {text}
        </span>
    )
}