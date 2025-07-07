

export default function Badge() {
    const colorMap = {
        tech: {
            cardBody: "border-purple-200 dark:border-purple-400/40 dark:bg-purple-950/20",
            categoryButton: "text-purple-100 border-purple-600 bg-purple-900/20",
        },
        story: {
            cardBody: "border-blue-200 dark:border-blue-400/40 dark:bg-blue-950/20",
            categoryButton: "text-blue-100 border-blue-600 bg-blue-900/20",
        },
        poetry: {
            cardBody: "border-pink-200 dark:border-pink-400/40 dark:bg-pink-950/20",
            categoryButton: "text-pink-100 border-pink-600 bg-pink-900/20",
        },
    };

    const { cardBody, categoryButton } = colorMap[blog.category] || {
        cardBody: "border-gray-200 dark:border-gray-400/40 dark:bg-gray-950/20",
        categoryButton: "text-gray-100 border-gray-600 bg-gray-900/20",
    }
    return (
        <button className={`text-sm font-medium absolute top-2 left-2 ${categoryButton} px-2 rounded-xl border`}>
            {blog.category.slice(0, 1).toUpperCase() + blog.category.slice(1)}
        </button>
    )
}
