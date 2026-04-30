// Isso é um Server Component (mais rápido e seguro)
export default function Home() {
  const ferramentas = ["Nmap", "Metasploit", "Wireshark"];

  return (
    <main className="bg-slate-900 text-white min-h-screen">
      <header className="w-screen flex flex-row justify-center p-7 bg-black">
        <h1 className="text-4xl font-bold">Mennonimo</h1>
      </header>
      <h1 className="text-3xl font-bold border-b border-blue-500 pb-2 justify-self-center">
        Meu Arsenal de Segurança
      </h1>
      
    </main>
  );
}