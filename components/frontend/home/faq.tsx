import { CheckCircle } from "lucide-react";

// components/why-choose-us.tsx
export function WhyChooseUs() {
    const features = [
      { title: "500+ Events", description: "Successfully organized" },
      { title: "Premium Quality", description: "Ingredients & Materials" },
      { title: "24/7 Support", description: "Dedicated team" },
      { title: "5-Star Rating", description: "Customer satisfaction" },
    ];
  
    return (
      <section className="w-full pb-12 md:pb-24 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container grid md:grid-cols-2 gap-12 px-4 md:px-6">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Why Choose Namira BD?</h2>
            <p className="text-muted-foreground">
              Discover the difference of working with Bangladesh&apos;s premier event and hospitality experts
            </p>
            <ul className="space-y-4">
              {[
                "Experienced professional team",
                "Customized solutions",
                "Hygiene certified kitchens",
                "State-of-the-art venues"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature) => (
              <div key={feature.title} className="p-6 bg-background rounded-xl border">
                <h3 className="text-2xl font-bold text-primary">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }