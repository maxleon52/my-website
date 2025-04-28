import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface Props extends ComponentProps<"div"> {
  children: React.ReactNode;
}
export function TitleSection({ children, className, ...rest }: Props) {
  return (
    <div
      className={cn(
        "lines-before-after before:animate-growth after:animate-growth !w-fit px-2",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
