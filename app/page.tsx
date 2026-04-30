// Isso é um Server Component (mais rápido e seguro)
export default function Home() {
  const ferramentas = ["Nmap", "Metasploit", "Wireshark"];

  return (
    <main className="p-10 bg-slate-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold border-b border-blue-500 pb-2 justify-self-center">
        Meu Arsenal de Segurança
      </h1>
      
      <ul className="mt-5 space-y-2">
        {ferramentas.map((item) => (
          <li key={item} className="bg-slate-800 p-3 rounded shadow-sm hover:bg-slate-700 transition">
            {item}
          </li>
        ))}
      </ul>
    </main>
  );
}