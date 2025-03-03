// components/testimonials.tsx
export function Testimonials() {
    const testimonials = [
      {
        quote: "The best event management team in Dhaka! Our corporate conference was flawless.",
        author: "ABC Corporation"
      },
      {
        quote: "Exquisite catering that impressed all our international guests.",
        author: "XYZ International"
      },
      {
        quote: "Party center facilities exceeded all our expectations.",
        author: "Private Client"
      }
    ];
  
    return (
      <section className="w-full pb-12 md:pb-24 bg-background">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Client Experiences</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="p-6 border rounded-xl hover:shadow-lg transition-all">
                <blockquote className="text-muted-foreground italic">
                  {testimonial.quote}
                </blockquote>
                <p className="mt-4 font-semibold">– {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }