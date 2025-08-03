import { Option } from "lucide-react";
import useEditorStore from "../store/editorStore";


export default function BlogCategorySelection() {
  const { category, setStateValue } = useEditorStore();
  return (
    <div className="">
      <label htmlFor="category" className="block text-lg font-medium text-gray-700 dark:text-gray-300">Category</label>
      <select name="category" value={category} onChange={(e) => setStateValue({ name: "category", value: e.target.value })} id="category" className="mt-1 block w-full px-3 py-2 text-base border-2 border-purple-500/30 dark:border-purple-500/40 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md bg-purple-500/10 dark:bg-purple-500/20 text-gray-700 dark:text-gray-300">
        <option value="">Select a Category</option>
        <option value="tech">Tech</option>
        <option value="poetry">Poetry</option>
        <option value="story">Story</option>
      </select>
    </div>
  )
}
