import { Facebook, Instagram, Twitter, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">CP</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">CleanPro</h3>
                <p className="text-sm opacity-80">Pressure Washing</p>
              </div>
            </div>
            <p className="text-sm opacity-80 text-pretty">
              Professional pressure washing services for residential and commercial properties. Making your property
              shine since 2008.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer" />
              <Instagram className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer" />
              <Twitter className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer" />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#" className="hover:opacity-100">
                  House Washing
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Driveway Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Commercial Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Deck Restoration
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Vehicle Washing
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#" className="hover:opacity-100">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@cleanpro.com</span>
              </div>
              <div className="opacity-80">
                <p>Licensed & Insured</p>
                <p>License #PW-2024-001</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2024 CleanPro Pressure Washing. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}
