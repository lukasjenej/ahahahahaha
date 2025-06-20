import { useState } from "react";

export default function Home() {
  const [role, setRole] = useState("none");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "admin123") {
      setRole("admin");
    } else if (username === "kuryr" && password === "kuryr123") {
      setRole("courier");
    } else {
      alert("Nesprávné přihlašovací údaje");
    }
  };

  if (role === "admin") {
    return (
      <div>
        <h1>Admin Dashboard</h1>
        <p>✔ Přehled řidičů</p>
        <p>✔ Stav vozidel (STK, pojištění)</p>
        <p>✔ Docházka a výkazy</p>
        <p>✔ Fakturace a export dat</p>
      </div>
    );
  }

  if (role === "courier") {
    return (
      <div>
        <h1>Kurýrský panel</h1>
        <p>👋 Ahoj, zde budeš vidět své směny, výkazy a faktury</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Přihlášení</h1>
      <input placeholder=\"Uživatelské jméno\" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input placeholder=\"Heslo\" type=\"password\" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Přihlásit se</button>
    </div>
  );
}
