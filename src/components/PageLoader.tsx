export function PageLoader({ text = "Loading..." }) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="animate-pulse text-muted-foreground">{text}</p>
      </div>
    )
  }
  