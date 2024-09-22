import ProjectDetail from "@/components/ProjectDetail";

export default function ProjectDetailedDescription({ params }) {
  const { slug } = params;
  console.log(slug);
  return (
    <div>
      <ProjectDetail slug={slug} />
    </div>
  );
}
