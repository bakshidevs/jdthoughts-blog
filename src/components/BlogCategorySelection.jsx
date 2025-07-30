import { Option } from "lucide-react";
import useEditorStore from "../store/editorStore";


export default function BlogCategorySelection() {
  const { setStateValue } = useEditorStore();
  return (
    <div className="">
      <label htmlFor="category" className="block text-lg font-medium text-gray-700 dark:text-gray-300">Category</label>
      <select onChange={(e) => setStateValue({ name: "category", value: e.target.value })} id="category" className="mt-1 block w-full px-3 py-2 text-base border-2 border-purple-500/30 dark:border-purple-500/40 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md bg-purple-500/10 dark:bg-purple-500/20 text-gray-700 dark:text-gray-300">
        <option>Select a Category</option>
        <option>Tech</option>
        <option>Poetry</option>
        <option>Story</option>
      </select>
    </div>
  )
}
