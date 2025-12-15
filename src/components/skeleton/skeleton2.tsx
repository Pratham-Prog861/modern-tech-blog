const skeleton2 = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 relative">
      <div className="absolute w-24 h-24 bg-primary/5 rounded-xl rotate-12" />
      <div className="absolute w-24 h-24 bg-primary/10 rounded-xl -rotate-6" />
      <div className="relative w-24 h-24 bg-card border shadow-sm rounded-xl flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-primary/20 animate-pulse" />
      </div>
    </div>
  );
};

export default skeleton2;
