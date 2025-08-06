import { LogOut } from "lucide-react";
import { Button } from "../Button";

export function Profile(){
    return(
        <div className="grid items-center gap-3 grid-cols-profile">
            <img src="https://github.com/horquidia-lima.png" alt=""  className="h-10 w-10 rounded-full"/>
            <div className="flex flex-col truncate">
                <span className="text-sm font-semibold text-zinc-700">Horquidia Lima</span>
                <span className="text-sm truncate text-zinc-500">horqui@rocketseat.com.br</span>
            </div>
            <Button type="button" variant="ghost">
                <LogOut className="h-5 w-5 text-zinc-500"/>
            </Button>
        </div>
    )
}