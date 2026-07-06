import Link from "next/link";
import { IconBrandGithub, IconMenu2 } from "@tabler/icons-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { profile } from "@/lib/content";

const links = [
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export function Barra() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="font-mono text-sm tracking-tight text-white transition-colors hover:text-cyan-400"
        >
          <span className="text-zinc-500">~/</span>benjamin.heredia
        </Link>

        {/* Desktop links */}
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="ml-2 rounded-lg p-2 text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
          >
            <IconBrandGithub className="h-5 w-5" />
          </a>
        </nav>

        {/* Mobile menu */}
        <Menubar className="border-none bg-transparent p-0 shadow-none lg:hidden">
          <MenubarMenu>
            <MenubarTrigger
              aria-label="Open menu"
              className="rounded-lg p-2 text-white hover:bg-white/10 data-[state=open]:bg-white/10"
            >
              <IconMenu2 className="h-5 w-5" />
            </MenubarTrigger>
            <MenubarContent
              align="end"
              className="mt-2 rounded-xl border-zinc-800 bg-zinc-950 text-white shadow-2xl"
            >
              {links.map((link) => (
                <MenubarItem key={link.href} asChild>
                  <Link
                    href={link.href}
                    className="cursor-pointer rounded-lg px-3 py-2 hover:bg-white/10"
                  >
                    {link.label}
                  </Link>
                </MenubarItem>
              ))}
              <MenubarSeparator className="bg-zinc-800" />
              <MenubarItem asChild>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-white/10"
                >
                  <IconBrandGithub className="h-4 w-4" /> GitHub
                </a>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </header>
  );
}
