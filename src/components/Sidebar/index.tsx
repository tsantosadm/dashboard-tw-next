import { BarChart, CheckSquare, Cog, Flag, Home, LifeBuoy, Search, SquareStack, User } from "lucide-react";
import { Logo } from "./logo";
import NavItem from "./NavItem";
import UsedSpaceWidget from "./UsedSpaceWidget";
import Profile from "./Profile";

const Sidebar = () => {
    return (
        <aside className="flex flex-col gap-6 border-r border-zinc-300 px-5 py-8">
            <Logo />

            <div className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-1 py-1 shadow-sm">
                <Search className="h-5 w-5 text-zinc-500" />
                <input
                    className="border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
                    placeholder="Search"
                />
            </div>

            <nav className="space-y-0.5">
                <NavItem title="Home" icon={Home} />
                <NavItem title="Dashboard" icon={BarChart} />
                <NavItem title="Projects" icon={SquareStack} />
                <NavItem title="Tasks" icon={CheckSquare} />
                <NavItem title="Reporting" icon={Flag} />
                <NavItem title="Users" icon={User} />
            </nav>

            <div className="mt-auto flex flex-col gap-6">
                <nav className="space-y-0.5">
                    <NavItem title="Support" icon={LifeBuoy}/>
                    <NavItem title="Settings" icon={Cog}/>
                </nav>

                <UsedSpaceWidget />

                <div className="h-px bg-zinc-200" />

                <Profile />
            </div>
        </aside>
    );
}

export default Sidebar;