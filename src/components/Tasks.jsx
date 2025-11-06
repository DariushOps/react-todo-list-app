import NewTask from "./NewTask.jsx";
export default function Tasks({ onAdd, onDelete, tasks }) {
  return (
    <section>
      <h2 className="font-bold text-2xl mb-4 text-stone-700">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="my-4 text-stone-700">
          This project does not any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="rounded-md p-4 mt-8 bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => onDelete(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
