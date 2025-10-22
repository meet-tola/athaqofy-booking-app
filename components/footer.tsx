import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.15_0.02_240)] text-[oklch(0.98_0.01_240)] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[oklch(0.42_0.14_150)] rounded-lg flex items-center justify-center">
                <span className="text-[oklch(0.98_0.01_240)] font-bold">ع</span>
              </div>
              <span className="text-xl font-bold">Athaqofy</span>
            </div>
            <p className="text-[oklch(0.98_0.01_240)]/80 text-sm">
              Nurturing minds and strengthening faith through Islamic education.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-[oklch(0.98_0.01_240)]/80">
              <li>
                <a href="#programs" className="hover:text-[oklch(0.98_0.01_240)] transition">
                  Programs
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-[oklch(0.98_0.01_240)] transition">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[oklch(0.98_0.01_240)] transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[oklch(0.98_0.01_240)] transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-[oklch(0.98_0.01_240)]/80">
              <li>
                <a href="#" className="hover:text-[oklch(0.98_0.01_240)] transition">
                  Admissions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[oklch(0.98_0.01_240)] transition">
                  Calendar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[oklch(0.98_0.01_240)] transition">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[oklch(0.98_0.01_240)] transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-[oklch(0.98_0.01_240)]/80">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>08077274957</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>athaqofyglobal@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>
                  148, Muyibi Str., First Benue
                  <br />
                  Olodi Apapa, Lagos
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[oklch(0.98_0.01_240)]/20 pt-8 text-center text-sm text-[oklch(0.98_0.01_240)]/80">
          <p>&copy; 2025 Athaqofy Islamic School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
