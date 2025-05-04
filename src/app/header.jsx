"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TextEffect } from "@/components/ui/text-effect"
import Link from "next/link"

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div>
          <Avatar className="h-24 w-24">
            <AvatarImage className="object-cover select-none pointer-events-none" src="/profile.jpg" sizes="" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <Link href="/" className="font-medium text-black dark:text-white">
            Shardul Vanage
          </Link>
          <TextEffect as="p" preset="fade" per="char" className="text-zinc-600 dark:text-zinc-500" delay={0.5}>
            Frontend Developer
          </TextEffect>
        </div>
      </div>
    </header>
  )
}
