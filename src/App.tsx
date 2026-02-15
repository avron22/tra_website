import { Outlet } from "react-router"
import Navbar from './components/Navbar'
import Footer from "./components/Footer"
import "./styles.css";


export default function App() {
  return (
    <>
      <div className="bg-[var(--muted)]!">
        <Navbar />
      </div>
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}