import { getPortfolioDetails } from "@/_actions/postAction";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Main from "@/components/Main";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default async function Home() {
  const res = await getPortfolioDetails();
  console.log(res.name[0].name);
  const skills = res.name[0].skills ?? null;
  const projects = res.name[0].projects ?? null;
  const about = res.name[0].about ?? null;
  const email = res.name[0].email ?? null;
  return (
    <div>
      <Main
        firstName={res.name[0].firstname ?? "Milind"}
        description={res.name[0].description ?? "Decription not found...."}
        github={res.name[0].github ?? "/"}
        linkedin={res.name[0].linkedIn ?? "/"}
        email={email}
      />
      <About about={about} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact
        github={res.name[0].github ?? "/"}
        linkedin={res.name[0].linkedIn ?? "/"}
        email={email}
      />
    </div>
  );
}
