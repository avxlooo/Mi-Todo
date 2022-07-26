import { Link } from "react-router-dom";

const Task = ({ to_do, time, set_reminder, id }) => {
  return (
    <div className="task">
      <Link to={`/${id}`}>
        <h3>{to_do}</h3>
      </Link>

      <div className="sub-section">
        <p>{time}</p>
        {set_reminder ? <small className="reminder">Reminder</small> : ""}
      </div>
    </div>
  );
};

export default Task;
