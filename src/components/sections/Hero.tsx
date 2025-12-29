import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-primary/10" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-secondary/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
              <Shield className="w-4 h-4" />
              <span>Trusted by 5,000+ Students</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight text-balance">
              Your Journey to{" "}
              <span className="text-primary">Confident Driving</span>{" "}
              Starts Here
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Learn to drive in a supportive, stress-free environment with our
              patient instructors. We'll help you build the skills and confidence
              you need to pass your test and drive safely for life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full text-lg px-8 py-6 font-semibold"
              >
                <a href="#contact">
                  Start Learning Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full text-lg px-8 py-6 font-semibold"
              >
                <a href="#courses">View Our Courses</a>
              </Button>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-display font-bold text-2xl text-foreground">95%</p>
                  <p className="text-sm text-muted-foreground">Pass Rate</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-display font-bold text-2xl text-foreground">10+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="relative animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin" style={{ animationDuration: "30s" }} />
              <div className="absolute inset-8 rounded-full border-2 border-dashed border-secondary/40 animate-spin" style={{ animationDuration: "25s", animationDirection: "reverse" }} />
              
              {/* Main content circle */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-2xl">
                <div className="text-center text-primary-foreground p-8">
                  <p className="font-display font-bold text-5xl md:text-6xl">🚗</p>
                  <p className="font-display font-bold text-xl mt-4">Learn to Drive</p>
                  <p className="text-primary-foreground/80 text-sm mt-1">With Confidence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
