import { Award, Star } from "lucide-react";

const instructors = [
  {
    name: "Sarah Mitchell",
    role: "Lead Instructor",
    experience: "12 years experience",
    bio: "Sarah specializes in helping nervous learners build confidence. Her patient, encouraging teaching style has helped over 1,000 students pass their tests.",
    rating: 4.9,
    certifications: ["ADI Certified", "First Aid Trained"],
    avatar: "👩‍🏫",
  },
  {
    name: "James Wilson",
    role: "Senior Instructor",
    experience: "8 years experience",
    bio: "James focuses on defensive driving techniques and road safety awareness. He's known for his calm demeanor and clear explanations.",
    rating: 4.8,
    certifications: ["ADI Certified", "Advanced Driving"],
    avatar: "👨‍🏫",
  },
  {
    name: "Maria Garcia",
    role: "Instructor",
    experience: "5 years experience",
    bio: "Maria is fluent in English and Spanish, making lessons accessible to more learners. She specializes in intensive driving courses.",
    rating: 4.9,
    certifications: ["ADI Certified", "Bilingual"],
    avatar: "👩‍💼",
  },
];

const Instructors = () => {
  return (
    <section id="instructors" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Meet Our Instructors
          </h2>
          <p className="text-lg text-muted-foreground">
            Our friendly, certified instructors are dedicated to your success. Each
            brings years of experience and a passion for teaching.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {instructors.map((instructor) => (
            <div
              key={instructor.name}
              className="bg-card rounded-2xl p-6 shadow-sm border border-border/50 text-center"
            >
              {/* Avatar */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/30 flex items-center justify-center mx-auto mb-4 text-4xl">
                {instructor.avatar}
              </div>

              {/* Info */}
              <h3 className="font-display font-bold text-xl text-foreground mb-1">
                {instructor.name}
              </h3>
              <p className="text-primary font-medium text-sm mb-1">
                {instructor.role}
              </p>
              <p className="text-muted-foreground text-sm mb-4">
                {instructor.experience}
              </p>

              {/* Rating */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(instructor.rating)
                        ? "text-secondary fill-secondary"
                        : "text-muted"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm font-medium text-foreground">
                  {instructor.rating}
                </span>
              </div>

              {/* Bio */}
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {instructor.bio}
              </p>

              {/* Certifications */}
              <div className="flex flex-wrap justify-center gap-2">
                {instructor.certifications.map((cert) => (
                  <span
                    key={cert}
                    className="inline-flex items-center gap-1 bg-accent/10 text-accent text-xs px-3 py-1 rounded-full font-medium"
                  >
                    <Award className="w-3 h-3" />
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
