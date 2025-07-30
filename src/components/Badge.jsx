import { cn } from "../lib/utils";

export default function Badge({ blog }) {
    const colorMap = {
        tech: {
            categoryButton: "text-purple-300 border-purple-600 bg-purple-900/20",
        },
        story: {
            categoryButton: "text-blue-300 border-blue-600 bg-blue-900/20",
        },
        poetry: {
            categoryButton: "text-pink-300 border-pink-600 bg-pink-900/20",
        },
    };

    const { categoryButton } = colorMap[blog.category] || {
        categoryButton: "text-gray-300 border-gray-600 bg-gray-900/20",
    }
    return (
        <button className={cn(`text-sm font-medium absolute top-2 left-2 px-2 rounded-xl border`, categoryButton)}>
            {blog.category.slice(0, 1).toUpperCase() + blog.category.slice(1)}
        </button>
    )
}
