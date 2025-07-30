import { Check, UploadCloud, X } from 'lucide-react';
import { useState } from 'react';
import useBlogStore from '../store/blogStore';
import useEditorStore from '../store/editorStore';

export default function ThumbnailUploader() {
	const { setStateValue, blogTitle, thumbnailURL } = useEditorStore();
	const { uploadThumbnail } = useBlogStore();

	const [thumbnail, setThumbnail] = useState({
		thumbnailFile: null,
		showButtons: false,
	});

	// Upload the selected thumbnail file and update the editor state
	const handleThumbnailUpload = async () => {
		let thumbnailUrl;
		if (thumbnail.thumbnailFile) {
			thumbnailUrl = await uploadThumbnail(thumbnail.thumbnailFile);
		}
		if (thumbnailUrl) {
			setStateValue({ name: "thumbnailURL", value: thumbnailUrl });
		}
		setThumbnail({ thumbnailFile: null, showButtons: false });
	};

	// Handle file selection
	const handleChange = (e) => {
		if (e.target.files && e.target.files[0]) {
			setThumbnail({
				thumbnailFile: e.target.files[0],
				showButtons: true,
			});
		}
	};

	return (
		<div className="bg-purple-500/10 dark:bg-purple-500/20 mb-3 rounded-md flex justify-center items-center p-4 text-purple-500 dark:text-purple-100 border-2 border-purple-500/30 dark:border-purple-500/40">
			{thumbnail.thumbnailFile ? (
				<div className="relative flex gap-3">
					<img
						className="max-h-96 rounded-md"
						src={URL.createObjectURL(thumbnail.thumbnailFile)}
						alt={blogTitle}
					/>
					<div className="flex flex-col justify-between">
						<button
							onClick={handleThumbnailUpload}
							className="bg-green-500 hover:bg-green-600 p-1 rounded-md"
						>
							<Check />
						</button>
						<button
							className="bg-red-500 hover:bg-red-600 p-1 rounded-md"
							onClick={() =>
								setThumbnail({ thumbnailFile: null, showButtons: false })
							}
						>
							<X />
						</button>
					</div>
				</div>
			) : thumbnailURL ? (
				<img className="max-h-96 rounded-md" src={thumbnailURL} alt={blogTitle} />
			) : (
				<label
					htmlFor="blog-thumbnail"
					className="rounded-md border-2 border-dotted border-purple-500 flex flex-col items-center p-8 cursor-pointer"
				>
					<UploadCloud />
					<p className="text-accent font-semibold">Click to browse or drag & drop</p>
					<p className="text-sm text-secondary/50 dark:text-primary/50">PNG, JPG, GIF</p>
					<input
						id="blog-thumbnail"
						className="hidden"
						type="file"
						onChange={handleChange}
					/>
				</label>
			)}
		</div>
	);
}
