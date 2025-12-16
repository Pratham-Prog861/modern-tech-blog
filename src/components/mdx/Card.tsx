import { cn } from "@/lib/utils";

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  icon?: string;
}

export function Card({ title, children, className, icon }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border bg-card text-card-foreground shadow-sm p-6 transition-all hover:shadow-md",
        className
      )}
    >
      {icon && <div className="text-3xl mb-4">{icon}</div>}
      {title && (
        <h3 className="font-bold text-lg mb-2 tracking-tight">{title}</h3>
      )}
      <div className="text-sm text-muted-foreground [&>ul]:list-disc [&>ul]:pl-4 [&>ul>li]:mb-1 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export function CardGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("grid grid-cols-1 md:grid-cols-3 gap-4 my-8", className)}
    >
      {children}
    </div>
  );
}
