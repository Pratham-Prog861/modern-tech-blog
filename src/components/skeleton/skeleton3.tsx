const skeleton3 = () => {
  return (
    <div className="w-full h-full bg-muted/30 rounded-lg p-3 font-mono text-[10px] leading-relaxed text-muted-foreground overflow-hidden">
      <div className="flex gap-1.5 mb-2">
        <div className="w-2 h-2 rounded-full bg-red-400/50" />
        <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
        <div className="w-2 h-2 rounded-full bg-green-400/50" />
      </div>
      <div className="space-y-1">
        <div className="flex gap-2">
          <span className="text-primary">const</span>
          <span>learn</span>
          <span>=</span>
          <span>()</span>
          <span>=&gt;</span>
          <span>{"{"}</span>
        </div>
        <div className="pl-4 flex gap-2">
          <span className="text-primary">return</span>
          <span className="bg-primary/10 px-1 rounded">"Awesome"</span>
        </div>
        <div>{"}"}</div>
      </div>
    </div>
  );
};

export default skeleton3;
