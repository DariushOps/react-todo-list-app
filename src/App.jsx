import { useState } from "react";
import ProjectSideBar from "./components/ProjectSideBar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleStartAddProject() {
    setProjectState((pervState) => {
      return {
        ...pervState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectState((pervState) => {
      return {
        ...pervState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((pervState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...pervState,
        selectedProjectId: undefined,
        projects: [...pervState.projects, newProject],
      };
    });
  }

  function handleSelectedProject(id) {
    setProjectState((pervState) => {
      return {
        ...pervState,
        selectedProjectId: id,
      };
    });
  }

  function handleDeleteProject() {
    setProjectState((pervState) => {
      return {
        ...pervState,
        selectedProjectId: undefined,
        projects: pervState.projects.filter(
          (project) => project.id !== pervState.selectedProjectId
        ),
      };
    });
  }

  function handleAddTask(text) {
    setProjectState((pervState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: pervState.selectedProjectId,
        id: taskId,
      };
      return {
        ...pervState,
        tasks: [newTask, ...pervState.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectState((pervState) => {
      return {
        ...pervState,
        tasks: pervState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  const selectedProjectTasks = projectState.tasks.filter(
    (task) => task.projectId === projectState.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onTaskAdd={handleAddTask}
      onTaskDelete={handleDeleteTask}
      tasks={selectedProjectTasks}
    />
  );
  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSelectedProject={handleSelectedProject}
      />
      {content}
    </main>
  );
}

export default App;
