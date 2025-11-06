import noProjectImg from "../assets/no-projects.png";
import Button from "./Button.jsx";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        className="w-16 h-16 mx-auto object-contain"
        src={noProjectImg}
        alt="An empty task list"
      />
      <h2 className="text-xl font-bold my-4 text-stone-500">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject} title="Create New Project" />
      </p>
    </div>
  );
}
