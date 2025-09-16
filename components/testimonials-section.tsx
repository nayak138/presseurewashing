import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Residential Customer",
    rating: 5,
    text: "CleanPro transformed our dirty driveway and house exterior. The results were amazing and the team was professional and punctual. Highly recommend!",
    image: "/professional-headshot-of-satisfied-female-customer.jpg",
  },
  {
    name: "Mike Chen",
    location: "Business Owner",
    rating: 5,
    text: "We use CleanPro for our restaurant exterior monthly. They always do an excellent job and help maintain our professional appearance. Great service!",
    image: "/professional-headshot-of-satisfied-male-business-o.jpg",
  },
  {
    name: "Lisa Rodriguez",
    location: "Property Manager",
    rating: 5,
    text: "Managing multiple properties, I need reliable service. CleanPro delivers consistent quality work on time and within budget. They're my go-to team.",
    image: "/professional-headshot-of-satisfied-female-property.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Don't just take our word for it. Here's what our satisfied customers have to say about our pressure washing
            services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>

                  <div className="relative">
                    <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                    <p className="text-card-foreground text-pretty pl-6">{testimonial.text}</p>
                  </div>

                  <div className="flex items-center space-x-3 pt-4 border-t border-border">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
