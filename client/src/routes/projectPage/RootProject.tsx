import { Link, NavLink } from 'react-router-dom';

const RootProject = () => {
  return (
    <div>
      <div><Link to="/">Home</Link></div>

      <NavLink to="/project/todo">Project List</NavLink>
    </div>
  );
};

export default RootProject;