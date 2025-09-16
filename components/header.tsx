import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"

export function Header() {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">CP</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">CleanPro</h1>
              <p className="text-sm text-muted-foreground">Pressure Washing</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">
              Reviews
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4 text-primary" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@cleanpro.com</span>
              </div>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Get Free Quote</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
