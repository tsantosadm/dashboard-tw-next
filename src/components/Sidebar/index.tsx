import { BarChart, CheckSquare, Cog, Flag, Home, LifeBuoy, Search, SquareStack, User } from "lucide-react";
import { Logo } from "./logo";
import NavItem from "./NavItem";
import UsedSpaceWidget from "./UsedSpaceWidget";
import Profile from "./Profile";
import { InputControl, InputPrefix, InputRoot } from "../Input";

const Sidebar = () => {
    return (
        <aside className="flex flex-col gap-6 border-b p-4 bottom-0 border-zinc-300 fixed left-0 top-0 right-0 z-20 bg-white lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:relative">
            <Logo />

            <InputRoot>
                <InputPrefix>
                    <Search className="h-5 w-5 text-zinc-500" />
                </InputPrefix>
                <InputControl placeholder="Search"/>
            </InputRoot>

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