
import MDEditor from "@uiw/react-md-editor";

import useMDEditor from "../store/mdStore";

export default function TextEditor() {
    const {editorValue, setEditorValue} = useMDEditor();
    return (
        <div>
            <h1 className="font-bold text-3xl">TextEditor</h1>
            <MDEditor value={editorValue} onChange={setEditorValue} />
        </div>
    )
}
