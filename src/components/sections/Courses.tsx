import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const courses = [
  {
    name: "Beginner Package",
    price: "$599",
    description: "Perfect for new drivers starting from scratch",
    features: [
      "10 hours of driving lessons",
      "Pick-up & drop-off included",
      "Basic road safety training",
      "Practice in quiet residential areas",
      "Progress tracking & feedback",
    ],
    popular: false,
  },
  {
    name: "Complete Course",
    price: "$999",
    description: "Our most popular comprehensive driving program",
    features: [
      "20 hours of driving lessons",
      "Pick-up & drop-off included",
      "Highway & city driving practice",
      "Parking maneuvers mastery",
      "Mock driving test included",
      "Theory test preparation",
    ],
    popular: true,
  },
  {
    name: "Intensive Course",
    price: "$1,299",
    description: "Fast-track your way to passing in 2 weeks",
    features: [
      "30 hours of intensive training",
      "Daily lessons available",
      "Priority scheduling",
      "Advanced defensive driving",
      "2 mock tests included",
      "Test booking assistance",
    ],
    popular: false,
  },
];

const Courses = () => {
  return (
    <section id="courses" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Our Driving Courses
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the package that fits your needs. All courses include
            professional instruction and flexible scheduling.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {courses.map((course) => (
            <div
              key={course.name}
              className={`relative bg-card rounded-2xl p-6 border-2 transition-transform hover:-translate-y-1 ${
                course.popular
                  ? "border-primary shadow-lg shadow-primary/10"
                  : "border-border/50"
              }`}
            >
              {course.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6 pt-2">
                <h3 className="font-display font-bold text-xl text-foreground mb-2">
                  {course.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {course.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-display font-extrabold text-4xl text-foreground">
                    {course.price}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {course.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full rounded-full font-semibold ${
                  course.popular ? "" : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                }`}
              >
                <a href="#contact">Get Started</a>
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-10">
          Need a custom package?{" "}
          <a href="#contact" className="text-primary hover:underline font-medium">
            Contact us
          </a>{" "}
          for personalized options.
        </p>
      </div>
    </section>
  );
};

export default Courses;
