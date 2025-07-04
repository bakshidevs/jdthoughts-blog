import { Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
    const handleWriterInquiry = () => {
        window.location.href = 'mailto:bakshi@bakshidevs.co?subject=Writer Application&body=Hi, I would like to become a writer for your blog platform.';
    };
    return (
        <footer
            className="relative mt-20 backdrop-blur-lg bg-white/10 dark:bg-black/20 border-t border-white/20"
        >
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
                            JDThoughts
                        </h3>
                        <p className="text-white/80 mb-6 max-w-md">
                            A platform for developers to share stories, poetry, and technical insights.
                            Join our community of passionate writers and readers.
                        </p>
                        <button
                            onClick={handleWriterInquiry}
                            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium flex justify-center items-center p-3 rounded-md"
                        >
                            <Mail className="w-4 h-4 mr-2" />
                            Want to be a writer? Send us your work
                        </button>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Categories</h4>
                        <ul className="space-y-2">
                            <li><a href="/stories" className="text-white/80 hover:text-white transition-colors">Stories</a></li>
                            <li><a href="/poetry" className="text-white/80 hover:text-white transition-colors">Poetry</a></li>
                            <li><a href="/tech" className="text-white/80 hover:text-white transition-colors">Tech</a></li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
                        <div className="flex space-x-4">
                            <a
                                href="https://x.com/jyotidip90"
                                className="text-white/80 hover:text-white transition-colors"
                                aria-label="Twitter"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/jyotidip-barman-bb383a21"
                                className="text-white/80 hover:text-white transition-colors"
                                aria-label="LinkedIn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/20 mt-8 pt-8 text-center">
                    <p className="text-white/60">
                        &copy; 2025 <a href="https://github.com/bakshidevs" target="_blank">BakshiDevs</a>. Built with love using React, Tailwind CSS, Zustand and Appwrite.
                    </p>
                </div>
            </div>
        </footer>
    )
}
