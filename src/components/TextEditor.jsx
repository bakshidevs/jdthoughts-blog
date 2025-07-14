
import MDEditor from "@uiw/react-md-editor";

import useMDEditor from "../store/mdStore";
import useThemeStore from "../store/themeStore";

export default function TextEditor() {
    const { theme } = useThemeStore()
    const { editorValue, setEditorValue } = useMDEditor();
    return (
        <div>
            <h1 className="font-bold text-3xl">TextEditor</h1>
            <MDEditor
                style={{
                    // minHeight: "600px"
                }}
                data-color-mode={theme}
                value={editorValue}
                onChange={setEditorValue}
            />
        </div>
    )
}
