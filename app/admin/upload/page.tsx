"use client"

import { useState } from "react"
import { CldUploadWidget } from "next-cloudinary"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Upload, CheckCircle2, AlertCircle, LayoutGrid, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { InteractiveGrid } from "@/components/ui/interactive-grid"

export default function AdminUploadPage() {
    const [status, setStatus] = useState<"idle" | "uploading" | "success" | "error">("idle")
    const [isAuthorized, setIsAuthorized] = useState(false)
    const [password, setPassword] = useState("")

    const handleAuth = (e: React.FormEvent) => {
        e.preventDefault()
        // Simple password for client (can be changed in env)
        if (password === "john2024") {
            setIsAuthorized(true)
        } else {
            alert("Unauthorized access.")
        }
    }

    if (!isAuthorized) {
        return (
            <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-md bg-white rounded-[2.5rem] p-12 border border-slate-200 shadow-xl text-center"
                >
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-8">
                        <Upload className="w-8 h-8" />
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">Admin Gateway</h1>
                    <p className="text-slate-500 font-medium mb-8">Enter access code to initialize upload protocol.</p>

                    <form onSubmit={handleAuth} className="space-y-4">
                        <input
                            type="password"
                            placeholder="Access Code"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all font-semibold"
                        />
                        <Button className="w-full py-7 rounded-xl font-bold bg-blue-600 hover:bg-blue-700">Verify Identity</Button>
                    </form>
                </motion.div>
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-white pt-32 pb-24 relative overflow-hidden">
            <InteractiveGrid className="opacity-20" />

            <div className="container-large relative z-10">
                <div className="max-w-4xl mb-16">
                    <Link href="/gallery" className="flex items-center gap-2 text-slate-400 font-bold uppercase tracking-widest text-xs mb-8 hover:text-blue-600 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to project archive
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1] mb-6">
                        Media <span className="text-blue-600">Sync.</span>
                    </h1>
                    <p className="text-xl text-slate-500 font-medium leading-relaxed">
                        Upload and deploy new project photography directly to the global gallery matrix.
                    </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-[3rem] p-12 md:p-24 text-center">
                    <div className="max-w-xl mx-auto">
                        <CldUploadWidget
                            uploadPreset="1bb8c3061a2f5e11dc5855818d6ccd"
                            onSuccess={(result) => {
                                setStatus("success")
                                console.log("Upload Success:", result)
                            }}
                            onError={(error) => {
                                setStatus("error")
                                console.log("Upload Error:", error)
                            }}
                            options={{
                                folder: "gallery",
                                sources: ["local", "camera"],
                                multiple: true,
                                styles: {
                                    palette: {
                                        window: "#FFFFFF",
                                        windowBorder: "#90A0B3",
                                        tabIcon: "#2563EB",
                                        menuIcons: "#5A616A",
                                        textDark: "#000000",
                                        textLight: "#FFFFFF",
                                        link: "#2563EB",
                                        action: "#2563EB",
                                        inactiveTabIcon: "#0E2F5A",
                                        error: "#F44235",
                                        inProgress: "#0078FF",
                                        complete: "#20B832",
                                        sourceBg: "#E4EBF1"
                                    }
                                }
                            }}
                        >
                            {({ open }) => {
                                return (
                                    <button
                                        onClick={() => {
                                            setStatus("uploading")
                                            open()
                                        }}
                                        className="group relative w-full aspect-square md:aspect-[16/9] bg-white border-2 border-dashed border-slate-200 rounded-[2.5rem] flex flex-col items-center justify-center gap-6 hover:border-blue-600 hover:bg-blue-50/50 transition-all duration-500"
                                    >
                                        <div className="w-20 h-20 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                            <Upload className="w-10 h-10" />
                                        </div>
                                        <div>
                                            <p className="text-xl font-bold text-slate-900 mb-2">Deploy New Media</p>
                                            <p className="text-sm text-slate-400 font-semibold tracking-wide">Select from device or capture via camera</p>
                                        </div>
                                    </button>
                                );
                            }}
                        </CldUploadWidget>

                        <div className="mt-12 flex items-center justify-center gap-8">
                            {status === "success" && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex items-center gap-3 text-green-600 font-bold"
                                >
                                    <CheckCircle2 className="w-6 h-6" /> Data packet synchronized successfully.
                                </motion.div>
                            )}
                            {status === "error" && (
                                <div className="flex items-center gap-3 text-red-600 font-bold">
                                    <AlertCircle className="w-6 h-6" /> Transfer protocol failed.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
