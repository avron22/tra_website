import { Outlet } from "react-router"
import Navbar from './components/Navbar'
import Footer from "./components/Footer"
import "./styles.css";


export default function App() {
  return (
    <>
    <div className="min-h-screen flex flex-col">
      <div className="bg-[var(--muted)]!">
        <Navbar />
      </div>
      <main className="flex-1 flex flex-col justify-center">
        <Outlet />
      </main>
      <div className="bg-[var(--muted)]">
        <Footer />
      </div>
    </div>
    </>
  )
}