const WhyThisBlog = () => {
  return (
    <section className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Why This Blog?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="space-y-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary font-bold text-xl">
            1
          </div>
          <h3 className="text-xl font-bold">Beginner-friendly</h3>
          <p className="text-muted-foreground">
            Complex topics broken down into simple, easy-to-understand
            explanations.
          </p>
        </div>
        <div className="space-y-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary font-bold text-xl">
            2
          </div>
          <h3 className="text-xl font-bold">Modern Tech Stack</h3>
          <p className="text-muted-foreground">
            Focus on the latest tools and frameworks used in the industry today.
          </p>
        </div>
        <div className="space-y-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary font-bold text-xl">
            3
          </div>
          <h3 className="text-xl font-bold">Practical Examples</h3>
          <p className="text-muted-foreground">
            Real-world code snippets and projects to help you learn by doing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyThisBlog;
