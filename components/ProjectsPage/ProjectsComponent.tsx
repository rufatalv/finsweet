import { Project } from "@/graphcms";
import ProjectCard from "./ProjectCard";
import { useState } from "react";

export default function ProjectsComponent({ data }: { data: Project[] }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? data
      : data.filter((project) => project.category === selectedCategory);

  return (
    <div className="pt-12 pb-16 lg:pt-24 lg:pb-32 container px-4 lg:px-0 flex flex-col items-center gap-12">
      <ul className="flex flex-wrap text-center md:text-start font-medium mx-auto gap-2 md:gap-4 lg:gap-8 text-lg">
        <li
          className={`text-darkblue w-full md:w-auto cursor-pointer opacity-70 ${
            selectedCategory === "All" ? "text-royalblue" : ""
          }`}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </li>
        <li
          className={`text-darkblue w-full md:w-auto cursor-pointer opacity-70 ${
            selectedCategory === "UI Design" ? "text-royalblue" : ""
          }`}
          onClick={() => setSelectedCategory("UI Design")}
        >
          UI Design
        </li>
        <li
          className={`text-darkblue w-full md:w-auto cursor-pointer opacity-70 ${
            selectedCategory === "Webflow Design"
              ? "text-royalblue"
              : ""
          }`}
          onClick={() => setSelectedCategory("Webflow Design")}
        >
          Webflow Design
        </li>
        <li
          className={`text-darkblue w-full md:w-auto cursor-pointer opacity-70 ${
            selectedCategory === "Figma Design" ? "text-royalblue" : ""
          }`}
          onClick={() => setSelectedCategory("Figma Design")}
        >
          Figma Design
        </li>
      </ul>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {filteredProjects.map((project, idx) => (
          <ProjectCard key={idx} isProjectPage={true} data={project} />
        ))}
      </div>
    </div>
  );
}
