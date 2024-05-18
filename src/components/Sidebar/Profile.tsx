import { LogOut } from "lucide-react";


const Profile = () => {
    return (
        <div className="grid grid-cols-profile items-center gap-3">
            <img src="https://github.com/tsantosadm.png"
                className="h-10 w-10 rounded-full"
                alt="Photo perfil" 
            />

            <div className="flex flex-col truncate">
                <span className="text-sm font-semibold text-zinc-700">
                    Talisson Santos
                </span>
                <span className="text-sm text-zinc-500 truncate">
                    tsantodsasadm@neotecnologic.com
                </span>
            </div>
            <button type="button" className="ml-auto rounded-full p-2 hover:bg-zinc-100">
                <LogOut className="h-5 w-5 text-zinc-500" />
            </button>
        </div>
    )
}

export default Profile;