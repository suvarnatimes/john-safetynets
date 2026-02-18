"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Something went wrong!</h2>
            <p className="text-slate-500 mb-8 max-w-md mx-auto">
                {error.message || "An unexpected error occurred."}
            </p>
            <div className="flex gap-4">
                <Button onClick={() => reset()} variant="outline">
                    Try again
                </Button>
                <Button onClick={() => window.location.reload()}>
                    Reload Page
                </Button>
            </div>
        </div>
    )
}
