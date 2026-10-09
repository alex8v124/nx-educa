"use client"

import { Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-card text-card-foreground">
      <div className="container py-12 mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link className="flex items-center" href="/">
              <div className="relative h-16 w-16 bg-white rounded-full overflow-hidden shadow-sm">
                <img alt="Winnetka Logo" className="object-contain w-full h-full p-1" src="https://sistema-web-winnetka.vercel.app/images/logo.png" />
              </div>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">Comprometidos con una educación de excelencia que forma líderes del mañana.</p>
          </div>
          <div>
            <h3 className="font-semibold tracking-wider text-primary">CONTACTO</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3 group cursor-pointer">
                <div className="p-2 bg-primary/10 rounded-md group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">+51 989 588 606 / 497-1978</span>
              </li>
              <li className="flex items-center gap-3 group cursor-pointer">
                <div className="p-2 bg-primary/10 rounded-md group-hover:bg-primary/20 transition-colors">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">Moreras 450, Chaclacayo 15023, Lima, Perú</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold tracking-wider text-primary">HORARIOS</h3>
            <ul className="mt-4 space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">Lunes - Viernes: 8:00 AM - 4:00 PM</li>
              <li className="flex items-center gap-2">Atención a padres: 9:00 AM - 1:00 PM</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2025 Colegio Winnetka . Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">Desarrollado por <span className="font-medium text-foreground">All-In Dev Solutions</span></p>
        </div>
      </div>
    </footer>
  )
}
