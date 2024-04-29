"use client";

import React from "react";
import { buttonVariants } from "./ui/button";
import { VariantProps } from "class-variance-authority";
import { useFormStatus } from "react-dom";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const ButtonAction = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const { pending } = useFormStatus();

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={pending}
        {...props}
      />
    );
  }
);
ButtonAction.displayName = "ButtonAction";
