import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const RootProject = () => {
  return (
    <div>
      <div><Link to="/">Home</Link></div>
      -
      <NavLink to="/project/todo">Project List</NavLink>
      -
      <Outlet />
    </div>
  );
};

export default RootProject;