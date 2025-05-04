"use client"
import { ExternalLink, Monitor, Info, XIcon } from "lucide-react"
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from "@/components/ui/morphing-dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { useState } from "react"

export function ProjectShowcase({ name, description, link, image, video, technologies = [] }) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <MorphingDialog
      transition={{
        type: "spring",
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <div className="group relative overflow-hidden rounded-xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset transition-all duration-300 hover:shadow-md dark:bg-zinc-950/40 dark:ring-zinc-800/50">
          {image ? (
            <Image
              src={image || "/placeholder.svg"}
              alt="preview-img"
              width={300}
              height={200}
              className="aspect-video w-full cursor-zoom-in rounded-xl"
            />
          ) : (
            <div className="aspect-video w-full cursor-zoom-in rounded-xl overflow-hidden">
              <Image
                src={"/placeholder.svg?height=400&width=600"}
                alt={name}
                width={600}
                height={400}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          )}
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative max-h-[90vh] w-[90vw] max-w-5xl overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-zinc-900">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b p-4 dark:border-zinc-700">
              <h2 className="text-xl font-medium">{name}</h2>
              <div className="flex items-center gap-2">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-12 inline-flex items-center gap-1 rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
                >
                  <ExternalLink className="h-4 w-4 " />
                  Visit Site
                </a>
              </div>
            </div>

            <Tabs defaultValue="preview" className="flex h-[calc(90vh-70px)] flex-col">
              <TabsList className="mx-4 mt-2 justify-start">
                <TabsTrigger value="preview" className="flex items-center gap-1.5">
                  <Monitor className="h-4 w-4" />
                  Preview
                </TabsTrigger>
                <TabsTrigger value="details" className="flex items-center gap-1.5">
                  <Info className="h-4 w-4" />
                  Details
                </TabsTrigger>
              </TabsList>

              <TabsContent value="preview" className="flex-1 overflow-hidden p-0 data-[state=active]:flex-1">
                {isLoading && (
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="h-8 w-8 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-600"></div>
                  </div>
                )}
                <iframe
                  src={link}
                  title={name}
                  className={`h-full w-full border-0 ${isLoading ? "opacity-0" : "opacity-100"}`}
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                  loading="lazy"
                  onLoad={() => setIsLoading(false)}
                />
              </TabsContent>

              <TabsContent value="details" className="flex-1 overflow-auto p-6 data-[state=active]:flex-1">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="mb-3 text-lg font-medium">Project Overview</h3>
                    <p className="text-zinc-700 dark:text-zinc-300">{description}</p>

                    {technologies.length > 0 && (
                      <>
                        <h3 className="mb-3 mt-6 text-lg font-medium">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                          {technologies.map((tech) => (
                            <span
                              key={tech}
                              className="inline-flex rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  <div>
                    {video ? (
                      <video src={video} autoPlay loop muted className="aspect-video w-full rounded-xl" />
                    ) : (
                      <Image
                        src={image || "/placeholder.svg?height=400&width=600"}
                        alt={name}
                        width={600}
                        height={400}
                        className="rounded-lg object-cover"
                      />
                    )}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          {/* Fixed position for X button to ensure it works properly */}
          <MorphingDialogClose className="absolute right-4 top-4  flex h-8 w-8 items-center justify-center rounded-full bg-white p-1.5 text-zinc-500 shadow-md transition-colors hover:text-zinc-900 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100">
            <XIcon className="h-5 w-5" />
          </MorphingDialogClose>
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}