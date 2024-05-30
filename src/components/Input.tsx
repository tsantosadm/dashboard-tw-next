import { ComponentProps } from "react";

type InputPrefixProps = ComponentProps<'div'>

export function InputPrefix(props: InputPrefixProps){
    return <div {...props} />
}

type InputControlsProps = ComponentProps<'input'>

export function InputControl(props: InputControlsProps){
    return <input
            className="border-0 bg-transparent outline-none p-0 text-zinc-900 placeholder-zinc-600"
            {...props}
            />
}

export type InputRootProps = ComponentProps<'div'>


export function InputRoot(props: InputRootProps) {
    return (
        <div 
            className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-1 py-1 shadow-sm focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100"
            {...props}
            >  
        </div>
    )
};
