import { createBrowserRouter, Link, Outlet, RouterProvider, useParams } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import router from './router';

export function User() {
  const { username } = useParams();

  return (
    <>
      <h1>User: {username}</h1>
    </>
  )
}

export function Home() {
  return (
    <>
      <h1>Home Page</h1>
    </>
  )
}

export function About() {
  return (
    <>
      <h1>About Page</h1>
    </>
  )
}

export function Layout() {
  return (
    <div className="Layout">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/user/adam">Ádám</Link>
        <Link to="/user/lilla">Lilla</Link>
      </nav>
      <div className="router-outlet">
        <Outlet />
      </div>

    </div>
  )
}

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
