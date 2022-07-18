import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <h2>
            <span>Mi</span>Todo
          </h2>
        </Link>
      </div>
      <Link className="new_task" to="/newtask">
        Add Task
      </Link>
    </div>
  );
};

export default Navbar;
