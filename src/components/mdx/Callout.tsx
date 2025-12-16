import { cn } from "@/lib/utils";

interface CalloutProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export function Callout({ children, className, title }: CalloutProps) {
  return (
    <div className={cn("my-6 rounded-lg border bg-muted/50 p-6", className)}>
      {title && <h4 className="mb-4 font-bold text-lg">{title}</h4>}
      <div className="[&>ul]:my-0 [&>ul]:pl-4 [&>ul>li]:marker:text-primary">
        {children}
      </div>
    </div>
  );
}
