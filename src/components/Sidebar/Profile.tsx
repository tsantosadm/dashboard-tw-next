import { LogOut } from "lucide-react";
import { Button } from "../Button";


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
            <Button type="button" variant="ghost">
                <LogOut className="h-5 w-5 text-zinc-500" />
            </Button>
        </div>
    )
}

export default Profile;