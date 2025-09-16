import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Building2, Car, Fence } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description: "House washing, driveway cleaning, deck restoration, and more for your home.",
    features: ["House exterior washing", "Driveway & walkway cleaning", "Deck & patio restoration", "Roof cleaning"],
    image: "/clean-residential-house-exterior-after-pressure-wa.jpg",
  },
  {
    icon: Building2,
    title: "Commercial Services",
    description: "Professional cleaning for businesses, storefronts, and commercial properties.",
    features: ["Building exterior cleaning", "Parking lot maintenance", "Storefront washing", "Fleet vehicle cleaning"],
    image: "/clean-commercial-building-storefront-after-pressur.jpg",
  },
  {
    icon: Car,
    title: "Vehicle Cleaning",
    description: "Professional vehicle washing for cars, trucks, RVs, and commercial fleets.",
    features: ["Car & truck washing", "RV & boat cleaning", "Fleet vehicle services", "Engine bay cleaning"],
    image: "/clean-car-being-pressure-washed-professionally.jpg",
  },
  {
    icon: Fence,
    title: "Specialty Services",
    description: "Specialized cleaning for fences, outdoor furniture, and unique surfaces.",
    features: ["Fence restoration", "Outdoor furniture cleaning", "Concrete sealing", "Graffiti removal"],
    image: "/clean-wooden-fence-after-pressure-washing-restorat.jpg",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Our Professional Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            From residential homes to commercial properties, we provide comprehensive pressure washing solutions
            tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="order-2 md:order-1">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-card-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </div>
                <div className="order-1 md:order-2">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-t-lg md:rounded-l-none md:rounded-r-lg"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
