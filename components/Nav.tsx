export default function Nav() {
  const items = [
    { id: "about", label: "About" },
    { id: "featured", label: "Featured" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-zinc-200">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#top" className="font-bold text-zinc-900">
          박성윤
        </a>
        <ul className="hidden sm:flex gap-6 text-sm text-zinc-600">
          {items.map((i) => (
            <li key={i.id}>
              <a
                href={`#${i.id}`}
                className="hover:text-zinc-900 transition-colors"
              >
                {i.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
