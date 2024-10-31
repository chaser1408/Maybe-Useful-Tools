import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './routes/ErrorPage.tsx';
import About from './routes/aboutPage/About.tsx';
import RootProject from './routes/projectPage/RootProject.tsx';
import Blog from './routes/blogPage/Blog.tsx';
import Contact from './routes/contactPage/Contact.tsx';
import ProjectIndex from './routes/projectPage/ProjectIndex.tsx';
import TodoList from './routes/projectPage/todoList/TodoList.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  }, {
    path: "/project",
    element: <RootProject />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <ProjectIndex />,
          },
          {
            path: "/project/todo",
            element: <TodoList />
          }
        ]
      }
    ]
  }, {
    path: "/blog",
    element: <Blog />,
    errorElement: <ErrorPage />
  }, {
    path: "/contact",
    element: <Contact />,
    errorElement: <ErrorPage />
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
