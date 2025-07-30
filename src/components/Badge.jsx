import { cn } from "../utils/cn";

export default function Badge({ blogCategory, categoryButton }) {
    
    return (
        <button className={cn(`text-sm font-medium absolute top-2 left-2 px-2 rounded-xl border`, categoryButton)}>
            {blogCategory.slice(0, 1).toUpperCase() + blogCategory.slice(1)}
        </button>
    )
}
