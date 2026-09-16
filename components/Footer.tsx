import { IconMail, IconBrandGithub, IconArticle } from "@tabler/icons-react";
import { site } from "@/content/site";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
];

const SOCIAL = [
  { href: `mailto:${site.social.email}`, label: "Email", Icon: IconMail },
  { href: site.social.github, label: "GitHub", Icon: IconBrandGithub },
  { href: site.social.blog, label: "Blog", Icon: IconArticle },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg-soft">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-2xl font-bold text-fg">{site.name}</h3>
            <p className="text-base text-fg-soft">{site.title}</p>
            <ul className="flex gap-x-6 text-fg-soft">
              {SOCIAL.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex transition-colors duration-300 hover:text-accent"
                  >
                    <Icon size={24} stroke={1.75} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <nav aria-label="바닥글 이동" className="hidden gap-x-8 md:flex">
              {NAV.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="font-mono text-sm text-fg-soft transition-colors hover:text-fg"
                >
                  {label}
                </a>
              ))}
            </nav>
            <p className="font-mono text-sm text-fg-muted">
              © {new Date().getFullYear()} {site.nameEn}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
