"use client"
import { motion } from "motion/react"
import { ProjectShowcase } from "./project-showcase"
import { PROJECTS } from "@/app/data" // Adjust the import path as needed

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

// You can add technologies to your projects if desired
const ENHANCED_PROJECTS = PROJECTS.map((project) => ({
  ...project,
  // Add an image property if you have screenshots
  image: project.image || "/placeholder.svg?height=400&width=600",
  // Add technologies if you want to display them
  technologies: project.technologies, // Example - customize for each project
}))

export function ProjectsSection() {
  return (
    <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
      <h3 className="mb-5 text-lg font-medium">Selected Projects</h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {ENHANCED_PROJECTS.map((project) => (
          <div key={project.id} className="space-y-2">
            <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
              <ProjectShowcase
                name={project.name}
                description={project.description}
                link={project.link}
               
                image={project.image}
                technologies={project.technologies}
              />
            </div>
            <div className="px-1">
              <a
                className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                {project.name}
                <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full"></span>
              </a>
              <p className="text-base text-zinc-600 dark:text-zinc-400"> {project.description.split('.')[0] + '.'}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
