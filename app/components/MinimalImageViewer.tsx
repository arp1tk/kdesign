"use client"

import Image from "next/image"
import { Dialog, DialogContent, DialogOverlay, DialogClose } from "@/components/ui/dialog"
import { X } from "lucide-react"

export default function ImageViewerDialog({
  open,
  onOpenChange,
  imageSrc,
  alt,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  imageSrc: string
  alt?: string
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay />
      <DialogContent
        className="bg-white p-0 max-w-5xl w-full rounded-xl overflow-hidden shadow-xl"
        showCloseButton={false}
      >
        <div className="relative w-full h-[80vh]">
          <Image
            src={imageSrc}
            alt={alt || "Selected Image"}
            fill
            className="object-contain bg-white"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
          <DialogClose className="absolute top-4 right-4 bg-white/80 hover:bg-white text-black p-1 rounded-full shadow-md">
            <X className="w-5 h-5" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  )
}
