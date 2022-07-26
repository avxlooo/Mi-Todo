import { useParams } from "react-router-dom";
import useFetch from "../Custom hook/useFetch";

const TaskDetails = () => {
  const { id } = useParams();
  const { data, fetching } = useFetch("http://localhost:8080/activities/" + id);
  return (
    <div className="task-details">
      {fetching && <div>Fetching data...</div>}
      {data && (
        <div className="content">
          <h3>{data.to_do}</h3>
          <p>{data.body}</p>
          <button className="done">Delete Task</button>
          <button className="set">
            {data.set_reminder ? `set reminder off` : `set reminder on`}
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskDetails;
