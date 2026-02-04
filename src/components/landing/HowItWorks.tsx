import { UserPlus, BookPlus, LineChart, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Account",
    description: "Sign up with your email in seconds. Your data is secure and private.",
    details: ["Quick registration", "Secure authentication", "No credit card required"],
  },
  {
    icon: BookPlus,
    title: "Add Your Courses",
    description: "Enter your courses, credit hours, and marks. Organize by semester.",
    details: ["Easy course entry", "Multiple mark types", "Semester organization"],
  },
  {
    icon: LineChart,
    title: "Track Progress",
    description: "View your GPA, CGPA, and visualize your academic journey.",
    details: ["Real-time calculations", "Visual analytics", "Progress tracking"],
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 aurora-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 mesh-pattern opacity-40" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get Started in{" "}
            <span className="gradient-text">Three Simple Steps</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Start tracking your academic progress in minutes. 
            No complicated setup, just straightforward results.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-transparent hidden sm:block" />

          {/* Steps */}
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-6 md:gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 1 ? "md:text-right" : ""}`}>
                  <div className="glass-card rounded-xl p-8 relative group hover:shadow-medium transition-all duration-300">
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className={`relative ${index % 2 === 1 ? "md:flex md:flex-col md:items-end" : ""}`}>
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-lg mb-6 max-w-sm">
                        {step.description}
                      </p>
                      
                      {/* Details list */}
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className={`flex items-center gap-2 text-sm text-muted-foreground ${
                              index % 2 === 1 ? "md:flex-row-reverse" : ""
                            }`}
                          >
                            <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step Number & Icon */}
                <div className="relative flex flex-col items-center shrink-0 order-first md:order-none gap-3">
                  {/* Step number badge */}
                  <div className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap">
                    Step {index + 1}
                  </div>
                  
                  {/* Icon circle */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-soft glow-primary relative z-10">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Empty space for alignment */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
