import Button from "./Button.jsx";

export default function ProjectSideBar({
  onStartAddProject,
  projects,
  onSelectedProject,
  selectedProjectId,
}) {
  return (
    <aside className="w=1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl ">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200 ">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject} title="+ Add Project" />
      </div>
      <ul className="mt-6">
        {projects.map((project) => {
          let cssClasses = `my-1 w-full text-left text-stone-300 px-2 py-1 rounded-md 
            hover:text-stone-200 hover:bg-stone-800
            capitalize`;

          if (project.id === selectedProjectId) {
            cssClasses += " text-stone-200 bg-stone-800";
          } else {
            cssClasses += " text-stone-400";
          }

          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectedProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
