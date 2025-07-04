import { createPortal } from "react-dom"



export default function LoadingScreen() {
  return (
    <div className="h-screen w-screen flex justify-center items-center z-10 backdrop-blur-2xl bg-black/20">
        This is loading screen!
    </div>
  )
}
