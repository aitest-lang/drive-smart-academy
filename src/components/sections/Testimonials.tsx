import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Emily Thompson",
    photo: "👩",
    rating: 5,
    quote:
      "I was so nervous about learning to drive, but Sarah made me feel completely at ease. Passed my test on the first try! I couldn't recommend DriveSmart enough.",
    course: "Complete Course",
  },
  {
    name: "Michael Chen",
    photo: "👨",
    rating: 5,
    quote:
      "The intensive course was exactly what I needed. James was incredibly patient and thorough. Got my license in just two weeks!",
    course: "Intensive Course",
  },
  {
    name: "Sophie Williams",
    photo: "👧",
    rating: 5,
    quote:
      "After failing my test twice with another school, I switched to DriveSmart. The difference was night and day. Finally passed with confidence!",
    course: "Complete Course",
  },
  {
    name: "David Rodriguez",
    photo: "🧑",
    rating: 5,
    quote:
      "Maria's bilingual lessons were perfect for my mom. She finally got her license after years of being too intimidated to try. Thank you!",
    course: "Beginner Package",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our successful students
            have to say about their experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-6 shadow-sm border border-border/50 relative"
            >
              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-secondary fill-secondary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/30 flex items-center justify-center text-2xl">
                  {testimonial.photo}
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.course}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Trusted by learners across the city</p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <p className="font-display font-bold text-3xl text-foreground">5,000+</p>
              <p className="text-sm text-muted-foreground">Students Taught</p>
            </div>
            <div className="text-center">
              <p className="font-display font-bold text-3xl text-foreground">4.9/5</p>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
            <div className="text-center">
              <p className="font-display font-bold text-3xl text-foreground">95%</p>
              <p className="text-sm text-muted-foreground">Pass Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
