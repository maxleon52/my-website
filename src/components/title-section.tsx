import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}
export function TitleSection({ children, className }: Props) {
  return (
    <div
      className={cn(
        "lines-before-after before:animate-growth after:animate-growth !w-fit px-2",
        className,
      )}
    >
      {children}
    </div>
  );
}
