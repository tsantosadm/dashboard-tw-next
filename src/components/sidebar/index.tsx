import { Search } from "lucide-react";
import { Logo } from "./logo";

const Sidebar = () => {
    return (
        <aside className="border-r border-zinc-300 px-5 py-8 space-y-6">
            <Logo />

            <div className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-1 py-1 shadow-sm">
                <Search className="h-5 w-5 text-zinc-500"/>
                <input 
                    className="border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600" 
                    placeholder="Search"
                />
            </div>
        </aside>
    );
}

export default Sidebar;