import {
    Menubar,
    MenubarContent,
    MenubarGroup,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar";
export function Barra() {
    return (
        <>
            {/* Mobile Menu */}
            <Menubar className="lg:hidden bg-gradient-to-r from-zinc-900 to-black text-white border-none shadow-lg rounded-xl px-4 py-2 menu-texto-font">
                <MenubarMenu>
                    <MenubarTrigger className="text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 font-medium tracking-wide">
                        Menu
                    </MenubarTrigger>
                    <MenubarContent className="bg-zinc-900 border-zinc-700 text-white rounded-xl shadow-2xl mt-2">
                        <MenubarGroup>
                            <MenubarItem className="hover:bg-white/10 rounded-lg cursor-pointer transition-colors">
                                New Tab <MenubarShortcut className="text-zinc-400">⌘T</MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem className="hover:bg-white/10 rounded-lg cursor-pointer transition-colors">
                                New Window
                            </MenubarItem>
                        </MenubarGroup>
                        <MenubarSeparator className="bg-zinc-700" />
                        <MenubarGroup>
                            <MenubarItem className="hover:bg-white/10 rounded-lg cursor-pointer transition-colors">
                                Share
                            </MenubarItem>
                            <MenubarItem className="hover:bg-white/10 rounded-lg cursor-pointer transition-colors">
                                Print
                            </MenubarItem>
                        </MenubarGroup>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>

            {/* PC menu */}
            <Menubar className="hidden lg:flex w-full bg-gradient-to-r from-zinc-900 via-black to-zinc-900 text-white border-none shadow-xl rounded-none px-8 py-6 menu-texto-font">
                <MenubarMenu>
                    <MenubarTrigger className="text-white hover:bg-white/10 hover:text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium text-base tracking-wide">
                        Home
                    </MenubarTrigger>
                    <MenubarTrigger className="text-white hover:bg-white/10 hover:text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium text-base tracking-wide">
                        Projects
                    </MenubarTrigger>
                    <MenubarTrigger className="text-white hover:bg-white/10 hover:text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium text-base tracking-wide">
                        About Me
                    </MenubarTrigger>
                    <MenubarTrigger className="text-white hover:bg-white/10 hover:text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium text-base tracking-wide">
                        Skills
                    </MenubarTrigger>
                    <MenubarTrigger className="text-white hover:bg-white/10 hover:text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium text-base tracking-wide">
                        Contact
                    </MenubarTrigger>
                </MenubarMenu>
            </Menubar>
        </>
    );
}
