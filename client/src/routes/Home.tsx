import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        |
        <Link to="/about">About</Link>
        |
        <Link to="/project">Project</Link>
        |
        <Link to="/blog">Blog</Link>
        |
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Home;