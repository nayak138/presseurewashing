import { Button } from "@/components/ui/button"
import { CheckCircle, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background to-muted py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">
                Professional Pressure Washing Services
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Transform your property with our expert pressure washing services. We make your home and business shine
                like new.
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">4.9/5 from 200+ reviews</span>
            </div>

            <div className="space-y-3">
              {[
                "Free estimates & consultations",
                "Fully licensed & insured",
                "Eco-friendly cleaning solutions",
                "Same-day service available",
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Your Free Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Call (555) 123-4567
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src="/professional-pressure-washing-a-house-exterior-wit.jpg"
              alt="Professional pressure washing service in action"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
