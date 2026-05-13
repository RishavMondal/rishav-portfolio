export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="flex justify-between items-center px-8 py-5">

        <h1 className="text-2xl font-bold">
          Rishav
        </h1>

        <div className="flex gap-6 text-zinc-400">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </nav>
  );
}