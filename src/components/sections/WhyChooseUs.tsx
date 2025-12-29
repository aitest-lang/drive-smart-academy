import { Award, Users, Calendar, Car } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "High Pass Rates",
    description:
      "Our students achieve a 95% first-time pass rate, thanks to our comprehensive training methods and experienced instructors.",
  },
  {
    icon: Users,
    title: "Patient Instructors",
    description:
      "Our friendly instructors create a calm, supportive learning environment where you can build confidence at your own pace.",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description:
      "Book lessons that fit your lifestyle with evening and weekend availability. Easy online booking and rescheduling.",
  },
  {
    icon: Car,
    title: "Modern Vehicles",
    description:
      "Learn in comfortable, dual-control vehicles equipped with the latest safety features. Manual and automatic options available.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Why Choose DriveSmart?
          </h2>
          <p className="text-lg text-muted-foreground">
            We're committed to making your learning experience enjoyable, effective,
            and stress-free.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
