const Task = ({ to_do, time, set_reminder }) => {
  return (
    <div className="task">
      <h3>{to_do}</h3>
      <div className="sub-section">
        <p>{time}</p>
        {set_reminder ? <small className="reminder">Reminder</small> : ''}
      </div>
    </div>
  );
};

export default Task;
