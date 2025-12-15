import { Code2 } from "lucide-react";

export function PageLoader({ text = "Loading..." }) {
  return (
    <div className="flex flex-col justify-center items-center min-h-[60vh] w-full gap-6">
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-pulse" />
        
        <div className="w-20 h-20 rounded-full border-4 border-primary/10 border-t-primary animate-spin" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-background/80 backdrop-blur-sm p-3 rounded-xl border shadow-sm">
            <Code2 className="w-6 h-6 text-primary" />
          </div>
        </div>
      </div>

      <div className="space-y-2 text-center">
        <h3 className="text-lg font-semibold tracking-tight text-foreground">
          Modern Tech Blog
        </h3>
        <p className="text-sm text-muted-foreground animate-pulse">{text}</p>
      </div>
    </div>
  );
}
