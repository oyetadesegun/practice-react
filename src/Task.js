export const Task = (props) => {
  return (
    <div style={{ backgroundColor: props.completed ? "green" : "white" }}>
      <h1 style={{color:props.completed ? "white": "black"}}>{props.taskName}</h1>
      <button onClick={() => props.completeTask(props.id)}>
        {props.completed ? "Completed" : "✔️"}
      </button>
      <button onClick={() => props.deleteTask(props.id)}>❌</button>
    </div>
  );
};
