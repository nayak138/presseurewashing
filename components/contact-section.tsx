import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Get Your Free Quote Today</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ready to transform your property? Contact us for a free, no-obligation quote. We respond to all inquiries
            within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground">First Name</label>
                  <Input placeholder="John" className="bg-input border-border" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground">Last Name</label>
                  <Input placeholder="Doe" className="bg-input border-border" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-card-foreground">Email</label>
                <Input type="email" placeholder="john@example.com" className="bg-input border-border" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-card-foreground">Phone</label>
                <Input type="tel" placeholder="(555) 123-4567" className="bg-input border-border" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-card-foreground">Service Needed</label>
                <Input placeholder="House washing, driveway cleaning, etc." className="bg-input border-border" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-card-foreground">Message</label>
                <Textarea
                  placeholder="Tell us about your project and any specific requirements..."
                  className="bg-input border-border min-h-[120px]"
                />
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Get Free Quote</Button>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">Call Us</h3>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                      <p className="text-sm text-muted-foreground">Available 7 days a week</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">Email Us</h3>
                      <p className="text-muted-foreground">info@cleanpro.com</p>
                      <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">Service Area</h3>
                      <p className="text-muted-foreground">Greater Metro Area</p>
                      <p className="text-sm text-muted-foreground">Within 50 miles of downtown</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">Business Hours</h3>
                      <p className="text-muted-foreground">Mon-Fri: 7AM-7PM</p>
                      <p className="text-muted-foreground">Sat-Sun: 8AM-6PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">Emergency Services Available</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Need immediate pressure washing services? We offer same-day and emergency cleaning for urgent
                situations.
              </p>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Call for Emergency Service
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
