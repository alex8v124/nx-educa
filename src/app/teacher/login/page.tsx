import { LogIn } from "lucide-react"
import Link from "next/link"

export default function TeacherLogin() {
  return (
    <div className="container relative flex pt-20 pb-20 flex-col items-center justify-center lg:px-0 mx-auto min-h-[80vh]">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="font-semibold tracking-tight text-3xl font-headline text-primary">Portal de Profesores</h1>
          <p className="text-sm text-muted-foreground">
            Ingrese sus credenciales para acceder
          </p>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none" htmlFor="email">
                  Correo Electrónico Institucional
                </label>
                <input
                  type="email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  placeholder="profesor@winnetka.edu.pe"
                  id="email"
                  name="email"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none" htmlFor="password">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  placeholder="••••••••"
                  id="password"
                  name="password"
                />
              </div>
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                type="submit"
              >
                <LogIn className="mr-2 h-4 w-4" />
                Ingresar
              </button>
            </form>
          </div>
        </div>
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link href="/" className="hover:text-brand underline underline-offset-4">
            Volver al inicio
          </Link>
        </p>
      </div>
    </div>
  )
}
