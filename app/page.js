
import Link from "next/link";

export default function Home() {
  return (
    <main className="home-page">
      <h1>Login and Register Web</h1>

      <p>Web Application Development</p>

      <div className="student-info">
        <p><strong>First Name:</strong> Htut Myat</p>
        <p><strong>Last Name:</strong> Min</p>
        <p><strong>Student ID:</strong> 6807593</p>
      </div>

      <h2>Welcome</h2>
      <p>Please register or log in to access the dashboard.</p>

      <ul className="home-links">
        <li><Link href="/register">Register</Link></li>
        <li><Link href="/login">Login</Link></li>
        <li>
          <Link href="/dashboard">
            Dashboard (members only)
          </Link>
        </li>
      </ul>
    </main>
  );
}
