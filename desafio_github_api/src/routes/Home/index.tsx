import './style.css';
import NavBar from "../../components/NavBar";
import { Outlet } from 'react-router-dom';


export default function Home() {
  return (
    <>
      <NavBar title="GitHub API" />
      <Outlet />
    </>
  )
}