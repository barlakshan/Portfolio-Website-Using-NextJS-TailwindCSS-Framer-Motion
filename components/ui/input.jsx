import * as React from "react";

import { cn } from "@/lib/utils";

export const Input = (props) =>((
    { classNema, propTypes, props }, ref) => {
        return (
            (
                <input type={type} className={cn(" flex has-[48] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none", classNema)}>
                </input>
            )
        )
    });


  